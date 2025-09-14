import type { Credentials, InstanceOptions, JSONObj, JoinedConnection } from '@vaultrice/sdk'
import type { ReactNode } from 'react'

/**
 * Standardized user type used across all components.
 */
export interface User {
  /**
   * Unique identifier for the user (required for consistency).
   */
  id?: string
  /**
   * Display name for the user.
   */
  name?: string
  /**
   * Optional avatar URL for the user.
   */
  avatarUrl?: string
  /**
   * Allow additional user metadata.
   */
  [key: string]: any
}

/**
 * Object containing authentication credentials for user verification.
 */
export interface UserAuthSettings {
  userIdSignature?: string;
  identityToken?: string;
}

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
  label: string | ReactNode
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
  /**
   * Whether to bind to changes.
   * @default true
   */
  bind?: boolean
  /**
   * Show percentage instead of raw vote count.
   */
  showPercentage?: boolean
  /**
   * Show total votes below the results.
   * @default true
   */
  showTotalVotes?: boolean
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
  title?: string | ReactNode,
  /**
   * Optional description for the voting.
   */
  description?: string | ReactNode,
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
  /**
   * Whether to bind to changes.
   * @default true
   */
  bind?: boolean,
  /**
   * Optional user identifier for localStorage.
   * If not provided it will use the user.id.
   * @default user.id
   */
  userIdForLocalStorage?: string
  /**
   * Show percentage instead of raw vote count.
   */
  showPercentage?: boolean
  /**
   * Show total votes below the results.
   * @default true
   */
  showTotalVotes?: boolean
}

export interface PredefinedUser {
  [key: string]: any
}

/**
 * Props for the Presence component.
 */
export interface PresenceProps {
  /**
   * Unique identifier for the presence instance.
   */
  id: string
  /**
   * Current user information.
   */
  user: User
  /**
   * Callback function called when a message is received.
   */
  // eslint-disable-next-line no-unused-vars
  onMessage?: ((msg: JSONObj) => void)
  /**
   * Callback function called when send function is ready to use.
   */
  // eslint-disable-next-line no-unused-vars
  onSendReady?: ((send: (msg: any) => void) => void)
  /**
   * Maximum number of avatars to display before showing "+N more".
   */
  maxAvatars?: number
  /**
   * Custom avatar renderer function.
   */
  // eslint-disable-next-line no-unused-vars
  renderAvatar?: (connection: JoinedConnection, isOwnConnection?: boolean, predefinedUser?: boolean) => ReactNode
  /**
   * Property name(s) to use for deduplicating users.
   * @default 'id'
   */
  deduplicateBy?: string | string[]
  /**
   * Vaultrice credentials for authentication.
   */
  credentials?: Credentials
  /**
   * Optional instance options.
   */
  instanceOptions?: InstanceOptions
  /**
   * List of predefined team members to show even when offline.
   */
  predefinedUsers?: PredefinedUser[]
  /**
   * Whether to show offline predefined users.
   */
  showOfflineUsers?: boolean
  /**
   * Optional object containing authentication credentials for user verification.
   */
  auth?: UserAuthSettings
}

/**
 * Represents a chat message.
 */
export interface ChatMessage {
  id: string
  user?: string
  message: string
  timestamp: number
  userId?: string
  avatarUrl?: string
  type?: 'message' | 'system'
  reactions?: { [emoji: string]: string[] }
  [key: string]: any
}

/**
 * Props for the Chat component.
 */
export interface ChatProps {
  id: string
  user: User
  // eslint-disable-next-line no-unused-vars
  onMessage?: (msg: JSONObj) => void
  // eslint-disable-next-line no-unused-vars
  onSendReady?: (send: (msg: any) => void) => void
  placeholder?: string
  showTimestamps?: boolean
  showUserAvatars?: boolean
  autoScroll?: boolean
  credentials?: Credentials
  instanceOptions?: InstanceOptions
  // eslint-disable-next-line no-unused-vars
  messageFilter?: (msg: any) => boolean
  // eslint-disable-next-line no-unused-vars
  renderMessage?: (msg: ChatMessage, isOwnMessage: boolean) => ReactNode
  /**
   * Custom avatar renderer function for chat messages.
   */
  // eslint-disable-next-line no-unused-vars
  renderAvatar?: (user: any, isOwnConnection?: boolean) => ReactNode
  disabled?: boolean
  /** If true, messages will be persisted using Vaultrice */
  persistMessages?: boolean
  messageHistoryLimit?: number
  /**
   * Optional object containing authentication credentials for user verification.
   */
  auth?: UserAuthSettings
}

export interface ChatRoomProps {
  /**
   * Unique identifier for the chat room (shared between chat and presence).
   */
  id: string
  /**
   * Current user information.
   */
  user: User
  /**
   * Optional room title.
   */
  title?: string
  /**
   * Optional room description or subtitle.
   */
  subtitle?: string
  /**
   * Show presence component above chat.
   * @default true
   */
  showPresence?: boolean
  /**
   * Show room header with title/subtitle.
   * @default true
   */
  showHeader?: boolean
  /**
   * Vaultrice credentials for authentication.
   */
  credentials?: ChatProps['credentials']
  /**
   * Optional instance options (shared between chat and presence).
   */
  instanceOptions?: ChatProps['instanceOptions']
  /**
   * Property name(s) to use for deduplicating users.
   * @default 'id'
   */
  deduplicateBy?: PresenceProps['deduplicateBy']
  /**
   * List of predefined team members to show in presence.
   */
  predefinedUsers?: PresenceProps['predefinedUsers']
  /**
   * Whether to show offline predefined users in presence.
   */
  showOfflineUsers?: PresenceProps['showOfflineUsers']
  /**
   * Maximum number of avatars to display in presence.
   */
  maxAvatars?: PresenceProps['maxAvatars']
  /**
   * Custom avatar renderer for presence.
   */
  renderPresenceAvatar?: PresenceProps['renderAvatar']
  /**
   * Custom avatar renderer for chat messages.
   */
  renderChatAvatar?: ChatProps['renderAvatar']
  /**
   * Custom message renderer for chat.
   */
  renderMessage?: ChatProps['renderMessage']
  /**
   * Chat-specific props
   */
  placeholder?: ChatProps['placeholder']
  showTimestamps?: ChatProps['showTimestamps']
  showUserAvatars?: ChatProps['showUserAvatars']
  autoScroll?: ChatProps['autoScroll']
  messageFilter?: ChatProps['messageFilter']
  disabled?: ChatProps['disabled']
  /** If true, messages will be persisted using Vaultrice */
  persistMessages?: ChatProps['persistMessages']
  /** Maximum number of messages to keep in persistent history (default: 100) */
  messageHistoryLimit?: ChatProps['messageHistoryLimit']
  /**
   * Callbacks
   */
  onMessage?: ChatProps['onMessage']
  onSendReady?: ChatProps['onSendReady']
  /**
   * Optional object containing authentication credentials for user verification.
   */
  auth?: ChatProps['auth']
}
