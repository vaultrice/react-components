import type { Meta, StoryObj } from '@storybook/react-vite'
import React, { useState, useCallback } from 'react'
import { Presence } from '../Presence'

const meta = {
  title: 'Vaultrice/Presence',
  component: Presence,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    credentials: {
      control: false,
    },
    onMessage: {
      control: false,
    },
    onSendReady: {
      control: false,
    },
    renderAvatar: {
      control: false,
    },
  },
} satisfies Meta<typeof Presence>

export default meta
type Story = StoryObj<typeof meta>

const defaultCredentials = {
  projectId: import.meta.env.VITE_VAULTRICE_PROJECTID,
  apiKey: import.meta.env.VITE_VAULTRICE_APIKEY,
  apiSecret: import.meta.env.VITE_VAULTRICE_APISECRET
}

export const Default: Story = {
  args: {
    id: 'presence-default',
    user: {
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=John-Doe',
    },
    maxAvatars: 5,
    credentials: defaultCredentials
  }
}

export const WithoutAvatar: Story = {
  args: {
    id: 'presence-no-avatar',
    user: {
      name: 'Jane Smith',
    },
    maxAvatars: 5,
    credentials: defaultCredentials
  }
}

export const LongName: Story = {
  args: {
    id: 'presence-long-name',
    user: {
      name: 'Alexander Christopher Montgomery',
    },
    maxAvatars: 5,
    credentials: defaultCredentials
  }
}

export const SingleLetter: Story = {
  args: {
    id: 'presence-single-letter',
    user: {
      name: 'X',
    },
    maxAvatars: 5,
    credentials: defaultCredentials
  }
}

export const MaxAvatarsLimit: Story = {
  args: {
    id: 'presence-max-avatars',
    user: {
      name: 'User One',
      avatarUrl: 'https://i.pravatar.cc/150?u=User-One',
    },
    maxAvatars: 3,
    credentials: defaultCredentials
  }
}

export const CustomAvatar: Story = {
  args: {
    id: 'presence-custom-avatar',
    user: {
      name: 'Custom User',
      avatarUrl: 'https://i.pravatar.cc/150?u=Custom-User',
    },
    maxAvatars: 5,
    credentials: defaultCredentials,
    renderAvatar: (connection) => (
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        background: connection.data?.avatarUrl ? `url(${connection.data?.avatarUrl})` : 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px',
        border: '3px solid #fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        marginLeft: '-10px',
      }}
      >
        {!connection.data?.avatarUrl && ((connection.data?.name as string) || '').charAt(0).toUpperCase()}
      </div>
    )
  }
}

