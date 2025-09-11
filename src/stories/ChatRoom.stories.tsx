import type { Meta, StoryObj } from '@storybook/react-vite'
import React, { useState } from 'react'
import { ChatRoom } from '../ChatRoom'

const meta = {
  title: 'Vaultrice/ChatRoom',
  component: ChatRoom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    credentials: { control: false },
    onMessage: { control: false },
    onSendReady: { control: false },
    onPresenceMessage: { control: false },
    onPresenceSendReady: { control: false },
    renderMessage: { control: false },
    renderChatAvatar: { control: false },
    renderPresenceAvatar: { control: false },
    messageFilter: { control: false },
    persistMessages: {
      control: 'boolean',
      description: 'Enable persistent message history using Vaultrice storage'
    },
    messageHistoryLimit: {
      control: { type: 'number', min: 10, max: 1000, step: 10 },
      description: 'Maximum number of messages to keep in persistent history'
    }
  }
} satisfies Meta<typeof ChatRoom>

export default meta
type Story = StoryObj<typeof meta>

const defaultCredentials = {
  projectId: import.meta.env.VITE_VAULTRICE_PROJECTID,
  apiKey: import.meta.env.VITE_VAULTRICE_APIKEY,
  apiSecret: import.meta.env.VITE_VAULTRICE_APISECRET
}

// Predefined team members
const teamMembers = [
  {
    id: 'john-123',
    name: 'John Doe',
    avatarUrl: 'https://i.pravatar.cc/150?u=john-doe',
    role: 'Team Lead'
  },
  {
    id: 'jane-456',
    name: 'Jane Smith',
    avatarUrl: 'https://i.pravatar.cc/150?u=jane-smith',
    role: 'Developer'
  },
  {
    id: 'bob-789',
    name: 'Bob Wilson',
    role: 'Designer'
  }
]

export const Default: Story = {
  args: {
    id: 'chatroom-default',
    user: {
      name: 'Demo User',
      id: 'demo-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=Demo-User',
    },
    title: 'Team Discussion',
    subtitle: 'General chat for the team',
    credentials: defaultCredentials
  }
}

export const WithPredefinedUsers: Story = {
  args: {
    id: 'chatroom-team',
    user: {
      id: 'john-123',
      name: 'John Doe',
      avatarUrl: 'https://i.pravatar.cc/150?u=john-doe',
    },
    title: 'Engineering Team',
    subtitle: 'Daily standup and collaboration',
    predefinedUsers: teamMembers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    credentials: defaultCredentials
  }
}

export const WithPersistentMessages: Story = {
  args: {
    id: 'chatroom-persistent',
    user: {
      name: 'Persistent User',
      id: 'persistent-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=persistent',
    },
    title: 'Persistent Chat Room',
    subtitle: 'Messages are saved and restored on reload',
    persistMessages: true,
    messageHistoryLimit: 50,
    predefinedUsers: teamMembers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    credentials: defaultCredentials
  },
  parameters: {
    docs: {
      description: {
        story: 'This chat room demonstrates message persistence. Messages are automatically saved using Vaultrice and restored when you reload the page or return later. The message history is capped at 50 messages to demonstrate the rolling history feature.',
      }
    }
  }
}

export const PersistentWithCustomLimit: Story = {
  args: {
    id: 'chatroom-persistent-limited',
    user: {
      name: 'Limited User',
      id: 'limited-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=limited',
    },
    title: 'Chat with Limited History',
    subtitle: 'Only keeps last 20 messages',
    persistMessages: true,
    messageHistoryLimit: 20,
    credentials: defaultCredentials
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a chat room with a very limited message history (20 messages). When the limit is reached, older messages are automatically removed using atomic operations.',
      }
    }
  }
}

export const Minimal: Story = {
  args: {
    id: 'chatroom-minimal',
    user: {
      name: 'User',
      id: 'user-123',
    },
    showHeader: false,
    showPresence: false,
    credentials: defaultCredentials
  }
}

export const CompactWithPresence: Story = {
  args: {
    id: 'chatroom-compact',
    user: {
      name: 'Compact User',
      id: 'compact-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=compact',
    },
    title: 'Quick Chat',
    showTimestamps: false,
    maxAvatars: 3,
    credentials: defaultCredentials
  }
}

