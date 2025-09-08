import React from 'react'
import type { JoinedConnection } from '@vaultrice/sdk'

// Helper function to get user initials
export const getUserInitials = (name: string | undefined): string => {
  if (!name) return '?'

  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase()
}

// Helper function to generate consistent background color from name
export const getAvatarColor = (name: string | undefined): string => {
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  ]

  // Default to first color if no name
  if (!name) return colors[0]

  // Simple hash function to get consistent color for same name
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  return colors[Math.abs(hash) % colors.length]
}

// Avatar renderer for presence (36px avatars)
export const defaultRenderPresenceAvatar = (connection: JoinedConnection, isOwnConnection = false, predefined = false) => {
  const userData = connection.data
  const userName = userData?.name as string || 'Anonymous'
  const avatarUrl = userData?.avatarUrl as string | undefined

  const titleSuffix = isOwnConnection ? ' (You)' : ''
  const predefinedSuffix = predefined ? ' (Team Member)' : ''
  const title = `${userName}${titleSuffix}${predefinedSuffix}`

  const className = isOwnConnection
    ? 'vaultrice-presence-avatar vaultrice-presence-avatar-own'
    : 'vaultrice-presence-avatar'

  const fallbackClassName = isOwnConnection
    ? 'vaultrice-presence-avatar-fallback vaultrice-presence-avatar-fallback-own'
    : 'vaultrice-presence-avatar-fallback'

  return avatarUrl
    ? (
      <img
        src={avatarUrl}
        alt={userName}
        className={className}
        title={title}
      />
      )
    : (
      <div
        className={fallbackClassName}
        style={{ background: getAvatarColor(userName) }}
        title={title}
      >
        {getUserInitials(userName)}
      </div>
      )
}

// Avatar renderer for chat (32px avatars)
export const defaultRenderChatAvatar = (user: any, isOwnConnection = false) => {
  const userName = user?.name as string || 'Anonymous'
  const avatarUrl = user?.avatarUrl as string | undefined

  const title = `${userName}${isOwnConnection ? ' (You)' : ''}`

  return avatarUrl
    ? (
      <img
        src={avatarUrl}
        alt={userName}
        className='vaultrice-chat-avatar-img'
        title={title}
      />
      )
    : (
      <div
        className='vaultrice-chat-avatar-fallback'
        style={{ background: getAvatarColor(userName) }}
        title={title}
      >
        {getUserInitials(userName)}
      </div>
      )
}
