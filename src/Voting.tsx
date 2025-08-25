import { useEffect, useState } from 'react'
import type { Credentials, InstanceOptions } from '@vaultrice/sdk'
import { getNonLocalStorage, useMultiNonLocalStates } from '@vaultrice/react'

import { Card } from './shared/Card'
import { Meter } from './shared/Meter'
import { Button } from './shared/Button'

import './Voting.css'

/**
 * Option to be choosen
 */
export type ChoiceOption = {
  /** identifies the choice */
  id: string,
  /** label for the choice  */
  label: string
}

interface VotingResultProps {
  /** identifies the voting */
  id: string,
  // /** Array of ChoiceOption */
  choices: Array<ChoiceOption>,
  // /** optional choicesInstanceOptions */
  choicesInstanceOptions?: InstanceOptions,
  // /** optional credentials if not using vaultrice.init */
  credentials?: Credentials,
}

export interface VotingProps {
  /** identifies the voting */
  id: string,
  // /** a headline for the voting */
  title?: string,
  // /** a description for the voting */
  description?: string,
  // /** optional label for the voting button */
  voteLabel?: string,
  // /** Array of ChoiceOption */
  choices: Array<ChoiceOption>,
  // /** optional choicesInstanceOptions */
  choicesInstanceOptions?: InstanceOptions,

  // /**  optional userId - if provided user has voted will be stored on vaultrice, else in localstorage */
  userId?: string,
  // /** optional userInstanceOptions */
  userInstanceOptions?: InstanceOptions,

  // /** optional credentials if not using vaultrice.init */
  credentials?: Credentials,
  // /** Is this the principal call to action on the page? */
  // primary?: boolean;
  // /** What background color to use */
  // backgroundColor?: string;
  // /** How large should the button be? */
  // size?: 'small' | 'medium' | 'large';
  // /** Button contents */
  // label: string;
  // /** Optional click handler */
  // onClick?: () => void;
}

function useUserVoting (id: string, userId?: string, userInstanceOptions?: InstanceOptions, choicesInstanceOptions?: InstanceOptions, credentials?: Credentials) {
  const [error, setError] = useState<any>()
  const [loaded, setLoaded] = useState(false)
  const [voted, setVoted] = useState(false)
  const [isVoting, setIsVoting] = useState(false)

  const userKey = `vaultrice-voting-${id}-user-${userId}-voted`
  const userObjId = `vaultrice-voting-${id}-user-${userId}`
  const votingObjId = `vaultrice-voting-${id}-choices`

  const uNls = userId ? getNonLocalStorage({ ...userInstanceOptions, id: userObjId }, credentials) : undefined

  // check if user voted already
  useEffect(() => {
    const load = async () => {
      if (userId) {
        const userVoted = await uNls?.getItem(userKey)
        if (userVoted) setVoted(true)
      } else {
        if (window.localStorage.getItem(userKey)) setVoted(true)
      }

      setLoaded(true)
    }

    try {
      load()
    } catch (err) {
      setError(err)
    }
  }, [userKey, uNls, userId])

  const vote = async (choiceId: string) => {
    try {
      if (voted) return
      setIsVoting(true)

      // increment choice
      const cNls = getNonLocalStorage({ ...choicesInstanceOptions, id: votingObjId }, credentials)
      cNls.incrementItem(`${votingObjId}-${choiceId}`)

      // update user
      if (userId) {
        await uNls?.setItem(userKey, Date.now())
      } else {
        window.localStorage.setItem(userKey, Date.now().toString())
      }

      setIsVoting(false)
      setVoted(true)
    } catch (err) {
      setError(err)
    }
  }

  return [loaded, isVoting, voted, vote, error]
}

const VotingResult = ({
  id,
  choices = [],
  choicesInstanceOptions,
  credentials
}: VotingResultProps) => {
  const [choicesKeys] = useState(choices.map(c => (`vaultrice-voting-${id}-choices-${c.id}`)))

  // get results
  type ResultValue = { value?: number }
  const [results] = useMultiNonLocalStates(`vaultrice-voting-${id}-choices`, choicesKeys, { credentials, instanceOptions: choicesInstanceOptions }) as [{ [key: string]: ResultValue }]

  if (!results) return null

  const totalVotes = Object.values(results).reduce((mem, v) => {
    if (v?.value) return mem + v.value
    return mem
  }, 0)

  return (
    <div className='vaultrice-voting-results'>
      {choices.map(choice => {
        const v = results[`vaultrice-voting-${id}-choices-${choice.id}`]
        const percentage = v?.value ? (v.value / totalVotes) * 100 : 0

        return (
          <div key={choice.id} className='vaultrice-voting-result'>
            <div className='vaultrice-voting--result-label'>

              <label>{choice.label}</label>
              <span className='vaultrice-voting-result-label-tag'>{v?.value || 0}</span>
            </div>
            <Meter percentage={percentage} />
          </div>
        )
      })}
    </div>
  )
}

export const Voting = ({
  id,
  title,
  description,
  voteLabel = 'vote',
  choices = [],
  choicesInstanceOptions,
  userId,
  userInstanceOptions,
  credentials
}: VotingProps) => {
  const [selectedChoice, setSelectedChoice] = useState(choices?.[0]?.id)

  const [loadedUser, isVoting, voted, vote] = useUserVoting(id, userId, userInstanceOptions, choicesInstanceOptions, credentials)

  if (!loadedUser) return null

  return (
    <Card>
      {!!title && <h3 className='vaultrice-voting-title'>{title}</h3>}
      {!!description && <p className='vaultrice-voting-description'>{description}</p>}

      {!!voted && (
        <VotingResult
          id={id}
          choices={choices}
          choicesInstanceOptions={choicesInstanceOptions}
          credentials={credentials}
        />
      )}

      {!voted && (
        <>
          <div className='vaultrice-voting-choices'>
            {
          choices.map(choice => {
            return (
              <div key={choice.id} className='vaultrice-voting-choice'>
                <input
                  type='radio'
                  name={choice.id}
                  value={choice.id}
                  checked={choice.id === selectedChoice}
                  onChange={() => { setSelectedChoice(choice.id) }}
                />
                <label htmlFor={choice.id}>{choice.label}</label>
              </div>
            )
          })
        }
          </div>
          <Button onClick={() => { vote(selectedChoice) }} disabled={isVoting}>{isVoting ? '...voting' : voteLabel}</Button>
        </>
      )}

      <div className='vaultrice-voting-disclaimer'>
        Powered by <a href='https://vaultrice.com' target='_blank' rel='noreferrer'>vaultrice.com</a> get yours <a href='https://vaultrice.com' target='_bland'>for free!</a>
      </div>
    </Card>
  )
}
