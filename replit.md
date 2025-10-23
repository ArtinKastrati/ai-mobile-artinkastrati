# AI Mobile App - Artin Kastrati

## Overview
This is a mobile application built with React Native and Expo. The project is configured to run in the Replit environment and provides a web preview accessible directly in the browser.

## Project Architecture

### Technology Stack
- **Framework**: React Native with Expo SDK ~54.0.18
- **Runtime**: Node.js 20
- **Web Support**: React Native Web for browser compatibility
- **Bundler**: Metro (configured for Replit proxy support)

### Key Files
- `App.js` - Main application entry point
- `app.json` - Expo configuration
- `package.json` - Dependencies and scripts
- `metro.config.js` - Metro bundler configuration with CORS and iframe support for Replit
- `index.js` - Entry point for web bundle

## Development Setup

### Running the App
The app automatically starts when you open the Repl. The workflow is configured to run:
```bash
npm run web
```

This starts the Expo development server on port 5000 with web preview.

### Available Scripts
- `npm start` - Start Expo development server
- `npm run web` - Start web version on port 5000
- `npm run android` - Start Android build (requires Android device/emulator)
- `npm run ios` - Start iOS build (requires macOS)

## Replit-Specific Configuration

### Metro Configuration
The `metro.config.js` file is configured to:
- Allow CORS for iframe embedding (Replit's web preview)
- Remove X-Frame-Options restrictions
- Support the Replit proxy environment

### Workflow
- **Name**: React Native App
- **Command**: `npm run web`
- **Port**: 5000
- **Output**: Web preview (iframe)

## Recent Changes
- **October 23, 2025**: Initial project setup
  - Created React Native project with Expo
  - Configured Metro bundler for Replit environment
  - Set up workflow on port 5000
  - Added Node.js 20 runtime

## Dependencies
See `package.json` for complete list. Key dependencies:
- `expo` - Expo SDK
- `react` - React library
- `react-native` - React Native framework
- `react-native-web` - Web support for React Native
- `expo-status-bar` - Status bar component

## Notes
- The project uses Expo's blank template as a starting point
- Metro bundler runs on port 8081 internally
- Web preview is accessible on port 5000
- The app is configured to work with Replit's proxy/iframe architecture
- You may see a warning about `react-native-web@0.19.13` expecting version ^0.21.0. This is a known Expo CLI quirk - version 0.19.13 is actually the correct version for Expo SDK 54 and can be safely ignored.
