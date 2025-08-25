import type { Credentials, InstanceOptions } from '@vaultrice/sdk'

/**
 * Represents a selectable option in a voting component.
 */
export type ChoiceOption = {
  /**
   * Unique identifier for the choice.
   */
  id: string,
  /**
   * Display label for the choice.
   */
  label: string
}

/**
 * Props for the VotingResult component.
 */
export interface VotingResultProps {
  /**
   * Unique identifier for the voting instance.
   */
  id: string,
  /**
   * Array of available choices for the voting.
   */
  choices: Array<ChoiceOption>,
  /**
   * Optional instance options for managing choices storage.
   */
  choicesInstanceOptions?: InstanceOptions,
  /**
   * Optional credentials for accessing Vaultrice SDK, if not using vaultrice.init.
   */
  credentials?: Credentials,
}

/**
 * Props for the Voting component.
 */
export interface VotingProps {
  /**
   * Unique identifier for the voting instance.
   */
  id: string,
  /**
   * Optional headline for the voting.
   */
  title?: string,
  /**
   * Optional description for the voting.
   */
  description?: string,
  /**
   * Optional label for the voting button.
   * @default 'vote'
   */
  voteLabel?: string,
  /**
   * Array of available choices for the voting.
   */
  choices: Array<ChoiceOption>,
  /**
   * Optional instance options for managing choices storage.
   */
  choicesInstanceOptions?: InstanceOptions,
  /**
   * Optional user identifier. If provided, voting status is stored in Vaultrice; otherwise, localStorage is used.
   */
  userId?: string,
  /**
   * Optional instance options for managing user storage.
   */
  userInstanceOptions?: InstanceOptions,
  /**
   * Optional credentials for accessing Vaultrice SDK, if not using vaultrice.init.
   */
  credentials?: Credentials,
  // Additional props for future extension:
  // primary?: boolean;
  // backgroundColor?: string;
  // size?: 'small' | 'medium' | 'large';
  // label: string;
  // onClick?: () => void;
}
