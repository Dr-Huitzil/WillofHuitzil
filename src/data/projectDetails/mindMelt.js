export const mindMeltDetails = `
# Mind Melt — Case Study

## What is it?

Mind Melt is a creative-community web app for the student art, music, and culture collective that started as a radio show on CSUMB's Otter Media channel in 2022. The interface is built as a fully interactive Windows XP-style desktop OS simulation, complete with draggable and resizable windows, a taskbar, a start menu, and application icons. It serves students and creatives who want to discover Mind Melt's music, art, fashion, and photography community through a nostalgic, playful UI.

---

## Core Features

- **Desktop OS Simulation** — A full Windows XP-inspired desktop with draggable icons, a taskbar, a Start menu, and multiple simultaneous draggable/resizable windows.
- **Dynamic Window Manager** — A centralized app registry ("apps.config.js") and React Context power lazy-loaded, stacked windows with minimize, maximize, and close controls.
- **Music Player** — A Winamp-inspired media player with an animated LCD display, scrolling marquee title, visualizer bars, playlist view, and a skinnable theme system via CSS custom properties.
- **File Manager** — A virtual filesystem browser organized into virtual paths (Documents, Pictures, Music, Videos, Desktop) for navigating site content.
- **Paint Window** — An in-browser drawing/paint application accessible as a standalone window.
- **About Window** — A tabbed info window with a "Mind Melt" brand overview tab and a "Rogelio" (made-by) portfolio tab.
- **Settings Window** — A Display Properties-style dialog with a monitor preview, wallpaper picker, and a password-gated advanced section.
- **Chatbox** — A chat interface window for user interaction.
- **Contact Window** — A contact/social form styled to match the OS aesthetic.
- **Calculator** — A functional in-browser calculator window.
- **Notepad** — A simple text-editor window mirroring Windows Notepad.
- **Recycle Bin** — A themed window representing the desktop trash/recycle metaphor.
- **Custom Wallpaper** — Users can set a custom desktop wallpaper that persists via "localStorage".
- **Draggable Desktop Icons** — Icon positions are freely repositioned via drag-and-drop and persisted to "localStorage".
- **Context Menu** — Right-clicking the desktop surfaces a Windows-style context menu with a Display Settings shortcut.
- **Preloader / Boot Screen** — A 3-second simulated boot sequence plays on first load before the desktop appears.
- **Real-Time Clock** — A live clock displayed in the system tray area of the taskbar.
- **Firebase Integration** — Backend connectivity via Firebase (v12) for data storage and real-time features.
- **Analytics** — PostHog analytics is integrated for usage tracking.
- **Error Boundary** — A global React Error Boundary catches window-level crashes and prevents the full app from breaking.

---

## Screenshots

### Desktop View
![Desktop with icons, taskbar, start button, and system clock](PLACEHOLDER_desktop_view)

### Start Menu
![Classic Windows-style start menu with app list and vertical navy strip](PLACEHOLDER_start_menu)

### About Window — Mind Melt Tab
![About window showing the Mind Melt brand overview with tabbed navigation](PLACEHOLDER_about_mind_melt_tab)

### About Window — Rogelio Tab
![About window showing the Made By Rogelio portfolio tab](PLACEHOLDER_about_rogelio_tab)

### Music Player Window
![Winamp-style music player with LCD display, scrolling marquee, visualizer, and playlist](PLACEHOLDER_music_player)

### File Manager Window
![Virtual file system browser navigating Documents, Pictures, Music, and Videos](PLACEHOLDER_file_manager)

### Settings Window
![Display Properties dialog with CRT monitor preview and wallpaper picker](PLACEHOLDER_settings_window)

### Paint Window
![In-browser drawing and paint application window](PLACEHOLDER_paint_window)

### Calculator Window
![Classic Windows-style calculator application window](PLACEHOLDER_calculator_window)

### Notepad Window
![Simple text editor Notepad window](PLACEHOLDER_notepad_window)

### Contact Window
![Contact and social media window styled to match the OS aesthetic](PLACEHOLDER_contact_window)

### Chatbox Window
![Chat interface window](PLACEHOLDER_chatbox_window)

### Recycle Bin Window
![Recycle Bin window themed to the OS aesthetic](PLACEHOLDER_recycle_bin_window)

### Power Options Window
![Power/shutdown options dialog](PLACEHOLDER_power_options_window)

---

## Design System

### Color Palette

:::palette
#cfe1d6 | Light Green | Soft mint used as a secondary accent or background tint for content areas
#2b7d4c | Green | Primary brand green for interactive elements and highlights
#123721 | Dark Green | Deep forest green for high-contrast text or heavy UI elements
#8db1d4 | Light Blue | Pale sky blue for secondary UI elements or icon backgrounds
#034b92 | Blue | Primary blue used for the start menu, taskbar, window header borders, and active states
#01305f | Dark Blue | Deep navy for borders, shadows, and the taskbar gradient base
#efb5ab | Light Red | Soft salmon used for warning-level or error-adjacent UI hints
#e03c20 | Red | Danger accent applied to the window close button and destructive action elements
#782010 | Dark Red | Deep crimson for hover/active states on red elements
#f9f6e7 | Light Cream | Warm off-white used for text-readable backgrounds and menu surfaces
#b69d20 | Dark Yellow | Muted gold used for decorative accent highlights
#ffd91b | Yellow | Bright highlight yellow used for selected state accents in the taskbar
#4863a0 | Desktop Blue | Default desktop background body color (medium slate blue)
#245ede | Taskbar Gradient Top | Top-end blue of the Windows XP glossy taskbar gradient
#082d6b | Taskbar Gradient Base | Darkest gradient stop anchoring the bottom of the taskbar
#44ba54 | Start Button Green Top | Top highlight of the classic Windows XP green start button gradient
#24752c | Start Button Green Base | Deep green anchoring the start button gradient base
#c0c0c0 | Window Grey | Classic Windows 95/98 silver grey for window backgrounds and dialog boxes
#0000a0 | Selection Blue | Standard Windows highlight blue for selected menu items
#efebde | Settings Beige | Luna-theme off-white for dialog and settings window backgrounds
#ece9d8 | Settings Beige Deep | Secondary beige variant used for the password prompt box background
#0055ea | Prompt Blue | Bright Luna blue for auth prompt borders and header banners
#316ac5 | List Selection Blue | Standard Windows list-view selection highlight blue
#3a6ea5 | Monitor Fallback Blue | Safe Windows XP fallback desktop color shown on monitor preview when no wallpaper is set
#2a6a2d | Unlocked Green | Muted success green used for unlocked/positive state footnote text in settings
:::

### Typography

:::typography
Libre Caslon Condensed | Serif / Condensed | Set as the root body font for body copy and general document text
Kosugi Maru | Sans-Serif / Rounded Japanese | Applied globally to all elements as the primary UI typeface via the "* " selector; loaded from a local TTF file
Instrument Serif | Serif / Display | Loaded as a local @font-face TTF; available for rich display headings or branded content
Tahoma | Sans-Serif / Humanist | Used for window title bars, address bars, menu bars, taskbar icons, system clock, and credits — the core OS chrome font
Franklin Gothic Medium | Sans-Serif / Gothic | Explicitly set on the Start button for the classic Windows XP "start" label
MS Sans Serif | Sans-Serif / System | Applied to start menu items to match the classic Windows 95/98 system font aesthetic
Courier New | Monospace / Slab Serif Mono | Used inside the music player's LCD display (time counter and marquee title) to mimic hardware digital readouts
:::

---

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Create React App (react-scripts 5), Vanilla CSS (modular per-component files) |
| Backend / DB | Firebase v12 (Firestore / Realtime DB) |
| Auth | Firebase Auth (via firebase package) |
| Hosting | Netlify (configured via "netlify.toml") |
| Key Libraries | "react - draggable" (window/icon drag-and-drop), "react - resizable" (window resize handles), "posthog - js" (product analytics), "cross - env" (CI build environment variable handling) |

---

## What I Built

- Designed and implemented the full Windows XP desktop OS simulation UI concept, including the wallpaper, icon grid, taskbar, and start menu
- Built a centralized application registry ("apps.config.js") mapping all app IDs, components, icons, and display names for dynamic rendering
- Implemented a universal "WindowFrame" component encapsulating all drag, resize, maximize, minimize, and z-index stacking logic to eliminate duplicated boilerplate across every window
- Implemented a "WindowContext" React Context providing "runningApps" state, and actions ("handleOpenWindow", "handleCloseWindow", "handleMinimizeWindow", "handleFocusWindow") to all descendants without prop drilling
- Created a "useWindowBounds" custom hook managing window position, size, and maximized state transitions
- Built the Winamp-inspired "MusicPlayerWindow" with an animated scrolling LCD marquee, CSS variable-based theme skinning, visualizer bars, timeline scrub, and volume slider
- Implemented "localStorage" persistence for both desktop icon positions and the custom wallpaper URL
- Built the Settings window with a realistic CRT monitor preview widget and a password-gated advanced section using an overlay pattern
- Implemented the desktop right-click context menu with a Display Settings shortcut
- Built the tabbed "About" window with a "MindMelt" brand content tab and a "MadeByRogelio" portfolio tab
- Added a 3-second preloader boot screen ("Preloader.js") to simulate an OS startup sequence
- Integrated Firebase backend and PostHog analytics
- Wired all 12+ app windows through the lazy-loaded "windowComponentsMap" for code-split on-demand loading via "React.Suspense"
- Configured "netlify.toml" for production hosting and wrote an ESLint-gated build script using "cross - env CI = false"
`;
