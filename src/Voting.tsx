import { useEffect, useState } from 'react'
import type { Credentials, InstanceOptions } from '@vaultrice/sdk'
import { getNonLocalStorage, useMultiNonLocalStates } from '@vaultrice/react'
import type { VotingProps, VotingResultProps } from './types'

import { Card } from './shared/Card'
import { Meter } from './shared/Meter'
import { Button } from './shared/Button'

import './Voting.css'

/**
 * Custom hook to manage voting state for a user.
 *
 * Handles checking if the user has already voted, voting logic,
 * and updating vote counts in Vaultrice or localStorage.
 *
 * @param id - Unique identifier for the voting instance.
 * @param userId - Optional user identifier. If provided, voting status is stored in Vaultrice; otherwise, localStorage is used.
 * @param userInstanceOptions - Optional instance options for managing user storage.
 * @param choicesInstanceOptions - Optional instance options for managing choices storage.
 * @param credentials - Optional credentials for accessing Vaultrice SDK.
 * @returns [loaded, isVoting, voted, vote, error]
 *   - loaded: boolean indicating if user voting status is loaded.
 *   - isVoting: boolean indicating if voting is in progress.
 *   - voted: boolean indicating if user has already voted.
 *   - vote: function to cast a vote for a choice.
 *   - error: any error encountered during voting.
 */
function useUserVoting (
  id: string,
  userId?: string,
  userInstanceOptions?: InstanceOptions,
  choicesInstanceOptions?: InstanceOptions,
  credentials?: Credentials
) {
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

  /**
   * Casts a vote for the specified choice.
   *
   * Increments the vote count for the choice and marks the user as voted.
   *
   * @param choiceId - The ID of the choice to vote for.
   */
  const vote = async (choiceId: string) => {
    try {
      if (voted) return
      setIsVoting(true)

      // increment choice
      const cNls = getNonLocalStorage({ ...choicesInstanceOptions, id: votingObjId }, credentials)
      await cNls.incrementItem(`${votingObjId}-${choiceId}`)

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

/**
 * Displays the voting results for each choice.
 *
 * Fetches and displays the number of votes and percentage for each choice.
 *
 * @param props - VotingResultProps
 * @returns A React element showing voting results.
 */
const VotingResult = ({
  id,
  choices = [],
  choicesInstanceOptions,
  credentials,
  bind = true
}: VotingResultProps) => {
  const [choicesKeys] = useState(choices.map(c => (`vaultrice-voting-${id}-choices-${c.id}`)))

  // get results
  type ResultValue = { value?: number }
  const [results] = useMultiNonLocalStates(`vaultrice-voting-${id}-choices`, choicesKeys, { credentials, instanceOptions: choicesInstanceOptions, bind }) as [{ [key: string]: ResultValue }]

  if (!results) {
    return (
      <div className='vaultrice-voting-result vaultrice-voting-expired'>
        <div className='vaultrice-voting--result-label'>
          <span className='vaultrice-voting-expired-icon' aria-label='Voting closed' role='img'>🔒</span>
          <label className='vaultrice-voting-expired-label'>Voting closed</label>
          <span className='vaultrice-voting-result-label-tag'>Expired</span>
        </div>
        <p className='vaultrice-voting-expired-text'>
          This voting has expired and is no longer accepting responses.
        </p>
      </div>
    )
  }

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

/**
 * Voting component for Vaultrice UI.
 *
 * Renders a voting form with selectable choices, handles voting logic,
 * and displays results after voting.
 *
 * @param props - VotingProps
 * @returns A React element for voting.
 */
export const Voting = ({
  id,
  title,
  description,
  voteLabel = 'vote',
  choices = [],
  choicesInstanceOptions,
  userId,
  userInstanceOptions,
  credentials,
  bind = true
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
          bind={bind}
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
        Powered by <a href='https://www.vaultrice.com' target='_blank' rel='noreferrer'>vaultrice.com</a> get yours <a href='https://www.vaultrice.app/register' target='_bland'>for free!</a>
      </div>
    </Card>
  )
}
