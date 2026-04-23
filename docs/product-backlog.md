# Product Backlog

**Project:** OndeSanMarcos
**Version:** 1.0
**Date:** 04/18/2026

## Document Control

| Version | Date | Prepared by | Reviewed by | Approved by | Summary of Changes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1.0 | 04/18/2026 | Frank Kevin Condor Huarhuachi | Frank Kevin Condor Huarhuachi | Frank Kevin Condor Huarhuachi | Initial documentation |

## Epics

| Code | Name | Description | Priority |
| :--- | :--- | :--- | :--- |
| EPIC01 | Navigation and 3D Map | Integration of the Mapbox SDK, virtual environment rendering, and user spatial visualization via avatars. | High |
| EPIC03 | Routing Engine and GPS | Algorithmic and geolocation logic to trace efficient paths between the origin and destination points. | Medium |
| EPIC02 | AI Assistant (RAG) | Conversational engine driven by a vector database for automated institutional queries. | Medium |
| EPIC04 | Profile and Institutional Management | Authentication, preference registration, and knowledge base management. | Low |

---

## User Stories

### EPIC01: Navigation and 3D Map

#### US-1.1: Base Permissions and Visualization
* **Epic:** EPIC01
* **Description:** **As a** user, **I want** to see the 3D map of the university regardless of my actual location, **so that** I can take a virtual tour.
* **Acceptance Criteria:**
  1. Upon entry, the camera always loads centered on UNMSM.
  2. If GPS is accepted and the user is on campus, the avatar appears.
  3. If GPS is denied, a warning toast (short message) is shown, but map usage (Zoom, Pan, Pitch) is allowed.
* **Priority:** High
* **Estimate:** 5
* **Technical Sub-tasks:**
  - Initialize React Native project.
  - Install and configure Mapbox SDK for iOS and Android.
  - Set default map coordinates and camera centered on UNMSM.
  - Implement GPS location permission request logic.
  - Display user avatar if location is granted and within campus bounds.
  - Implement toast notification for denied GPS permissions.

#### US-1.2: Avatar with Real Rotation
* **Epic:** EPIC01
* **Description:** **As a** user on campus, **I want** my avatar to rotate when I turn my body, **so that** I know which direction I am facing.
* **Acceptance Criteria:**
  1. The avatar translates using lat/long changes from the GPS.
  2. The avatar rotates on its own axis by reading magnetometer (compass) data from the device.
  3. A smoothing filter is applied in the code to reduce sensor jitter.
* **Priority:** Medium
* **Estimate:** 8
* **Technical Sub-tasks:**
  - Integrate device magnetometer/compass sensor library.
  - Bind GPS location changes to avatar translation on the map.
  - Bind compass heading data to avatar rotation on the map.
  - Implement a smoothing algorithm (e.g., Kalman filter or simple moving average) for the compass data.

### EPIC02: AI Assistant (RAG)

#### US-2.1: Dedicated Chat Interface
* **Epic:** EPIC02
* **Description:** **As a** user, **I want** to access an exclusive chat tab, **so that** I can interact with the assistant without distractions.
* **Acceptance Criteria:**
  1. There is a bottom navigation menu with an "Assistant" icon.
  2. The chat screen displays text bubbles (user and bot).
  3. Includes a text input field and a send button.
* **Priority:** High
* **Estimate:** 5
* **Technical Sub-tasks:**
  - Setup React Navigation with a bottom tab navigator.
  - Create the Chat screen UI component.
  - Implement chat bubble UI for user and bot messages.
  - Implement text input and send button logic (saving local state).

#### US-2.2: RAG Queries (Knowledge Base)
* **Epic:** EPIC02
* **Description:** **As a** student, **I want** to get answers based on official UNMSM documents, **so that** I can trust the accuracy of the information.
* **Acceptance Criteria:**
  1. The backend uses LlamaIndex to query the vector base in Supabase.
  2. If the information is not in the documents, the bot responds: "I do not have that official information" ("No tengo esa información oficial").
  3. Responses are delivered in plain text.
