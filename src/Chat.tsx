import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useMessaging, useNonLocalArray } from '@vaultrice/react'
import type { ChatProps, ChatMessage } from './types'
import { defaultRenderChatAvatar } from './shared/avatarUtils'
import './shared/theme.css'
import './Chat.css'
import uuid from './uuidv4'

// Helper function to format timestamp
const formatTimestamp = (timestamp: number, showTime = true): string => {
  const date = new Date(timestamp)
  const now = new Date()
  const isToday = date.toDateString() === now.toDateString()

  if (isToday && showTime) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  } else if (isToday) {
    return 'Today'
  } else {
    return date.toLocaleDateString()
  }
}

// Add this helper function
const shouldGroupMessage = (currentMessage: ChatMessage, previousMessage: ChatMessage | null): boolean => {
  if (!previousMessage) return false

  // Group if same user and within 5 minutes
  const timeDiff = currentMessage.timestamp - previousMessage.timestamp
  const fiveMinutes = 5 * 60 * 1000

  return currentMessage.user === previousMessage.user && timeDiff < fiveMinutes
}

// Default message renderer
const defaultRenderMessage = (
  message: ChatMessage,
  isOwnMessage: boolean,
  showUserAvatars: boolean,
  showTimestamps: boolean,
  currentUser?: any,
  isGrouped = false,
  // eslint-disable-next-line no-unused-vars
  renderAvatar?: (user: any, isOwnConnection?: boolean) => React.ReactNode
) => {
  const displayAvatarData = isOwnMessage && currentUser
    ? currentUser
    : { name: message.user, avatarUrl: message.avatarUrl }

  // Show "(You)" for own messages instead of the user's name
  const displayUserName = isOwnMessage
    ? '(You)'
    : message.user

  const avatarRenderer = renderAvatar || defaultRenderChatAvatar

  return (
    <div className={`vaultrice-chat-message ${isOwnMessage ? 'vaultrice-chat-message-own' : ''} ${isGrouped ? 'vaultrice-chat-message-grouped' : ''}`}>
      {showUserAvatars && !isGrouped && (
        <div className='vaultrice-chat-avatar'>
          {avatarRenderer(displayAvatarData, isOwnMessage)}
        </div>
      )}
      {showUserAvatars && isGrouped && (
        <div className='vaultrice-chat-avatar vaultrice-chat-avatar-spacer' />
      )}
      <div className='vaultrice-chat-message-content'>
        {!isGrouped && (
          <div className='vaultrice-chat-message-user'>{displayUserName}</div>
        )}
        <div className='vaultrice-chat-message-text'>{message.message}</div>
        {showTimestamps && (
          <div className='vaultrice-chat-message-timestamp'>
            {formatTimestamp(message.timestamp)}
          </div>
        )}
      </div>
    </div>
  )
}

// Add this component before the main Chat component
const TypingIndicator: React.FC<{ users: string[] }> = ({ users }) => {
  if (users.length === 0) return null

  const displayText = users.length === 1
    ? `${users[0]} is typing...`
    : users.length === 2
      ? `${users[0]} and ${users[1]} are typing...`
      : `${users.slice(0, -1).join(', ')} and ${users[users.length - 1]} are typing...`

  return (
    <div className='vaultrice-chat-typing'>
      <div className='vaultrice-chat-typing-dots'>
        <span />
        <span />
        <span />
      </div>
      <span className='vaultrice-chat-typing-text'>{displayText}</span>
    </div>
  )
}

