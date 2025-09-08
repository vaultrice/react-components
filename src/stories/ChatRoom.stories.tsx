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
    messageFilter: { control: false }
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

export const Minimal: Story = {
  args: {
    id: 'chatroom-minimal',
    user: {
      name: 'User',
      id: 'user-123',
    },
    showHeader: false,
    showPresence: false,
    maxHeight: '300px',
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
    maxHeight: '250px',
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
        key={`${currentUser.id}-${showPresence}-${showOfflineUsers}`}
        id='chatroom-interactive'
        user={currentUser}
        title={roomTitle}
        subtitle={`Welcome to the ${roomTitle.toLowerCase()} discussion`}
        showPresence={showPresence}
        predefinedUsers={allUsers}
        showOfflineUsers={showOfflineUsers}
        deduplicateBy='id'
        maxHeight='350px'
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
    maxHeight: '350px',
    credentials: defaultCredentials
  },
  render: () => <InteractiveChatRoomDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Complete interactive chat room with configurable options. Combines Chat and Presence into a single, polished component perfect for team collaboration.',
      }
    }
  }
}