// Chat functionality story with runtime user configuration
const ChatWithPresence = () => {
  const [messages, setMessages] = useState<Array<{ user: string; message: string; timestamp: number }>>([])
  const [inputMessage, setInputMessage] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [sendFunction, setSendFunction] = useState<((msg: any) => void) | null>(null)

  // Runtime user configuration
  const randomId = Math.random().toString(36).substring(2, 15)
  const [userName, setUserName] = useState('Demo User ' + randomId)
  const [avatarUrl, setAvatarUrl] = useState('https://i.pravatar.cc/150?u=' + userName)
  const [isConfiguring, setIsConfiguring] = useState(false)

  const handleMessage = useCallback((msg: any) => {
    if (msg.type === 'chat') {
      setMessages(prev => [...prev, {
        user: msg.user,
        message: msg.message,
        timestamp: Date.now()
      }])
    }
  }, [])

  // eslint-disable-next-line no-unused-vars
  const handleSendReady = useCallback((send: (msg: any) => void) => {
    setSendFunction(() => send)
  }, [])

  const sendMessage = () => {
    if (inputMessage.trim() && sendFunction) {
      sendFunction({
        type: 'chat',
        user: userName,
        message: inputMessage.trim()
      })
      setInputMessage('')
    }
  }

  const generateRandomAvatar = () => {
    const randomId = Math.random().toString(36).substring(2, 15)
    setAvatarUrl(`https://i.pravatar.cc/150?u=${randomId}`)
  }

  const clearAvatar = () => {
    setAvatarUrl('')
  }

  return (
    <div style={{ width: '500px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      {/* User Configuration Section */}
      <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <h4 style={{ margin: 0 }}>User Configuration</h4>
          <button
            onClick={() => setIsConfiguring(!isConfiguring)}
            style={{
              padding: '4px 8px',
              fontSize: '12px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {isConfiguring ? 'Hide' : 'Edit'}
          </button>
        </div>

        {isConfiguring && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <label style={{ fontSize: '12px', color: '#666', display: 'block', marginBottom: '4px' }}>
                Display Name:
              </label>
              <input
                type='text'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '6px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
                placeholder='Enter your name'
              />
            </div>

            <div>
              <label style={{ fontSize: '12px', color: '#666', display: 'block', marginBottom: '4px' }}>
                Avatar URL:
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type='text'
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '6px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '14px'
                  }}
                  placeholder='Enter avatar URL or leave empty'
                />
                <button
                  onClick={generateRandomAvatar}
                  style={{
                    padding: '6px 12px',
                    fontSize: '12px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Random
                </button>
                <button
                  onClick={clearAvatar}
                  style={{
                    padding: '6px 12px',
                    fontSize: '12px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Current User Preview */}
        <div style={{ marginTop: '8px', padding: '8px', backgroundColor: 'white', borderRadius: '4px', border: '1px solid #e9ecef' }}>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Current User:</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {avatarUrl
              ? (
                <img
                  src={avatarUrl}
                  alt={userName}
                  style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
                />
                )
              : (
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: 'bold'
                }}
                >
                  {userName.charAt(0).toUpperCase()}
                </div>
                )}
            <span style={{ fontSize: '14px', fontWeight: '500' }}>{userName}</span>
          </div>
        </div>
      </div>

      {/* Presence Component */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Chat with Presence</h3>
        <Presence
          id='presence-chat-demo'
          user={{
            name: userName,
            avatarUrl: avatarUrl || undefined,
          }}
          onMessage={handleMessage}
          onSendReady={handleSendReady}
          credentials={defaultCredentials}
        />
      </div>

      {/* Chat Messages */}
      <div style={{
        height: '200px',
        border: '1px solid #eee',
        borderRadius: '4px',
        padding: '8px',
        overflowY: 'auto',
        marginBottom: '12px',
        backgroundColor: '#f9f9f9'
      }}
      >
        {messages.length === 0
          ? (
            <p style={{ color: '#666', fontStyle: 'italic' }}>No messages yet. Send one below!</p>
            )
          : (
              messages.map((msg, index) => (
                <div key={index} style={{ marginBottom: '8px', fontSize: '14px' }}>
                  <strong style={{ color: '#333' }}>{msg.user}:</strong>{' '}
                  <span style={{ color: '#666' }}>{msg.message}</span>
                </div>
              ))
            )}
      </div>

      {/* Message Input */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type='text'
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder='Type a message...'
          style={{
            flex: 1,
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
        <button
          onClick={sendMessage}
          disabled={!inputMessage.trim() || !sendFunction}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: sendFunction ? 'pointer' : 'not-allowed',
            opacity: sendFunction ? 1 : 0.6
          }}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export const WithChatFunctionality: Story = {
  args: {
    id: 'presence-chat-demo',
    user: {
      name: 'Demo User',
      avatarUrl: 'https://i.pravatar.cc/150?u=Demo-User',
    },
    maxAvatars: 5,
    credentials: defaultCredentials,
  },
  render: () => <ChatWithPresence />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive chat example with runtime user configuration. You can change your display name and avatar URL to test different scenarios. The presence component updates in real-time to reflect your changes.',
      },
    },
  },
}

// Different room example
export const DifferentRoom: Story = {
  args: {
    id: 'presence-room-2',
    user: {
      name: 'Room 2 User',
      avatarUrl: 'https://i.pravatar.cc/150?u=Room-2-User',
    },
    maxAvatars: 5,
    credentials: defaultCredentials,
  },
  parameters: {
    docs: {
      description: {
        story: 'Users in different rooms (different IDs) won\'t see each other. This is room 2.',
      }
    }
  }
}

// Batch avatar generator story
const BatchAvatarsDemo = () => {
  const users = [
    'Alice Johnson',
    'Bob Wilson',
    'Carol Davis',
    'David Brown',
    'Eve Miller',
    'Frank Garcia',
    'Grace Lee'
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <h3>Different Users (Fallback Avatars)</h3>
      {users.map((name, index) => (
        <Presence
          key={index}
          id={`presence-batch-${index}`}
          user={{ name }}
          maxAvatars={1}
          credentials={defaultCredentials}
        />
      ))}
    </div>
  )
}

export const BatchAvatars: Story = {
  args: {
    id: 'presence-batch-0',
    user: { name: 'Alice Johnson' },
    maxAvatars: 1,
    credentials: defaultCredentials,
  },
  render: () => <BatchAvatarsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Shows how different names generate different colored fallback avatars with consistent colors.',
      }
    }
  }
}

// Add this story after the existing ones

// Predefined users example
const predefinedTeamMembers = [
  {
    id: 'john-123',
    name: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?u=john-doe',
    role: 'Team Lead',
    department: 'Engineering'
  },
  {
    id: 'jane-456',
    name: 'Jane Smith',
    avatarUrl: 'https://i.pravatar.cc/150?u=jane-smith',
    role: 'Developer',
    department: 'Engineering'
  },
  {
    id: 'bob-789',
    name: 'Bob Wilson',
    role: 'Designer', // No avatar URL - will show fallback
    department: 'Design'
  },
  {
    id: 'alice-101',
    name: 'Alice Johnson',
    avatarUrl: 'https://i.pravatar.cc/150?u=alice-johnson',
    role: 'Product Manager',
    department: 'Product'
  },
  {
    id: 'charlie-202',
    name: 'Charlie Brown',
    avatarUrl: 'https://i.pravatar.cc/150?u=charlie-brown',
    role: 'QA Engineer',
    department: 'Engineering'
  }
]

export const WithPredefinedUsers: Story = {
  args: {
    id: 'presence-predefined',
    user: {
      id: 'john-123',
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=john-doe',
    },
    predefinedUsers: predefinedTeamMembers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    maxAvatars: 6,
    credentials: defaultCredentials,
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how predefined users work. Online users get matched with predefined data, and offline predefined users are shown with reduced opacity. Predefined users have a gold star badge.',
      },
    },
  },
}

// Interactive predefined users demo
const PredefinedUsersDemo = () => {
  const [currentUserId, setCurrentUserId] = useState('john-123')
  const [showOffline, setShowOffline] = useState(true)
  const [maxAvatars, setMaxAvatars] = useState(6)

  const currentUser = predefinedTeamMembers.find(user => user.id === currentUserId) || predefinedTeamMembers[0]

  return (
    <div style={{ width: '600px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>Team Presence with Predefined Users</h3>

      {/* Controls */}
      <div style={{
        marginBottom: '20px',
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
      >
        <div>
          <label style={{ fontSize: '14px', fontWeight: '500', display: 'block', marginBottom: '4px' }}>
            Join as:
          </label>
          <select
            value={currentUserId}
            onChange={(e) => setCurrentUserId(e.target.value)}
            style={{
              padding: '6px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '14px',
              minWidth: '200px'
            }}
          >
            {predefinedTeamMembers.map(user => (
              <option key={user.id} value={user.id}>
                {user.name} - {user.role}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
            <input
              type='checkbox'
              checked={showOffline}
              onChange={(e) => setShowOffline(e.target.checked)}
            />
            Show offline team members
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
            Max avatars:
            <input
              type='number'
              value={maxAvatars}
              onChange={(e) => setMaxAvatars(parseInt(e.target.value) || 6)}
              min='1'
              max='10'
              style={{
                width: '60px',
                padding: '4px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </label>
        </div>
      </div>

      {/* Presence Component */}
      <div style={{ marginBottom: '20px' }}>
        <Presence
          key={`${currentUserId}-${showOffline}-${maxAvatars}`} // Force re-render on changes
          id='presence-predefined-demo'
          user={{
            id: currentUser.id,
            name: currentUser.name,
            avatarUrl: currentUser.avatarUrl,
          }}
          predefinedUsers={predefinedTeamMembers}
          showOfflineUsers={showOffline}
          deduplicateBy='id'
          maxAvatars={maxAvatars}
          credentials={defaultCredentials}
        />
      </div>

      {/* Team Members List */}
      <div style={{
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '6px'
      }}
      >
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>Team Members</h4>
        <div style={{ display: 'grid', gap: '8px' }}>
          {predefinedTeamMembers.map(user => (
            <div
              key={user.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px',
                backgroundColor: user.id === currentUserId ? '#e3f2fd' : 'white',
                borderRadius: '4px',
                border: '1px solid #e9ecef'
              }}
            >
              {user.avatarUrl
                ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  )
                : (
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                  >
                    {user.name.split(' ').map(n => n.charAt(0)).join('').substring(0, 2)}
                  </div>
                  )}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '500', fontSize: '14px' }}>
                  {user.name}
                  {user.id === currentUserId && (
                    <span style={{
                      marginLeft: '8px',
                      fontSize: '12px',
                      color: '#007bff',
                      fontWeight: 'normal'
                    }}
                    >
                      (You)
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {user.role} • {user.department}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div style={{
        marginTop: '16px',
        fontSize: '12px',
        color: '#666',
        padding: '12px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }}
      >
        <div style={{ fontWeight: '500', marginBottom: '4px' }}>Legend:</div>
        <div>🟢 Online (full opacity) • 🔘 Offline (reduced opacity) • ⭐ Predefined team member • 🔵 Your avatar</div>
      </div>
    </div>
  )
}

export const InteractivePredefinedUsers: Story = {
  args: {
    id: 'presence-predefined-demo',
    user: {
      id: 'john-123',
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=john-doe',
    },
    predefinedUsers: predefinedTeamMembers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    maxAvatars: 6,
    credentials: defaultCredentials,
  },
  render: () => <PredefinedUsersDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing predefined users functionality. You can switch between different team members, toggle offline user visibility, and adjust the maximum number of avatars shown. This demonstrates how predefined users provide consistent avatars and allow showing team members even when they\'re offline.',
      }
    }
  }
}

// Custom avatar with predefined users
export const CustomAvatarWithPredefined: Story = {
  args: {
    id: 'presence-custom-predefined',
    user: {
      id: 'jane-456',
      name: 'Jane Smith',
      avatarUrl: 'https://i.pravatar.cc/150?u=jane-smith',
    },
    predefinedUsers: predefinedTeamMembers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    maxAvatars: 5,
    credentials: defaultCredentials,
    renderAvatar: (connection, isOwnConnection, isPredefined) => {
      const userData = connection.data
      const userName = userData?.name as string || 'Anonymous'
      const avatarUrl = userData?.avatarUrl as string | undefined

      return (
        <div style={{ position: 'relative', marginLeft: '-8px' }}>
          {avatarUrl
            ? (
              <img
                src={avatarUrl}
                alt={userName}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: isOwnConnection ? '3px solid #007bff' : '2px solid white',
                  objectFit: 'cover',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  opacity: connection.connectionId?.startsWith('offline-') ? 0.6 : 1
                }}
                title={`${userName}${isOwnConnection ? ' (You)' : ''}${isPredefined ? ' (Team Member)' : ''}`}
              />
              )
            : (
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: isOwnConnection ? '3px solid #007bff' : '2px solid white',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  opacity: connection.connectionId?.startsWith('offline-') ? 0.6 : 1
                }}
                title={`${userName}${isOwnConnection ? ' (You)' : ''}${isPredefined ? ' (Team Member)' : ''}`}
              >
                {userName.split(' ').map(n => n.charAt(0)).join('').substring(0, 2)}
              </div>
              )}
          {isPredefined && (
            <div style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '16px',
              height: '16px',
              background: '#ffd700',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              border: '1px solid white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}
            >
              ⭐
            </div>
          )}
          {isOwnConnection && (
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              right: '-2px',
              width: '12px',
              height: '12px',
              background: '#28a745',
              borderRadius: '50%',
              border: '2px solid white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}
            />
          )}
        </div>
      )
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how to create custom avatar rendering with predefined users. This example uses square avatars with custom badges for predefined users (gold star) and online status (green dot).',
      }
    }
  }
}
