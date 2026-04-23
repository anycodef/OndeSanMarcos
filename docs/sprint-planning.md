# Sprint Planning

**Project:** OndeSanMarcos
**Version:** 1.0
**Date:** 04/18/2026

## Document Control

| Version | Date | Prepared by | Reviewed by | Approved by | Summary of Changes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1.0 | 04/18/2026 | Frank Kevin Condor Huarhuachi | Frank Kevin Condor Huarhuachi | Frank Kevin Condor Huarhuachi | Initial documentation |

## Overview
As a solo developer, sprints are structured by dependency and focus rather than fixed timeframes. A sprint is considered complete when all its tasks are finished, at which point the next sprint begins.

## Sprints

### Sprint 1: Project Foundation & Basic Navigation
**Focus:** Set up the fundamental architecture, frontend scaffolding, and the core 3D map visualizer.

*   **US-1.1: Base Permissions and Visualization (Est: 5)**
    *   Initialize React Native project.
    *   Install and configure Mapbox SDK for iOS and Android.
    *   Set default map coordinates and camera centered on UNMSM.
    *   Implement GPS location permission request logic.
    *   Display user avatar if location is granted and within campus bounds.
    *   Implement toast notification for denied GPS permissions.
*   **US-4.1: Guest Access (Est: 3)**
    *   Create a Landing/Login screen.
    *   Add "Continue as Guest" button.
    *   Implement navigation from Landing screen to Main App (Map tab) bypassing authentication.
*   **US-2.1: Dedicated Chat Interface (Est: 5)** *(Frontend Only)*
    *   Setup React Navigation with a bottom tab navigator.
    *   Create the Chat screen UI component.
    *   Implement chat bubble UI for user and bot messages.
    *   Implement text input and send button logic (saving local state).

### Sprint 2: Core Map Interaction & Routing
**Focus:** Enhance the map experience with real-time orientation and point-to-point routing logic.

*   **US-1.2: Avatar with Real Rotation (Est: 8)**
    *   Integrate device magnetometer/compass sensor library.
    *   Bind GPS location changes to avatar translation on the map.
    *   Bind compass heading data to avatar rotation on the map.
    *   Implement a smoothing algorithm (e.g., Kalman filter or simple moving average) for the compass data.
*   **US-3.1: Route Tracing (Point A to B) (Est: 8)**
    *   Implement tap gestures on the Mapbox component to set Origin and Destination markers.
    *   Integrate Mapbox Directions API (or a custom routing API for the campus).
    *   Fetch route coordinates between Origin and Destination.
    *   Render a Polyline layer on the map using the fetched route coordinates.

### Sprint 3: AI Assistant Backend & RAG Integration
**Focus:** Establish the backend infrastructure, database, and LlamaIndex logic to answer university-related queries.

*   **US-2.2: RAG Queries (Knowledge Base) (Est: 13)**
    *   Setup backend repository (Node.js/Python).
    *   Configure Supabase vector database (pgvector).
    *   Integrate LlamaIndex in the backend.
    *   Create an endpoint for receiving chat messages and returning RAG responses.
    *   Implement fallback logic for out-of-context queries.
    *   Connect frontend Chat screen to the new backend endpoint.
*   **US-2.4: Context Filter (Guardrails) (Est: 3)**
    *   Refine the System Prompt in the backend to establish strict boundaries.
    *   Write test cases/queries in the backend to verify guardrails are working.

### Sprint 4: Advanced AI Features & User Profiles
**Focus:** Bridge the chat and map capabilities for automatic routing, and implement full user authentication.

*   **US-2.3: Automatic Routing (Chat-Map) (Est: 8)**
    *   Update backend prompt/logic to detect navigation intents.
    *   Modify backend response format to include `draw_route` flag and destination coordinates.
    *   Update frontend chat logic to parse the JSON response.
    *   Implement navigation to the Map tab programmatically upon receiving `draw_route`.
    *   Pass destination coordinates to the map component for routing.
*   **US-4.2: Registration and Activation (Est: 8)**
    *   Setup Supabase Auth (or similar auth provider).
    *   Create Registration screen UI (Email, Password).
    *   Implement registration logic triggering an email confirmation.
    *   Create Login screen UI.
    *   Implement login logic handling the "email not confirmed" error state.
