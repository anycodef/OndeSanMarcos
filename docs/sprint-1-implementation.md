# Sprint 1 Implementation Documentation

## Overview
This document outlines the implementation details and manual configuration steps required for Sprint 1 of the **OndeSanMarcos** project.

The focus of this sprint was to set up the fundamental architecture, frontend navigation scaffolding, the core 3D map visualizer (Mapbox), and a base chat interface.

## User Stories Implemented

### US-1.1: Base Permissions and Visualization
- **Mapbox Integration:** Added `@rnmapbox/maps` and configured the Expo plugin in `app.json`.
- **Location Permissions:** Integrated `expo-location` to prompt users for foreground location tracking.
- **Visualization:** Map loads centered on UNMSM campus (-12.0560, -77.0844). A cute "🦊" avatar is shown at the user's location if permissions are granted.
- **Toast Notifications:** Added `react-native-toast-message` to show a cute, user-friendly error toast when GPS permissions are denied.

### US-4.1: Guest Access
- **Navigation:** Implemented `@react-navigation/native` with a Native Stack.
- **Landing Screen:** Built a cute `LandingScreen.js` with a "Continue as Guest 🌸" button.
- **Bypass Auth:** Clicking the button directly navigates the user to the `MainApp` tab navigator, effectively bypassing authentication for now.

### US-2.1: Dedicated Chat Interface (Frontend Only)
- **Tab Navigation:** Added a Bottom Tab Navigator connecting the `MapScreen` and `ChatScreen`.
- **UI:** Designed a cute and clean chat interface in `ChatScreen.js`.
- **Functionality:** Users can type messages and hit send. The local state updates to show the user's message bubble (hot pink) and simulates a response from the bot.

## Manual Configurations Needed (Action Required)

To successfully run and compile the application with Mapbox, you need to manually configure your Mapbox tokens in the codebase.

1. **Get your Tokens:**
   - Go to your Mapbox account.
   - Create a **Public Access Token** (starts with `pk.`).
   - Create a **Secret Download Token** (starts with `sk.`) with `Downloads:Read` permissions.

2. **Configure App.json:**
   - Open `frontend/app.json`.
   - Locate the `@rnmapbox/maps` plugin section.
   - Replace `"YOUR_MAPBOX_DOWNLOAD_TOKEN_HERE"` with your actual Secret Download Token.

3. **Configure MapScreen:**
   - Open `frontend/src/screens/MapScreen.js`.
   - Locate `Mapbox.setAccessToken('YOUR_MAPBOX_ACCESS_TOKEN_HERE');` at the top of the file.
   - Replace `"YOUR_MAPBOX_ACCESS_TOKEN_HERE"` with your actual Public Access Token.

## Build Instructions
Since `@rnmapbox/maps` contains native code that isn't supported in standard Expo Go, you must build the app natively using Expo prebuild:

```bash
cd frontend
npx expo prebuild
npx expo run:android # or run:ios
```
