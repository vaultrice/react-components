# Vaultrice React Components

<!-- [![Tests](https://github.com/vaultrice/react-components/workflows/node/badge.svg)](https://github.com/vaultrice/react-components/actions?query=workflow%3Anode) -->
[![npm version](https://img.shields.io/npm/v/@vaultrice/react-components.svg?style=flat-square)](https://www.npmjs.com/package/@vaultrice/react-components)

Vaultrice React Components is a set of UI components for building real-time, persistent, and encrypted voting experiences in React, powered by [Vaultrice](https://www.vaultrice.com).

Base on [`@vaultrice/react`](https://github.com/vaultrice/react) and [`@vaultrice/sdk`](https://github.com/vaultrice/sdk).

## Features

- **Voting UI**: Easily add voting forms and results to your app.
- **Real-time storage**: Vote counts update instantly across clients.
- **No backend required**: Powered by Vaultrice's encrypted key-value storage.
- **Customizable**: Style and extend components as needed.
- **TypeScript support**: Fully typed APIs.

## Installation

```bash
npm install @vaultrice/react-components
```

## Usage

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
      // Optionally pass userId, credentials, or instance options
    />
  )
}
```

## Components

### `<Voting />`

A complete voting widget with selectable choices, vote button, and live results.

**Props:**

- `id` (string): Unique identifier for the voting instance.
- `title` (string, optional): Headline for the voting.
- `description` (string, optional): Description text.
- `voteLabel` (string, optional): Button label (default: `'vote'`).
- `choices` (array): List of `{ id, label }` options.
- `userId` (string, optional): If provided, voting status is stored in Vaultrice; otherwise, localStorage is used.
- `credentials` (object, optional): Vaultrice SDK credentials.
- `choicesInstanceOptions` / `userInstanceOptions` (object, optional): Advanced storage options.
- `bind` (boolean, default true): Whether to bind to changes.

### Shared UI Components

- `<Button />`: Styled button for actions.
- `<Card />`: Card container for content.
- `<Meter />`: Animated meter bar for percentages.

## Advanced Usage

You can customize storage, pass credentials, or extend the UI by composing the shared components.

See [src/types.ts](src/types.ts) for full prop definitions.


## Support

Have questions, ideas or feedback? [Open an issue](https://github.com/vaultrice/react) or email us at [support@vaultrice.com](mailto:support@vaultrice.com)

---

Made with ❤️ for developers who need real-time storage, without the backend hassle.

**Try Vaultrice for [free](https://www.vaultrice.app/register)!**
