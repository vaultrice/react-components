import React from 'react'
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
  showTimestamps = true,
  showUserAvatars = true,
  autoScroll = true,
  messageFilter,
  disabled = false,
  persistMessages = false,
  messageHistoryLimit = 100,
  onMessage,
  onSendReady
}) => {
  // Default title and subtitle
  const displayTitle = title || 'Team Chat'
  const displaySubtitle = subtitle || 'Join the conversation'

  return (
    <div className='vaultrice-chatroom'>
      {/* Header stays at top */}
      {showHeader && (title || subtitle || showPresence) && (
        <div className='vaultrice-chatroom-header'>
          <div className='vaultrice-chatroom-header-text'>
            {(title || showPresence) && (
              <h3 className='vaultrice-chatroom-title'>{displayTitle}</h3>
            )}
            {(subtitle) && (
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
                showOfflineUsers={showOfflineUsers}
                maxAvatars={maxAvatars}
                renderAvatar={renderPresenceAvatar}
              />
            </div>
          )}
        </div>
      )}

      {/* Chat takes remaining space */}
      <div className='vaultrice-chatroom-chat'>
        <Chat
          id={id}
          user={user}
          credentials={credentials}
          instanceOptions={instanceOptions}
          placeholder={placeholder}
          showTimestamps={showTimestamps}
          showUserAvatars={showUserAvatars}
          autoScroll={autoScroll}
          messageFilter={messageFilter}
          renderMessage={renderMessage}
          renderAvatar={renderChatAvatar}
          disabled={disabled}
          persistMessages={persistMessages}
          messageHistoryLimit={messageHistoryLimit}
          onMessage={onMessage}
          onSendReady={onSendReady}
        />
      </div>
    </div>
  )
}