export const Chat: React.FC<ChatProps> = ({
  id,
  user,
  onMessage,
  onSendReady,
  placeholder = 'Type a message...',
  showTimestamps = true,
  showUserAvatars = true,
  autoScroll = true,
  credentials,
  instanceOptions,
  messageFilter,
  renderMessage,
  renderAvatar,
  disabled = false,
  persistMessages = false,
  messageHistoryLimit = 100
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [typingUsers, setTypingUsers] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const onSendReadyRef = useRef(onSendReady)
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // eslint-disable-next-line no-unused-vars
  const sendRef = useRef<((msg: any) => void) | null>(null)

  // Hook for message persistence - Only use when needed
  const [persistedMessages, { push: pushMessage, splice: spliceMessages },, isLoading] = persistMessages
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ? useNonLocalArray<ChatMessage>(id, 'chat-history', {
      credentials,
      instanceOptions,
      bind: false
    })
    : [[], { push: async () => {}, splice: async () => {} }, null, false]

  // Load persisted message history only once
  useEffect(() => {
    // Only run if persistence is enabled, not loading, and haven't loaded history yet
    if (!persistMessages || isLoading || !persistedMessages || persistedMessages.length === 0) {
      return
    }

    // If we have persisted messages, load them
    if (persistedMessages && Array.isArray(persistedMessages)) {
      const validMessages = persistedMessages
        .filter((msg: any): msg is ChatMessage =>
          msg &&
          typeof msg === 'object' &&
          'id' in msg &&
          'user' in msg &&
          'message' in msg &&
          'timestamp' in msg
        )
        .sort((a, b) => a.timestamp - b.timestamp)

      setMessages(validMessages)
    }
  }, [persistMessages, persistedMessages, isLoading])

  // Handle incoming live messages
  const handleMessage = useCallback((msg: any) => {
    // Handle typing indicators
    if (msg.type === 'typing' && msg.user !== user.name) {
      setTypingUsers(prev => {
        const filtered = prev.filter(u => u !== msg.user)
        return [...filtered, msg.user]
      })

      // Clear typing indicator after 3 seconds
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
      typingTimeoutRef.current = setTimeout(() => {
        setTypingUsers(prev => prev.filter(u => u !== msg.user))
      }, 3000)

      return
    }

    // Apply message filter if provided
    if (messageFilter && !messageFilter(msg)) {
      return
    }

    if (msg.type === 'chat' && msg.user && msg.message) {
      // Clear typing indicator for this user when they send a message
      setTypingUsers(prev => prev.filter(u => u !== msg.user))

      const chatMessage = {
        id: uuid(),
        user: msg.user,
        message: msg.message,
        timestamp: msg.timestamp || Date.now(),
        userId: msg.userId,
        avatarUrl: msg.avatarUrl,
        type: msg.messageType || 'message'
      }

      // Add to local state for real-time display
      setMessages(prev => [...prev, chatMessage])
    }

    // Call parent onMessage if provided
    if (onMessage) {
      onMessage(msg)
    }
  }, [messageFilter, onMessage, user.name])

  const [, send] = useMessaging(id, handleMessage, {
    credentials,
    instanceOptions
  })

  // Store send function in ref for use in other functions
  useEffect(() => {
    sendRef.current = send
  }, [send])

  // Keep the latest onSendReady callback in a ref
  useEffect(() => {
    onSendReadyRef.current = onSendReady
  }, [onSendReady])

  // Expose send function to parent
  useEffect(() => {
    if (send && onSendReadyRef.current) {
      onSendReadyRef.current(send)
    }
  }, [send])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, autoScroll])

  const sendMessage = useCallback(async () => {
    if (inputMessage.trim() && send && !disabled) {
      const message = {
        type: 'chat',
        user: user.name,
        message: inputMessage.trim(),
        timestamp: Date.now(),
        userId: user.id,
        avatarUrl: user.avatarUrl || undefined
      }

      const chatMessage: ChatMessage = {
        id: uuid(),
        user: message.user,
        message: message.message,
        timestamp: message.timestamp,
        userId: message.userId,
        avatarUrl: message.avatarUrl,
        type: 'message'
      }

      try {
        // 1. Broadcast to live users immediately
        send(message)

        // 2. Persist the message if enabled
        if (persistMessages && pushMessage) {
          await pushMessage(chatMessage)

          // 3. Maintain message history limit using atomic splice
          if (messages.length >= messageHistoryLimit && spliceMessages) {
            // Calculate how many messages to remove
            const excessCount = (messages.length + 1) - messageHistoryLimit
            if (excessCount > 0) {
              await spliceMessages(0, excessCount)
            }
          }
        }

        setInputMessage('')
      } catch (error) {
        console.error('Failed to send message:', error)
        // Could add error state/toast here
      }
    }
  }, [inputMessage, send, disabled, user, persistMessages, pushMessage, spliceMessages, messageHistoryLimit, messages.length])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value)

    // Send typing indicator using the ref
    if (sendRef.current) {
      sendRef.current({
        type: 'typing',
        user: user.name,
        userId: user.id,
        timestamp: Date.now()
      })
    }
  }

  const messageRenderer = renderMessage || ((msg: ChatMessage, isOwn: boolean, isGrouped: boolean) =>
    defaultRenderMessage(msg, isOwn, showUserAvatars, showTimestamps, user, isGrouped, renderAvatar)
  )

  return (
    <div className='vaultrice-chat'>
      <div
        className='vaultrice-chat-messages'
        ref={messagesContainerRef}
      >
        {isLoading
          ? (
            <div className='vaultrice-chat-loading'>
              <div className='vaultrice-chat-loading-text'>Loading chat history...</div>
            </div>
            )
          : messages.length === 0
            ? (
              <div className='vaultrice-chat-empty'>
                <div className='vaultrice-chat-empty-text'>No messages yet</div>
                <div className='vaultrice-chat-empty-subtext'>Start the conversation!</div>
              </div>
              )
            : (
                messages.map((message, index) => {
                  const isOwnMessage = message.user === user.name || message.userId === user.id
                  const previousMessage = index > 0 ? messages[index - 1] : null
                  const isGrouped = shouldGroupMessage(message, previousMessage)

                  return (
                    <div key={message.id}>
                      {messageRenderer(message, isOwnMessage, isGrouped)}
                    </div>
                  )
                })
              )}

        {/* Add typing indicator */}
        {typingUsers.length > 0 && <TypingIndicator users={typingUsers} />}

        <div ref={messagesEndRef} />
      </div>

      <div className='vaultrice-chat-input-container'>
        <input
          type='text'
          className='vaultrice-chat-input'
          value={inputMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || !send || isLoading}
        />
        <button
          className='vaultrice-chat-send-button'
          onClick={sendMessage}
          disabled={disabled || !inputMessage.trim() || !send || isLoading}
        >
          Send
        </button>
      </div>
    </div>
  )
}
