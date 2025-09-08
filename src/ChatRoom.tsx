import React, { useState, useCallback, useEffect } from 'react'
import { Chat } from './Chat'
import { Presence } from './Presence'
import type { ChatRoomProps } from './types'
import './shared/theme.css'
import './ChatRoom.css'

export const ChatRoom: React.FC<ChatRoomProps> = ({
  id,
  user,
  title,
  subtitle,
  showPresence = true,
  showHeader = true,
  credentials,
  instanceOptions,
  deduplicateBy,
  predefinedUsers,
  showOfflineUsers,
  maxAvatars,
  renderPresenceAvatar,
  renderChatAvatar,
  renderMessage,
  placeholder,
  maxHeight = '400px',
  showTimestamps = true,
  showUserAvatars = true,
  autoScroll = true,
  messageFilter,
  disabled = false,
  onMessage,
  onSendReady,
  onPresenceMessage,
  onPresenceSendReady
}) => {
  const [onlineCount, setOnlineCount] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [presenceSend, setPresenceSend] = useState<((msg: any) => void) | null>(null)

  // Handle presence send function being ready
  // eslint-disable-next-line no-unused-vars
  const handlePresenceSendReady = useCallback((send: (msg: any) => void) => {
    setPresenceSend(send)
    if (onPresenceSendReady) {
      onPresenceSendReady(send)
    }
  }, [onPresenceSendReady])

  // Handle presence updates to track online count
  const handlePresenceMessage = useCallback((msg: any) => {
    // Track presence changes to update online count
    if (msg.type === 'presence') {
      if (msg.action === 'join' || msg.action === 'update') {
        // Request current presence state to get accurate count
        if (presenceSend) {
          presenceSend({ type: 'get-presence' })
        }
      }
    } else if (msg.type === 'presence-state' && Array.isArray(msg.connections)) {
      // Update online count from presence state
      setOnlineCount(msg.connections.length)
    }

    if (onPresenceMessage) {
      onPresenceMessage(msg)
    }
  }, [onPresenceMessage, presenceSend])

  // Request initial presence state when presence send becomes available
  useEffect(() => {
    if (presenceSend) {
      presenceSend({ type: 'get-presence' })
    }
  }, [presenceSend])

  // Default title and subtitle
  const displayTitle = title || 'Team Chat'
  const displaySubtitle = subtitle || (onlineCount > 0 ? `${onlineCount} online` : 'Join the conversation')

  return (
    <div className='vaultrice-chatroom'>
      {showHeader && (title || subtitle || showPresence) && (
        <div className='vaultrice-chatroom-header'>
          <div className='vaultrice-chatroom-header-text'>
            {(title || showPresence) && (
              <h3 className='vaultrice-chatroom-title'>{displayTitle}</h3>
            )}
            {(subtitle || (!title && onlineCount >= 0)) && (
              <p className='vaultrice-chatroom-subtitle'>{displaySubtitle}</p>
            )}
          </div>
          {showPresence && (
            <div className='vaultrice-chatroom-presence'>
              <Presence
                id={id}
                user={user}
                credentials={credentials}
                instanceOptions={instanceOptions}
                deduplicateBy={deduplicateBy}
                predefinedUsers={predefinedUsers}
                showOfflineUsers={showOfflineUsers} // Pass through, Presence will handle predefined users automatically
                maxAvatars={maxAvatars}
                renderAvatar={renderPresenceAvatar}
                onMessage={handlePresenceMessage}
                onSendReady={handlePresenceSendReady}
              />
            </div>
          )}
        </div>
      )}

      <div className='vaultrice-chatroom-chat'>
        <Chat
          id={id}
          user={user}
          credentials={credentials}
          instanceOptions={instanceOptions}
          placeholder={placeholder}
          maxHeight={maxHeight}
          showTimestamps={showTimestamps}
          showUserAvatars={showUserAvatars}
          autoScroll={autoScroll}
          messageFilter={messageFilter}
          renderMessage={renderMessage}
          renderAvatar={renderChatAvatar}
          disabled={disabled}
          onMessage={onMessage}
          onSendReady={onSendReady}
        />
      </div>
    </div>
  )
}