* **Priority:** High
* **Estimate:** 13
* **Technical Sub-tasks:**
  - Setup backend repository (Node.js/Python).
  - Configure Supabase vector database (pgvector).
  - Integrate LlamaIndex in the backend.
  - Create an endpoint for receiving chat messages and returning RAG responses.
  - Implement fallback logic for out-of-context queries.
  - Connect frontend Chat screen to the new backend endpoint.

#### US-2.3: Automatic Routing (Chat-Map)
* **Epic:** EPIC02
* **Description:** **As a** disoriented user, **I want** the map to automatically trace the route when asking for a place, **so that** I can reach my destination without manual searches.
* **Acceptance Criteria:**
  1. The bot identifies navigation intents (e.g., "How do I get to...?").
  2. The backend sends a JSON with coordinates and the `draw_route` flag.
  3. The frontend automatically switches to the Map tab and draws the route to those coordinates.
* **Priority:** High
* **Estimate:** 8
* **Technical Sub-tasks:**
  - Update backend prompt/logic to detect navigation intents.
  - Modify backend response format to include `draw_route` flag and destination coordinates.
  - Update frontend chat logic to parse the JSON response.
  - Implement navigation to the Map tab programmatically upon receiving `draw_route`.
  - Pass destination coordinates to the map component for routing.

#### US-2.4: Context Filter (Guardrails)
* **Epic:** EPIC02
* **Description:** **As a** user, **I want** the AI to be limited to university topics, **so that** misuse of API resources is prevented.
* **Acceptance Criteria:**
  1. The "System Prompt" instructs the AI not to answer topics outside of UNMSM.
  2. If something out of context is asked (e.g., recipes, homework), the bot apologizes and declines to answer.
* **Priority:** High
* **Estimate:** 3
* **Technical Sub-tasks:**
  - Refine the System Prompt in the backend to establish strict boundaries.
  - Write test cases/queries in the backend to verify guardrails are working.

### EPIC03: Routing Engine and GPS

#### US-3.1: Route Tracing (Point A to B)
* **Epic:** EPIC03
* **Description:** **As a** disoriented user, **I want** to select an origin and a destination point, **so that** I can see the most optimal route traced on the map.
* **Acceptance Criteria:**
  1. Allows selecting origin and destination via taps on the map.
  2. A visible polyline is drawn over permitted streets/paths on campus.
  3. Internet connection is required to calculate the route (API).
* **Priority:** High
* **Estimate:** 8
* **Technical Sub-tasks:**
  - Implement tap gestures on the Mapbox component to set Origin and Destination markers.
  - Integrate Mapbox Directions API (or a custom routing API for the campus).
  - Fetch route coordinates between Origin and Destination.
  - Render a Polyline layer on the map using the fetched route coordinates.

### EPIC04: Profile and Institutional Management

#### US-4.1: Guest Access
* **Epic:** EPIC04
* **Description:** **As a** visiting user, **I want** to access the map without creating an account, **so that** I can explore the university quickly.
* **Acceptance Criteria:**
  1. Initial screen has a "Continue as Guest" button.
  2. The user accesses the Free Mode of the map with full visualization functionality.
* **Priority:** High
* **Estimate:** 3
* **Technical Sub-tasks:**
  - Create a Landing/Login screen.
  - Add "Continue as Guest" button.
  - Implement navigation from Landing screen to Main App (Map tab) bypassing authentication.

#### US-4.2: Registration and Activation
* **Epic:** EPIC04
* **Description:** **As a** student, **I want** to register and activate my account via email, **so that** I can have a profile in the application.
* **Acceptance Criteria:**
  1. Registration asks for Email and Password.
  2. An activation link is sent to the inbox.
  3. Login fails with an "Inactive account" message if the link hasn't been clicked.
* **Priority:** High
* **Estimate:** 8
* **Technical Sub-tasks:**
  - Setup Supabase Auth (or similar auth provider).
  - Create Registration screen UI (Email, Password).
  - Implement registration logic triggering an email confirmation.
  - Create Login screen UI.
  - Implement login logic handling the "email not confirmed" error state.
