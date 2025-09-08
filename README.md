# Vaultrice React Components

<!-- [![Tests](https://github.com/vaultrice/react-components/workflows/node/badge.svg)](https://github.com/vaultrice/react-components/actions?query=workflow%3Anode) -->
[![npm version](https://img.shields.io/npm/v/@vaultrice/react-components.svg?style=flat-square)](https://www.npmjs.com/package/@vaultrice/react-components)

Vaultrice React Components is a comprehensive set of UI components for building real-time, collaborative experiences in React, powered by [Vaultrice](https://www.vaultrice.com).

Built on [`@vaultrice/react`](https://github.com/vaultrice/react) and [`@vaultrice/sdk`](https://github.com/vaultrice/sdk).

## Features

- **🗳️ Voting UI**: Interactive voting forms with real-time results
- **👥 Presence Indicators**: Show who's online with customizable avatars  
- **💬 Real-time Chat**: Full-featured chat with typing indicators and message history
- **🏠 Complete Chat Rooms**: Combined chat + presence for team collaboration
- **🔄 Real-time Updates**: All components sync instantly across clients
- **🔒 Encrypted Storage**: Powered by Vaultrice's secure infrastructure
- **🎨 Fully Customizable**: Style and extend all components to match your design
- **📱 Responsive Design**: Works beautifully on desktop and mobile
- **🌙 Dark Mode Support**: Built-in dark theme compatibility
- **🔧 No Backend Required**: Zero server setup needed
- **📝 TypeScript Support**: Fully typed APIs with excellent IntelliSense

## Installation

```bash
npm install @vaultrice/react-components
```

## Quick Start

### Basic Voting

```tsx
import { Voting } from '@vaultrice/react-components'

const choices = [
  { id: 'a', label: 'Option A' },
  { id: 'b', label: 'Option B' }
]

export default function App() {
  return (
    <Voting
      id="poll-123"
      title="What's your favorite option?"
      description="Choose one and see live results!"
      choices={choices}
      credentials={{
        projectId: "your-project-id",
        apiKey: "your-api-key", 
        apiSecret: "your-api-secret"
      }}
    />
  )
}
```

### Real-time Chat Room

```tsx
import { ChatRoom } from '@vaultrice/react-components'

export default function TeamChat() {
  const currentUser = {
    id: "user-123",
    name: "John Doe",
    avatarUrl: "https://example.com/avatar.jpg"
  }

  const teamMembers = [
    { id: "user-123", name: "John Doe", role: "Developer" },
    { id: "user-456", name: "Jane Smith", role: "Designer" }
  ]

  return (
    <ChatRoom
      id="team-chat"
      user={currentUser}
      title="Engineering Team"
      subtitle="Daily standup and collaboration"
      predefinedUsers={teamMembers}
      deduplicateBy="id"
      credentials={{
        projectId: "your-project-id",
        apiKey: "your-api-key",
        apiSecret: "your-api-secret"
      }}
    />
  )
}
```

## Components

### `<Voting />`

A complete voting widget with selectable choices, vote button, and live results.

**Props:**
- `id` (string): Unique identifier for the voting instance
- `title` (string, optional): Headline for the voting
- `description` (string, optional): Description text
- `choices` (array): List of `{ id, label }` options
- `voteLabel` (string, optional): Button label (default: 'vote')
- `userId` (string, optional): If provided, voting status is stored in Vaultrice; otherwise, localStorage is used
- `credentials` (object, optional): Vaultrice SDK credentials
- `showPercentage` (boolean): Show percentages instead of vote counts
- `showTotalVotes` (boolean): Display total vote count

### `<Presence />`

Display real-time user presence with customizable avatars.

**Props:**
- `id` (string): Unique identifier for the presence instance
- `user` (object): Current user information with `name`, `avatarUrl`, etc.
- `maxAvatars` (number): Maximum avatars to show before "+N more" (default: 5)
- `predefinedUsers` (array): Team members to show even when offline
- `showOfflineUsers` (boolean): Whether to show offline predefined users
- `deduplicateBy` (string|array): Property name(s) to deduplicate users
- `renderAvatar` (function): Custom avatar renderer
- `credentials` (object): Vaultrice SDK credentials

**Example:**
```tsx
<Presence
  id="team-presence"
  user={{ id: "123", name: "John", avatarUrl: "..." }}
  predefinedUsers={teamMembers}
  showOfflineUsers={true}
  deduplicateBy="id"
  credentials={credentials}
/>
```

### `<Chat />`

Real-time chat component with message history and typing indicators.

**Props:**
- `id` (string): Unique identifier for the chat instance
- `user` (object): Current user with `name`, `id`, `avatarUrl`
- `placeholder` (string): Input placeholder text
- `maxHeight` (string): Maximum height of chat container
- `showTimestamps` (boolean): Show message timestamps (default: true)
- `showUserAvatars` (boolean): Show user avatars (default: true)
- `autoScroll` (boolean): Auto-scroll to new messages (default: true)
- `disabled` (boolean): Disable message input
- `renderMessage` (function): Custom message renderer
- `renderAvatar` (function): Custom avatar renderer
- `messageFilter` (function): Filter incoming messages
- `credentials` (object): Vaultrice SDK credentials

**Example:**
```tsx
<Chat
  id="support-chat"
  user={{ name: "Customer", id: "cust-123" }}
  placeholder="How can we help you?"
  maxHeight="400px"
  credentials={credentials}
/>
```

### `<ChatRoom />`

Complete chat room combining Chat and Presence components.

**Props:**
- `id` (string): Unique identifier shared between chat and presence
- `user` (object): Current user information
- `title` (string): Room title
- `subtitle` (string): Room description
- `showPresence` (boolean): Show presence component (default: true)
- `showHeader` (boolean): Show room header (default: true)
- `predefinedUsers` (array): Team members for presence
- `deduplicateBy` (string|array): User deduplication strategy
- All Chat and Presence props are supported
- `credentials` (object): Vaultrice SDK credentials

**Example:**
```tsx
<ChatRoom
  id="engineering-room"
  user={currentUser}
  title="Engineering Team"
  subtitle="Daily standups and collaboration"
  predefinedUsers={teamMembers}
  showOfflineUsers={true}
  deduplicateBy="id"
  maxHeight="500px"
  credentials={credentials}
/>
```

### Shared UI Components

- `<Button />`: Styled button with glassmorphism design
- `<Card />`: Card container with backdrop blur effects
- `<Meter />`: Animated progress bar for voting results

## Advanced Usage

### Custom Avatar Rendering

```tsx
import { defaultRenderChatAvatar, getUserInitials, getAvatarColor } from '@vaultrice/react-components'

const customAvatar = (user, isOwn) => (
  <div style={{
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: user.avatarUrl 
      ? `url(${user.avatarUrl})` 
      : getAvatarColor(user.name),
    border: isOwn ? '3px solid #007bff' : '2px solid white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold'
  }}>
    {!user.avatarUrl && getUserInitials(user.name)}
  </div>
)

<Chat
  id="custom-chat"
  user={user}
  renderAvatar={customAvatar}
  credentials={credentials}
/>
```

### Message Filtering

```tsx
<Chat
  id="filtered-chat"
  user={user}
  messageFilter={(msg) => {
    // Only show messages from the last hour
    return (Date.now() - msg.timestamp) < 3600000
  }}
  credentials={credentials}
/>
```

### Team Presence with Roles

```tsx
const teamMembers = [
  { 
    id: "john-123", 
    name: "John Doe", 
    role: "Team Lead",
    avatarUrl: "https://example.com/john.jpg"
  },
  { 
    id: "jane-456", 
    name: "Jane Smith", 
    role: "Developer",
    avatarUrl: "https://example.com/jane.jpg"
  }
]

<Presence
  id="team-presence"
  user={currentUser}
  predefinedUsers={teamMembers}
  showOfflineUsers={true}
  deduplicateBy="id"
  renderAvatar={(connection, isOwn, isPredefined) => (
    <div className={`avatar ${isOwn ? 'own' : ''} ${isPredefined ? 'team-member' : ''}`}>
      {/* Custom avatar with role badges */}
    </div>
  )}
  credentials={credentials}
/>
```

### Handling Events

```tsx
<ChatRoom
  id="event-demo"
  user={user}
  onMessage={(msg) => {
    console.log('New message:', msg)
    // Handle message notifications, logging, etc.
  }}
  onSendReady={(sendFn) => {
    // Store send function for programmatic messaging
    window.sendMessage = sendFn
  }}
  credentials={credentials}
/>
```

## Dark Mode Support

All components support dark mode through CSS custom properties:

```css
[data-theme="dark"] {
  /* Dark theme variables are automatically applied */
}
```

Or programmatically:
```tsx
// Toggle dark mode
document.documentElement.setAttribute('data-theme', 'dark')
```

## Styling & Customization

Components use CSS custom properties for easy theming:

```css
:root {
  --vaultrice-primary-color: #your-brand-color;
  --vaultrice-background: #your-background;
  --vaultrice-text-color: #your-text-color;
}
```

### Programmatic Theme Control

```tsx
import { setTheme, applyColorScheme } from '@vaultrice/react-components'

// Set theme
setTheme('dark')

// Apply color scheme
applyColorScheme('blue')

// Custom colors
document.documentElement.style.setProperty('--vaultrice-primary-color', '#ff6b6b')
```

### Available CSS Custom Properties

| Property | Description | Light Default | Dark Default |
|----------|-------------|---------------|--------------|
| `--vaultrice-primary-color` | Primary accent color | `rgba(55, 0, 255, 0.8)` | `#4dabf7` |
| `--vaultrice-background` | Main background | `rgba(255, 255, 255, 0.6)` | `rgba(255, 255, 255, 0.08)` |
| `--vaultrice-text-color` | Primary text color | `rgba(0, 0, 0, 0.9)` | `rgba(255, 255, 255, 0.95)` |
| `--vaultrice-border-color` | Border color | `rgba(255, 255, 255, 0.3)` | `rgba(255, 255, 255, 0.2)` |
| `--vaultrice-shadow` | Box shadow color | `rgba(0, 0, 0, 0.15)` | `rgba(0, 0, 0, 0.4)` |
```

All components include CSS classes for custom styling:
- `.vaultrice-voting-*` - Voting component styles
- `.vaultrice-presence-*` - Presence component styles  
- `.vaultrice-chat-*` - Chat component styles
- `.vaultrice-chatroom-*` - ChatRoom component styles

## TypeScript Support

Full TypeScript definitions are included:

```tsx
import type { 
  VotingProps, 
  PresenceProps, 
  ChatProps, 
  ChatRoomProps,
  ChatMessage,
  PredefinedUser
} from '@vaultrice/react-components'
```

## Examples & Storybook

Interactive examples and documentation are available in our Storybook:

```bash
git clone https://github.com/vaultrice/react-components
cd react-components
npm install
npm run storybook
```

## Related Packages

- [Vaultrice SDK for React.js](https://github.com/vaultrice/react)
- [Vaultrice TS/JS SDK](https://github.com/vaultrice/sdk)

## Support

Have questions, ideas or feedback? [Open an issue](https://github.com/vaultrice/react) or email us at [support@vaultrice.com](mailto:support@vaultrice.com)

---

Made with ❤️ for developers who need real-time collaboration, without the backend hassle.

**Try Vaultrice for [free](https://www.vaultrice.app/register)!**
