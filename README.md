# Will of Huitzil

A personal portfolio, project archive, and professional timeline for Ivan Alier-Reyes.

## Overview

More than just a standard resume, **Will of Huitzil** serves as an interactive HUD for exploring my career as an IT Technician and developer. This platform bridges enterprise IT infrastructure, software engineering, and hardware integration. It is wrapped in a unique Mesoamerican Solarpunk aesthetic that fuses organic, woodland motifs with sharp, holographic blue bio-terminal interfaces.

## Featured Operations & Projects

This portfolio highlights my hands-on work across multiple disciplines, from large-scale hardware deployments to custom IoT solutions:

*   **Verdant Odo**: A comprehensive fuel and efficiency tracking application built using React and Firebase, integrating an anomaly detection model powered by Edge Impulse.
*   **Autonomous Smart Planter Grid**: An offline, 3x3 smart planter concept utilizing TinyML and ESP32 microcontrollers to monitor and maintain plant health autonomously.
*   **Enterprise Infrastructure & Networking**: Documentation of large-scale operations, including a 224-machine computer refresh project and the reorganization and replacement of Cisco 2960 series network switches across 10 different facilities.

## Design System & Aesthetics

The visual language of **Will of Huitzil** is defined by a "Bio-Terminal" approach—a specific branch of Solarpunk that envisions high-technology harmoniously integrated with Mesoamerican botanical life. The interface is designed to feel less like a cold machine and more like a tool grown from the forest floor.

### Visual Philosophy
The project represents the intersection of the organic and the synthetic. By contrasting deep, "grounding" woodland tones with vibrant, holographic UI elements, the design mirrors the developer's journey: bridging traditional IT infrastructure (the roots) with cutting-edge software engineering (the holographic interface).

### Color Palette
The color system relies on a high-contrast relationship between the botanical background and the technological foreground:

*   **Botanical Base (The Forest Floor)**: 
    *   `--bg-deep`: `#0e160f` (Dense Forest Green) — Provides the "grounding" for the entire experience.
    *   `--bg-card`: `rgba(29, 43, 35, 0.95)` (Leaf Shade) — A semi-translucent, vibrant green used for glass containers.
*   **Technological HUD (The Hologram)**:
    *   `--accent-teal-bright`: `#40e0d0` (Holographic Teal) — Used for primary UI accents, active states, and system nodes.
    *   `--text-serif-cream`: `#f4ebd0` (Vintage Cream) — A warm, organic tone used for high-level serif headers.
    *   `--text-sans-slate`: `#a3b8b0` (Lichen Grey) — A muted, greenish-grey used for primary body text.

### Typography
A dual-typeface system creates a hierarchy between the "human/organic" and "machine/data" layers:
*   **Serif (The Organic Layer)**: `Playfair Display` is used for primary headers, lending an elegant, botanical-journal feel to the UI.
*   **Sans/Mono (The Data Layer)**: `Inter` provides modern clarity for body text, while `Fira Code` is utilized for technical labels, system IDs, and terminal-style readouts.

### CSS Architecture: Bio-Terminal Effects
To achieve the immersive Solarpunk look, the project employs a specific CSS strategy:

1.  **Frosted Glassmorphism**: UI panels use `backdrop-filter: blur(12px)` combined with semi-translucent backgrounds to create "glass slabs" that appear to float over the botanical background.
2.  **Geometric Chamfering**: Elements utilize `clip-path` with custom polygonal shapes rather than standard border-radii, mimicking the precision of both ancient stonework and modern holographic interfaces.
3.  **Holographic Glow**: System nodes and borders use subtle `box-shadow` and `text-shadow` properties to simulate the soft light emission of a low-power bio-holographic display.
4.  **Adaptive Command Center**: The layout transitions from a data-dense, multi-column desktop "HUD" to a streamlined, priority-focused mobile stack, preserving the terminal immersion across all devices.

## The Stack & Current Trajectory

Built with performance and clean component hierarchy in mind, utilizing:

*   **Framework**: React (Vite) for optimized build times.
*   **Styling**: CSS Modules paired with global design tokens to maintain strict control over the custom Solarpunk color palette.
*   **Iconography**: Lucide React for crisp, scalable vector icons.

Currently expanding my foundational infrastructure knowledge through coursework at Lake Tahoe Community College and active pursuit of CCNA, CompTIA Linux+, and AZ-800 certifications.

## Core Architecture

*   **Modular Data Architecture**: Project details, technical briefs, and mission objectives are decoupled into individual data files, allowing for seamless content updates without touching the core UI components.
*   **Dynamic, Deep-Dive Modals**: Custom-built, expandable modals that allow users to transition smoothly from high-level project summaries to granular technical breakdowns and enterprise impact metrics.
