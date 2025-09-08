import type { Meta, StoryObj } from '@storybook/react-vite'
import React, { useState } from 'react'
import { Chat } from '../Chat'
import { Presence } from '../Presence'

const meta = {
  title: 'Vaultrice/Chat',
  component: Chat,
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
    renderMessage: {
      control: false,
    },
    messageFilter: {
      control: false,
    }
  }
} satisfies Meta<typeof Chat>

export default meta
type Story = StoryObj<typeof meta>

const defaultCredentials = {
  projectId: import.meta.env.VITE_VAULTRICE_PROJECTID,
  apiKey: import.meta.env.VITE_VAULTRICE_APIKEY,
  apiSecret: import.meta.env.VITE_VAULTRICE_APISECRET
}

export const Default: Story = {
  args: {
    id: 'chat-default',
    user: {
      name: 'John Doe',
      id: 'john-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=John-Doe',
    },
    placeholder: 'Type a message...',
    showTimestamps: true,
    showUserAvatars: true,
    maxHeight: '400px',
    credentials: defaultCredentials
  }
}

export const WithoutAvatars: Story = {
  args: {
    id: 'chat-no-avatars',
    user: {
      name: 'Jane Smith',
      id: 'jane-456',
    },
    showUserAvatars: false,
    showTimestamps: true,
    credentials: defaultCredentials
  }
}

export const CompactMode: Story = {
  args: {
    id: 'chat-compact',
    user: {
      name: 'Bob Wilson',
      id: 'bob-789',
    },
    showTimestamps: false,
    showUserAvatars: false,
    maxHeight: '250px',
    placeholder: 'Quick message...',
    credentials: defaultCredentials
  }
}

// Chat with Presence combo
const ChatWithPresenceDemo = () => {
  const users = [
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

  const [currentUser, setCurrentUser] = useState(() => {
    const randomIndex = Math.floor(Math.random() * users.length)
    return users[randomIndex]
  })

  return (
    <div style={{ width: '500px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontSize: '14px', fontWeight: '500', display: 'block', marginBottom: '8px' }}>
          Join as:
        </label>
        <select
          value={currentUser.id}
          onChange={(e) => {
            const user = users.find(u => u.id === e.target.value)
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
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Who's Online</h3>
        <Presence
          id='chat-presence-demo-1'
          user={currentUser}
          credentials={defaultCredentials}
          deduplicateBy='id'
        />
      </div>

      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Team Chat</h3>
        <Chat
          id='chat-presence-demo-1'
          user={currentUser}
          credentials={defaultCredentials}
          maxHeight='300px'
        />
      </div>
    </div>
  )
}

export const WithPresence: Story = {
  args: {
    id: 'chat-presence-demo',
    user: {
      name: 'Demo User',
      id: 'demo-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=Demo-User',
    },
    credentials: defaultCredentials,
  },
  render: () => <ChatWithPresenceDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Shows Chat and Presence components working together for complete real-time collaboration. Switch between users to see how the components sync.',
      }
    }
  }
}

// Custom message rendering
export const CustomMessages: Story = {
  args: {
    id: 'chat-custom',
    user: {
      name: 'Custom User',
      id: 'custom-123',
      avatarUrl: 'https://i.pravatar.cc/150?u=Custom-User',
    },
    credentials: defaultCredentials,
    renderMessage: (message, isOwnMessage) => (
      <div style={{
        display: 'flex',
        justifyContent: isOwnMessage ? 'flex-end' : 'flex-start',
        marginBottom: '12px'
      }}
      >
        <div style={{
          maxWidth: '70%',
          padding: '12px 16px',
          borderRadius: '18px',
          background: isOwnMessage
            ? 'linear-gradient(135deg, #007bff, #0056b3)'
            : 'linear-gradient(135deg, #6c757d, #495057)',
          color: 'white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
        >
          {!isOwnMessage && (
            <div style={{
              fontSize: '12px',
              opacity: 0.8,
              marginBottom: '4px',
              fontWeight: 'bold'
            }}
            >
              {message.user}
            </div>
          )}
          <div style={{ fontSize: '14px', lineHeight: '1.4' }}>
            {message.message}
          </div>
          <div style={{
            fontSize: '10px',
            opacity: 0.7,
            marginTop: '4px',
            textAlign: isOwnMessage ? 'right' : 'left'
          }}
          >
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates custom message rendering with a more modern chat bubble design.',
      }
    }
  }
}
