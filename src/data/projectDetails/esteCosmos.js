// src/data/projectDetails/esteCosmos.js
//
// ── Inline image syntax ────────────────────────────────────────────────────
//   ![Caption Text](./path/to/image.png)
//   Use a path starting with "PLACEHOLDER" to render a styled placeholder slot.
//   Example: ![Dashboard View](PLACEHOLDER_dashboard)
//
// ── Color palette block ────────────────────────────────────────────────────
//   :::palette
//   #hexcode | Token Name | Usage note
//   :::
//
// ── Typography block ───────────────────────────────────────────────────────
//   :::typography
//   Font Family | Classification | Usage note
//   :::
// ───────────────────────────────────────────────────────────────────────────

export const esteCosmosDetails = `
# Este Cosmos — Portfolio Case Study

## What is it?

Este Cosmos is a personal vehicle telemetry and fleet management web application. Users track fuel fill-ups, maintenance events, tire pressure readings, and reimbursable expenses across multiple vehicles. The app derives miles per gallon dynamically, monitors vehicle health indicators, and — for authorized accounts — runs a machine learning anomaly detection model in the browser to flag efficiency degradation in real time.

---

## The Real-World Problem

Many people drive for work and need to account for every fuel purchase. Mileage reimbursement, employer fuel card reconciliation, and personal expense tracking all require the same raw data: date, odometer, gallons, cost, and location. Most people manage this in a spreadsheet or not at all.

Beyond reimbursement, there is a second, more subtle problem: most drivers have no visibility into how efficiently their vehicle is actually running over time. A gradual drop in fuel economy can indicate anything from under-inflated tires to a dirty air filter to a failing fuel injector. Without a log to compare against, that decline is invisible until it becomes a breakdown.

Este Cosmos addresses both of these: the administrative burden of vehicle expense tracking, and the diagnostic blind spot created by not having historical telemetry.

---

## Who Would Use This?

- **Rideshare and delivery drivers** who log hundreds of fill-ups per year and need to track fuel spend for tax deductions or employer reimbursement.
- **Contractors and field technicians** who drive company or personal vehicles and submit mileage and fuel expense reports.
- **Fleet operators** managing a small pool of vehicles — service vans, landscaping trucks, food trucks — who want centralized visibility without enterprise software.
- **Car enthusiasts** who want to monitor their vehicle's efficiency over time, track maintenance history, and catch early signs of mechanical issues.
- **Anyone who has ever missed a reimbursement** because they lost a receipt or forgot to log a fill-up.

---

## Core Use Cases

### 1. Expense Reimbursement Tracking
A driver logs every fill-up with the total cost and marks it as reimbursable. When they submit expenses at the end of the month, the app's Berry Reclaim summary gives them the exact gross fuel spend, the amount already reimbursed, and the net they are still owed.

### 2. Fuel Efficiency Monitoring
By requiring an odometer reading with every fill-up, the app can calculate true miles per gallon between consecutive full-tank fills. The efficiency trend is visualized on a line chart over configurable date ranges (14 days to all time), making a declining MPG trend visually obvious before it becomes a costly repair.

### 3. Maintenance Scheduling and Health Monitoring
Every oil change and tire rotation is logged with an odometer reading. The app tracks miles driven since the last service and displays a health percentage for both engine oil and tires. When health drops below 20%, an alert banner appears on the dashboard. Tire pressure readings trigger a low-pressure alert when any corner reads below 28 PSI.

### 4. Multi-Vehicle Fleet Management
Users can register any number of vehicles and switch between them. Each vehicle has its own isolated log of fuel, service, and tire data, and its own set of health indicators.

### 5. AI-Assisted Anomaly Detection
For accounts with access to the neural link feature, each new fuel log is scored by an Edge Impulse anomaly detection model running directly in the browser as a WebAssembly module. The model takes miles per gallon, fuel quantity, and miles driven per day as inputs and returns an anomaly score. A high score at log time triggers an immediate "Efficiency Degradation" warning, letting the driver know that this fill-up is statistically unusual compared to their historical pattern.

---

## Screenshots

### Hangar Dashboard
![The main dashboard showing ship health indicators and fleet overview](PLACEHOLDER_hangar)

### Blackbox Fuel Log
![Fuel log entries with dynamically calculated MPG per fill-up](PLACEHOLDER_blackbox)

### Neural Link Anomaly Alert
![Real-time anomaly detection warning triggered after an unusual fill-up](PLACEHOLDER_anomaly)

### Berry Reclaim — Reimbursement Summary
![Monthly expense breakdown showing gross spend, reimbursed amount, and net owed](PLACEHOLDER_reclaim)

---

## Design System

### Color Palette
:::palette
#c517f5 | Espeon Pink | Primary brand accent — buttons, scrollbar thumbs, and focus rings
#17c5f5 | Cyber Teal | Secondary accent — highlights, dark-mode borders, neon card shadows
#f57317 | Burnt Orange | Third accent — warnings and alert states
#f0f7f7 | Frost White | Light-mode page background (light cyan-tinted surface)
#1e1c29 | Deep Navy | Near-black — text, borders, and inputs in light mode
#ffffff | Pure White | Card and popover surface in light mode
#e4efef | Pale Teal Mist | Muted surface for de-emphasized areas in light mode
#666780 | Slate Gray | Muted foreground — captions and secondary labels
#6cbfbf | Airy Cyan | Accent; dark-mode border and input highlight
#ea4040 | Signal Red | Destructive actions — errors, deletes, sign-out (light mode)
#e87070 | Soft Crimson | Destructive color in dark mode — muted red to reduce eye strain
#1a1825 | Midnight Navy | Dark-mode page background
#1f1d2e | Charcoal Slate | Dark-mode card/popover surface (slightly lighter than background)
#e680c0 | Rose Quartz | Focus ring — Espeon Pink hue at softer lightness
:::

### Typography
:::typography
Inter | Sans-Serif / Geometric | Body text, labels, buttons, and all general UI copy
:::

---

## Technical Highlights

### Real-Time Firestore Sync
All data is stored in Cloud Firestore and streamed in real time via "onSnapshot" listeners. Changes made from another device appear immediately with no manual refresh.

### Non-Blocking Write Architecture
Firestore writes never block the UI. The app uses fire-and-forget helper functions that write to Firestore in the background. If a write fails (network error, permission issue), a global event emitter catches the error and surfaces it as a toast notification. From the user's perspective, logging a fill-up feels instant.

### In-Browser ML with WebAssembly
The anomaly detection model is a compiled WASM binary that runs entirely client-side. No data is sent to an inference API. The model was trained on fuel telemetry features using Edge Impulse and exported as a WebAssembly module. This means the AI feature has zero additional latency and zero additional cost per inference.

### Dynamic MPG Calculation
MPG cannot be calculated from a single fill-up. The algorithm walks backward through all previous fill-up records to find the last full-tank entry, then divides miles driven (odometer delta) by total gallons consumed across all partial fills in between. This handles partial fill-ups correctly, which most simple trackers do not.

### Layered Context Architecture
State is split across three React Contexts: one for UI and navigation, one for fleet data and CRUD operations, and one for derived analytics (chart data, health percentages, alert list). Each layer only knows about what it needs. Components consume the minimum context required for their job.

### Per-User Data Isolation
Firestore Security Rules enforce that every read and write requires the requesting user's UID to match the document path. No user can read or write another user's vehicle or log data. There is no admin role or shared collection.

---

## What I Built

- Full-stack React application using Vite, React 19, and vanilla CSS Modules
- Firebase Authentication (email/password) with password reset flow
- Cloud Firestore integration with real-time listeners and a non-blocking write layer
- Custom MPG calculation algorithm handling partial fill-up sequences
- Edge Impulse WASM anomaly detection model integrated into the fuel log submission flow
- Vehicle health indicators derived from service log history and mileage thresholds
- Recharts data visualization (line chart with dual Y-axis, donut chart)
- Fully responsive layout (desktop sidebar, mobile bottom nav + floating action button)
- Dual theme (light / dark) with "localStorage" persistence and system preference detection
- Firestore Security Rules scoped to authenticated user UID

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Vanilla CSS Modules |
| Database | Cloud Firestore |
| Auth | Firebase Authentication |
| ML / AI | Edge Impulse (WebAssembly) |
| Charts | Recharts |
| Icons | Lucide React |
| Date Utilities | date-fns |
| Hosting | Firebase / Netlify |

`;
