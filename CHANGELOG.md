# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.3](https://github.com/vaultrice/react-components/compare/v1.1.2...v1.1.3) - 2025-09-11

- remove unnecessary extra props

## [1.1.2](https://github.com/vaultrice/react-components/compare/v1.1.1...v1.1.2) - 2025-09-11

- Layout and styling improvements for ChatRoom/Chat to better adapt to container height

## [1.1.1](https://github.com/vaultrice/react-components/compare/v1.1.0...v1.1.1) - 2025-09-08

- **Message Persistence**: Added `persistMessages` prop to `Chat` and `ChatRoom` components to enable persistent message history using Vaultrice storage
- **Message History Limit**: Added `messageHistoryLimit` prop (default: 100) to control the maximum number of messages kept in persistent history

## [1.1.0](https://github.com/vaultrice/react-components/compare/v1.0.0...v1.1.0) - 2025-09-08

- **New `<Presence />` component**: Real-time user presence indicators with customizable avatars
  - Support for predefined team members that show even when offline
  - User deduplication by configurable properties (`id`, `name`, etc.)
  - Custom avatar rendering with fallback avatar generation
  - Glassmorphism design with dark mode support
- **New `<Chat />` component**: Full-featured real-time chat with message history
  - Typing indicators and auto-scroll functionality
  - Message grouping and timestamps
  - Custom message and avatar rendering
  - Message filtering capabilities
  - Glassmorphism design with dark mode support
- **New `<ChatRoom />` component**: Complete chat room combining Chat and Presence
  - Integrated header with room title and online user count
  - Seamless combination of chat and presence functionality
  - Configurable display options (header, presence, etc.)
  - Glassmorphism design with dark mode support
- **Enhanced theming system**: Comprehensive CSS custom properties for theming
  - New glassmorphism gradient variables for consistent styling
  - Improved dark mode support across all components
  - Theme utilities (`setTheme`, `toggleTheme`, `applyColorScheme`)
- **Avatar utilities**: Shared avatar rendering functions
  - `getUserInitials()` - Generate user initials from names
  - `getAvatarColor()` - Consistent color generation for fallback avatars
  - `defaultRenderPresenceAvatar()` and `defaultRenderChatAvatar()` - Default renderers

## [1.0.0](https://github.com/vaultrice/react-components/compare/v0.9.15...v1.0.0) - 2025-09-06

- First official stable release. This marks it as production-ready.
- No functional changes from the latest 0.9.x series — this release only promotes the project to a stable major version.
- Public API is considered stable; any future breaking changes will require a major version bump per SemVer.
- No migration steps required for users upgrading from 0.9.x.
- Thanks to all contributors and early adopters.

## [0.9.15](https://github.com/vaultrice/react-components/compare/v0.9.14...v0.9.15) - 2025-09-05

- update dependencies

## [0.9.14](https://github.com/vaultrice/react-components/compare/v0.9.13...v0.9.14) - 2025-08-31

- cleanup internal setVoted if expired

## [0.9.13](https://github.com/vaultrice/react-components/compare/v0.9.12...v0.9.13) - 2025-08-31

- improve internal setVoted

## [0.9.12](https://github.com/vaultrice/react-components/compare/v0.9.11...v0.9.12) - 2025-08-31

- use vaultriceClass in userKeyForLocalStorage

## [0.9.11](https://github.com/vaultrice/react-components/compare/v0.9.10...v0.9.11) - 2025-08-28

- update dependencies

## [0.9.10](https://github.com/vaultrice/react-components/compare/v0.9.9...v0.9.10) - 2025-08-28

- update dependencies

## [0.9.9](https://github.com/vaultrice/react-components/compare/v0.9.8...v0.9.9) - 2025-08-27

- Voting: showPercentage, showTotalVotes

## [0.9.8](https://github.com/vaultrice/react-components/compare/v0.9.7...v0.9.8) - 2025-08-27

- improve Voting component to check if isLoading

## [0.9.7](https://github.com/vaultrice/react-components/compare/v0.9.6...v0.9.7) - 2025-08-27

- voting choices can also be a react component

## [0.9.6](https://github.com/vaultrice/react-components/compare/v0.9.5...v0.9.6) - 2025-08-27

- prefix userKeyForLocalStorage for Voting component

## [0.9.5](https://github.com/vaultrice/react-components/compare/v0.9.4...v0.9.5) - 2025-08-27

- introduce userIdForLocalStorage for Voting component
- update dependencies

## [0.9.4](https://github.com/vaultrice/react-components/compare/v0.9.3...v0.9.4) - 2025-08-27

- fix react in peer dependencies

## [0.9.3](https://github.com/vaultrice/react-components/compare/v0.9.2...v0.9.3) - 2025-08-27

- the Voting id is now transparently used as objectId

## [0.9.2](https://github.com/vaultrice/react-components/compare/v0.9.1...v0.9.2) - 2025-08-26

- fix build

## [0.9.1](https://github.com/vaultrice/react-components/compare/v0.9.0...v0.9.1) - 2025-08-26

- fix build

## [0.9.0] - 2025-08-26

- Initial release of Vaultrice React Components.
- `<Voting />` component: voting UI with live results, persistent storage, and customizable props.
- Shared UI components: `<Button />`, `<Card />`, `<Meter />`.
- TypeScript types for all components.
- CSS styling for all components.
