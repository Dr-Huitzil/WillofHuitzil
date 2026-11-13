export const roboticsDetails = `
# FRC Team 7777 Autonomous Robotics Platform

## What is it?

The complete multi-season autonomous robotics codebase and embedded subsystem control suite for **FIRST Robotics Competition (FRC) Team 7777**, built on Java and the WPILib robotics framework. 

This project documents a **decade-long systems builder journey**: programming an industrial competition robot solo at age 16 and maintaining, evolving, and architecting its software and sensor subsystems across four distinct competition seasons (**Robsue 1 → Robsue Act II → Robsue Act III → Robsue Act IV**).

---

## The 4-Year Evolution of Robsue (2018 – 2022)

\`\`\`text
Robotics Codebase Progression (Team 7777)
├── Robsue 1      (Act I   - 2018-19): Bare chassis genesis, differential drive, manual OI controls
├── Robsue Act II (Act II  - 2019-20): Command-Based modularity, pneumatic PCM solenoids, safety lockouts
├── Robsue Act III(Act III - 2020-21): Sensor odometry, NavX gyro heading correction, autonomous paths
└── Robsue Act IV (Act IV  - 2021-22): CAN bus Talon SRX, closed-loop PID velocity tuning, team handoff
\`\`\`

### 1. Robsue 1 — Genesis & Foundational Drivetrain (2018 – 2019)
- Started from scratch at age 16 with bare aluminum, motor controllers, and no existing team software foundation.
- Engineered base differential drivetrain kinematic calculations, Operator Interface (OI) joystick mapping, manual intake rollers, and elevator limit-switch safety logic using the WPILib TimedRobot architecture.

### 2. Robsue Act II — Modularity & Pneumatics Integration (2019 – 2020)
- Refactored the entire codebase into the **Command-Based Architecture**, cleanly decoupling drivetrain kinematics from actuator commands.
- Integrated the Pneumatics Control Module (PCM) to drive high-pressure double-solenoid intake and transmission shifters, implementing software interlocks to prevent mechanical jams during rapid teleoperated cycles.

### 3. Robsue Act III — Sensor Odometry & Autonomous Navigation (2020 – 2021)
- Implemented real-time sensor feedback combining high-resolution optical wheel encoders with a NavX-MXP micro-gyroscope.
- Developed deterministic autonomous navigation routines with continuous heading angle correction, compensating for wheel slip, carpet friction, and physical chassis drift during full-speed field runs.

### 4. Robsue Act IV — Closed-Loop PID Velocity & System Maturity (2021 – 2022)
- Upgraded the electrical communication spine to an integrated CAN bus architecture utilizing Talon SRX and REV Spark MAX motor controllers.
- Tuned closed-loop Proportional-Integral-Derivative (PID) velocity loops to achieve millisecond-level target RPM stabilization on high-speed flywheels (±15 RPM error margin).
- Structured documentation and clean class abstractions to ensure seamless knowledge transfer and onboarding for the next generation of student programmers.

---

## Long-Term Systems Engineering Principles

Maintaining and evolving Robsue across four competition seasons established the core engineering intuition that now informs my approach to enterprise IT, Linux systems, and cybersecurity:
- **Resilience Under Real-World Stress**: Hardware degrades and components fail; software must detect anomalies and fail gracefully with explicit safety defaults.
- **Signal vs. Noise in Closed Loops**: Raw sensor data requires filtering, deadband calibration, and debouncing before executing autonomous decisions.
- **Deep Hardware-Software Integration**: High-level code is only as reliable as the physical power distribution, CAN bus integrity, and sensor wiring beneath it.

---

## The Tech Stack

| Domain | Technology |
|---|---|
| **Programming Language** | Java (JDK 11 / WPILib Framework) |
| **Robotics Hardware** | NI roboRIO, CAN Talon SRX, REV Spark MAX, NavX-MXP IMU |
| **Control Theory** | Closed-Loop PID Velocity Loops, Motion Profiling, Gyro Odometry |
| **Pneumatics & Sensors** | Pneumatics Control Module (PCM), Optical Encoders, Limit Switches |
| **Code Evolution** | 4 Sequential Build Seasons (Robsue 1 → Robsue Act IV) |
`;