// Interactive demo
const allUsers = [
  { name: 'Alice Johnson', id: 'alice-1', avatarUrl: 'https://i.pravatar.cc/150?u=alice' },
  { name: 'Bob Smith', id: 'bob-2', avatarUrl: 'https://i.pravatar.cc/150?u=bob' },
  { name: 'Carol Davis', id: 'carol-3', avatarUrl: 'https://i.pravatar.cc/150?u=carol' },
  { name: 'Demo User', id: 'demo-123', avatarUrl: 'https://i.pravatar.cc/150?u=Demo-User' },
  { name: 'Eve Martinez', id: 'eve-4', avatarUrl: 'https://i.pravatar.cc/150?u=eve' },
  { name: 'Frank Lee', id: 'frank-5', avatarUrl: 'https://i.pravatar.cc/150?u=frank' },
  { name: 'Grace Kim', id: 'grace-6', avatarUrl: 'https://i.pravatar.cc/150?u=grace' },
  { name: 'Henry Zhao', id: 'henry-7', avatarUrl: 'https://i.pravatar.cc/150?u=henry' },
  { name: 'Ivy Chen', id: 'ivy-8', avatarUrl: 'https://i.pravatar.cc/150?u=ivy' },
  { name: 'Jack Miller', id: 'jack-9', avatarUrl: 'https://i.pravatar.cc/150?u=jack' }
]

const InteractiveChatRoomDemo = () => {
  const [currentUser, setCurrentUser] = useState(() => {
    const randomIndex = Math.floor(Math.random() * allUsers.length)
    return allUsers[randomIndex]
  })

  const [roomTitle, setRoomTitle] = useState('Product Team')
  const [showPresence, setShowPresence] = useState(true)
  const [showOfflineUsers, setShowOfflineUsers] = useState(true)
  const [persistMessages, setPersistMessages] = useState(false)
  const [messageHistoryLimit, setMessageHistoryLimit] = useState(100)

  const selectRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * allUsers.length)
    setCurrentUser(allUsers[randomIndex])
  }

  return (
    <div style={{ width: '600px', padding: '20px' }}>
      {/* Controls */}
      <div style={{
        marginBottom: '20px',
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
      >
        <div>
          <label style={{ fontSize: '14px', fontWeight: '500', display: 'block', marginBottom: '8px' }}>
            Room Configuration:
          </label>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              type='text'
              value={roomTitle}
              onChange={(e) => setRoomTitle(e.target.value)}
              placeholder='Room title'
              style={{
                padding: '6px 8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                minWidth: '150px'
              }}
            />
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
              <input
                type='checkbox'
                checked={showPresence}
                onChange={(e) => setShowPresence(e.target.checked)}
              />
              Show presence
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
              <input
                type='checkbox'
                checked={showOfflineUsers}
                onChange={(e) => setShowOfflineUsers(e.target.checked)}
              />
              Show offline users
            </label>
          </div>
        </div>

        {/* New persistence controls */}
        <div>
          <label style={{ fontSize: '14px', fontWeight: '500', display: 'block', marginBottom: '8px' }}>
            Message Persistence:
          </label>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
              <input
                type='checkbox'
                checked={persistMessages}
                onChange={(e) => setPersistMessages(e.target.checked)}
              />
              <span style={{ fontWeight: persistMessages ? '600' : 'normal' }}>
                Save message history
              </span>
            </label>
            {persistMessages && (
              <>
                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
                  History limit:
                  <input
                    type='number'
                    value={messageHistoryLimit}
                    onChange={(e) => setMessageHistoryLimit(parseInt(e.target.value) || 100)}
                    min='10'
                    max='1000'
                    step='10'
                    style={{
                      padding: '4px 6px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '14px',
                      width: '70px'
                    }}
                  />
                </label>
              </>
            )}
          </div>
          {persistMessages && (
            <div style={{
              fontSize: '12px',
              color: '#666',
              marginTop: '4px',
              padding: '8px',
              backgroundColor: '#e8f4f8',
              borderRadius: '4px',
              border: '1px solid #bee5eb'
            }}
            >
              💾 Messages will be automatically saved and restored on reload.
              Try refreshing the page after sending some messages!
            </div>
          )}
        </div>

        <div>
          <label style={{ fontSize: '14px', fontWeight: '500', display: 'block', marginBottom: '8px' }}>
            Join as:
          </label>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <select
              value={currentUser.id}
              onChange={(e) => {
                const user = allUsers.find(u => u.id === e.target.value)
                if (user) setCurrentUser(user)
              }}
              style={{
                padding: '6px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                minWidth: '200px'
              }}
            >
              {allUsers.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <button
              onClick={selectRandomUser}
              style={{
                padding: '6px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '12px',
                background: '#f8f9fa',
                cursor: 'pointer'
              }}
              title='Select random user'
            >
              🎲 Random
            </button>
          </div>
        </div>
      </div>

      {/* ChatRoom Component */}
      <ChatRoom
        key={`${currentUser.id}-${showPresence}-${showOfflineUsers}-${persistMessages}-${messageHistoryLimit}`}
        id='chatroom-interactive'
        user={currentUser}
        title={roomTitle}
        subtitle={`Welcome to the ${roomTitle.toLowerCase()} discussion`}
        showPresence={showPresence}
        predefinedUsers={allUsers}
        showOfflineUsers={showOfflineUsers}
        deduplicateBy='id'
        persistMessages={persistMessages}
        messageHistoryLimit={messageHistoryLimit}
        credentials={defaultCredentials}
      />
    </div>
  )
}

export const Interactive: Story = {
  args: {
    id: 'chatroom-interactive',
    user: {
      name: 'Demo User',
      id: 'demo-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=Demo-User',
    },
    title: 'Product Team',
    subtitle: 'Welcome to the product team discussion',
    showPresence: true,
    predefinedUsers: allUsers,
    showOfflineUsers: true,
    deduplicateBy: 'id',
    persistMessages: false,
    messageHistoryLimit: 100,
    credentials: defaultCredentials
  },
  render: () => <InteractiveChatRoomDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Complete interactive chat room with configurable options. Combines Chat and Presence into a single, polished component perfect for team collaboration. **Try enabling message persistence** to see how messages are automatically saved and restored!',
      }
    }
  }
}

