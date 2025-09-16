# Changelog

All notable changes to this project will be documented in this file.

## [1.0.4] - 2025-09-16

### Added

- Small delay to `clearConsole`.

## [1.0.3] - 2025-09-15

### Added

- Extended `getRandomString`:
  - Added `extraChars` parameter for custom character sets.
  - Added `mode` parameter (`concat` or `replace`) to control how custom characters are used.
- Enhanced `getTime`:
  - `timestamp` parameter now defaults to `Date.now()` when not provided.

### Changed

- Updated JSDoc examples for `getRandomString` and `getTime`.

---

## [1.0.2] - 2025-07-20

### Changed

- Added UUID v3, v4, v5, toHex, btoa, atob for cryptography

## [1.0.1] - 2025-06-21

### Changed

- Added full JSDoc comments to all utility functions for better IDE support and maintainability.
- Improved `groupBy`:
  - Now safely converts group keys to strings.
  - Added `@template` and type hints for clarity.
- Enhanced `sleep`:
  - Added support for time units (`ns`, `μs`, `ms`, `s`, `m`, `h`) with default as seconds.
  - Added error handling for unsupported units.
- Improved `decodeJWT`:
  - Switched to `base64url` decoding for proper JWT parsing.
  - Added error handling and format validation.
- Refined `debounce` and `throttle`:
  - Clearer logic.
  - Added JSDoc and explanation for usage.
- Hardened `isEmpty` to explicitly check for object type.
- Standardized random utilities:
  - `getRandomNumber`, `randomColor`, `randomHex`, `shuffleArray`, `getRandomElements`.
  - Now includes better naming, comments, and float formatting.
- Improved string utilities:
  - `capitalize` now safely handles empty strings.
  - `slugify` comments and spacing logic clarified.
  - `getRandomString` logic streamlined and documented.
- Updated `.gitignore`:
  - Added common Node.js ignores: `.DS_Store`, `dist/`, `build/`, `.vscode/`, `coverage/`, and more.
- Refactor README.md

### Fixed

- Minor logic edge cases in `capitalize` and `getRandomNumber`.

---

## [1.0.0] - 2025-06-01

### Added

- Initial release with the following features:
  - String utilities (capitalize, getRandomString, slugify)
  - Random utilities (getRandomNumber, randomColor, shuffleArray)
  - Time utilities (getTime, sleep)
  - Array utilities (groupBy)
  - Misc utilities (debounce, throttle, isEmpty, clearConsole)

### Changed

- N/A (Initial release)

### Deprecated

- N/A (Initial release)

### Removed

- N/A (Initial release)

### Fixed

- N/A (Initial release)
