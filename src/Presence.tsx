import type { JoinedConnection } from '@vaultrice/sdk'
import React, { useEffect, useRef, useMemo } from 'react'
import { useMessaging } from '@vaultrice/react'
import type { PresenceProps, PredefinedUser } from './types'
import { defaultRenderPresenceAvatar } from './shared/avatarUtils'
import './shared/theme.css'
import './Presence.css'

// Helper function to get match value based on deduplicateBy
const getMatchValue = (userData: any, deduplicateBy?: string | string[]): any => {
  if (!deduplicateBy) return userData?.id // Default to id instead of name

  if (Array.isArray(deduplicateBy)) {
    // For array, create a composite key
    return deduplicateBy.map(prop => userData?.[prop]).join('|')
  }

  return userData?.[deduplicateBy]
}

export const Presence: React.FC<PresenceProps> = ({
  id,
  user,
  auth,
  onMessage,
  onSendReady,
  maxAvatars = 5,
  renderAvatar = defaultRenderPresenceAvatar,
  deduplicateBy = 'id', // Default to 'id' instead of undefined
  credentials,
  instanceOptions,
  predefinedUsers = [],
  showOfflineUsers = false
}) => {
  const [connected, send, join, leave, connectionId] = useMessaging(id, onMessage, {
    credentials,
    instanceOptions,
    deduplicateBy
  })
  const hasJoinedRef = useRef(false)
  const onSendReadyRef = useRef(onSendReady)

  // Automatically enable showOfflineUsers when predefinedUsers are provided
  const shouldShowOfflineUsers = showOfflineUsers || predefinedUsers.length > 0

  // Memoize user object based on deduplicateBy properties or all properties
  const memoizedUser = useMemo(() => user,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deduplicateBy
      ? (Array.isArray(deduplicateBy) ? deduplicateBy : [deduplicateBy]).map(prop => user[prop as keyof typeof user])
      : Object.values(user)
  )

  // Keep the latest onSendReady callback in a ref
  useEffect(() => {
    onSendReadyRef.current = onSendReady
  }, [onSendReady])

  // Expose send function to parent (only when it becomes available)
  useEffect(() => {
    if (onSendReadyRef.current && send) {
      onSendReadyRef.current(send)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // No send in dependencies - only run once when component mounts

  // Join presence on mount, leave on unmount - only when user values change
  useEffect(() => {
    if (memoizedUser && !hasJoinedRef.current) {
      join(memoizedUser, auth)
      hasJoinedRef.current = true
    }

    return () => {
      if (hasJoinedRef.current) {
        leave()
        hasJoinedRef.current = false
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoizedUser]) // Use memoized user instead of user

  // Enhanced logic to merge connected users with predefined and recent users
  const enhancedUsers = useMemo(() => {
    // Combine predefined and recent users
    const allKnownUsers = [...predefinedUsers]

    const result: Array<{
      connection: JoinedConnection | null
      predefined?: PredefinedUser
      isOnline: boolean
    }> = []

    // Track which known users are currently connected
    const connectedUserIds = new Set<string>()

    // Add connected users, matching with known users when possible
    connected.forEach(conn => {
      const connMatchValue = getMatchValue(conn.data, deduplicateBy)
      const knownUser = allKnownUsers.find(ku => {
        const knownMatchValue = getMatchValue(ku, deduplicateBy)
        return knownMatchValue === connMatchValue
      })

      if (knownUser) {
        connectedUserIds.add(getMatchValue(knownUser, deduplicateBy))
      }

      result.push({ connection: conn, predefined: knownUser, isOnline: true })
    })

    // Add offline known users if shouldShowOfflineUsers is true
    if (shouldShowOfflineUsers) {
      allKnownUsers.forEach(knownUser => {
        const knownMatchValue = getMatchValue(knownUser, deduplicateBy)

        // Only add if not already connected
        if (!connectedUserIds.has(knownMatchValue)) {
          const isAlreadyInResult = result.some(item => {
            if (item.connection) {
              const connMatchValue = getMatchValue(item.connection.data, deduplicateBy)
              return connMatchValue === knownMatchValue
            }
            return false
          })

          if (!isAlreadyInResult) {
            result.push({ connection: null, predefined: knownUser, isOnline: false })
          }
        }
      })
    }

    return result
  }, [connected, predefinedUsers, deduplicateBy, shouldShowOfflineUsers])

  const usersToShow = enhancedUsers.slice(0, maxAvatars)
  const hiddenUsersCount = Math.max(0, enhancedUsers.length - maxAvatars)

  return (
    <div className='vaultrice-presence'>
      <div className='vaultrice-presence-pile'>
        {usersToShow.map((userInfo, index) => {
          const { connection, predefined, isOnline } = userInfo
          const isOwnConnection = (connection && connectionId === connection.connectionId) || undefined

          // Create a synthetic connection for offline users
          const displayConnection = connection || {
            connectionId: `offline-${predefined?.id || index}`,
            data: predefined
          } as JoinedConnection

          return (
            <div
              key={displayConnection.connectionId}
              className={`
                ${isOwnConnection ? 'vaultrice-presence-own' : ''}
                ${!isOnline ? 'vaultrice-presence-offline' : ''}
                ${predefined ? 'vaultrice-presence-predefined' : ''}
              `.trim()}
            >
              {renderAvatar(displayConnection, isOwnConnection, !!predefined)}
            </div>
          )
        })}
        {hiddenUsersCount > 0 && (
          <div className='vaultrice-presence-avatar vaultrice-presence-more'>
            +{hiddenUsersCount}
          </div>
        )}
      </div>
    </div>
  )
}