// Demo specifically for showcasing persistence across multiple instances
const PersistenceDemo = () => {
  const [instanceCount, setInstanceCount] = useState(1)

  const addInstance = () => setInstanceCount(prev => Math.min(prev + 1, 3))
  const removeInstance = () => setInstanceCount(prev => Math.max(prev - 1, 1))

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        marginBottom: '20px',
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}
      >
        <h4 style={{ margin: '0 0 12px 0', fontSize: '16px' }}>
          Multi-Instance Persistence Demo
        </h4>
        <p style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>
          This demonstrates how message persistence works across multiple chat instances.
          Messages sent in any instance are immediately visible in all others.
        </p>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={removeInstance}
            disabled={instanceCount <= 1}
            style={{
              padding: '6px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px',
              background: instanceCount <= 1 ? '#f8f9fa' : '#fff',
              cursor: instanceCount <= 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Remove Instance
          </button>
          <span style={{ fontSize: '14px' }}>
            {instanceCount} instance{instanceCount !== 1 ? 's' : ''}
          </span>
          <button
            onClick={addInstance}
            disabled={instanceCount >= 3}
            style={{
              padding: '6px 12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '12px',
              background: instanceCount >= 3 ? '#f8f9fa' : '#fff',
              cursor: instanceCount >= 3 ? 'not-allowed' : 'pointer'
            }}
          >
            Add Instance
          </button>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: instanceCount === 1 ? '1fr' : instanceCount === 2 ? '1fr 1fr' : '1fr 1fr 1fr',
        gap: '16px',
        maxWidth: '1200px'
      }}
      >
        {Array.from({ length: instanceCount }, (_, i) => {
          const user = allUsers[i % allUsers.length]
          return (
            <div key={i} style={{ minWidth: '300px' }}>
              <div style={{
                marginBottom: '8px',
                padding: '8px',
                backgroundColor: '#e8f4f8',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '500',
                textAlign: 'center'
              }}
              >
                Instance {i + 1} - {user.name}
              </div>
              <ChatRoom
                key={`persistence-demo-${i}`}
                id='chatroom-persistence-demo'
                user={user}
                title={`Chat Instance ${i + 1}`}
                subtitle='Shared persistent history'
                persistMessages
                messageHistoryLimit={30}
                showPresence={false}
                showHeader
                credentials={defaultCredentials}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const PersistenceAcrossInstances: Story = {
  args: {
    id: 'chatroom-persistence-demo',
    user: {
      name: 'Alice Johnson',
      id: 'alice-1',
      avatarUrl: 'https://i.pravatar.cc/150?u=alice',
    },
    title: 'Chat Instance 1',
    subtitle: 'Shared persistent history',
    persistMessages: true,
    messageHistoryLimit: 30,
    showPresence: false,
    showHeader: true,
    credentials: defaultCredentials
  },
  render: () => <PersistenceDemo />,
  parameters: {
    docs: {
      description: {
        story: 'This demo shows how message persistence works across multiple chat instances sharing the same ID. Send a message in any instance and see it immediately appear in all others. The shared message history persists even when instances are added or removed.',
      }
    }
  }
}
