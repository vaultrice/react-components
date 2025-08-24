import { Voting } from '..'

export interface VotingTestProps {
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

/** Primary UI component for user interaction */
// eslint-disable-next-line no-empty-pattern
export const VotingTest = ({}: VotingTestProps) => {
  return (
    <>
      <Voting
        id='voting1'
        title='Vote for our latest feature proposal'
        description='Every voice counts to get this component like you want it.'
        choices={[{ id: 'op1', label: 'Create a render prop.' }, { id: 'op2', label: 'Have a dark theme.' }, { id: 'op3', label: 'I\'m already happy with what I got.' }]}
        credentials={{
          projectId: import.meta.env.VITE_VAULTRICE_PROJECTID,
          apiKey: import.meta.env.VITE_VAULTRICE_APIKEY,
          apiSecret: import.meta.env.VITE_VAULTRICE_APISECRET
        }}
      />
    </>
  )
}
