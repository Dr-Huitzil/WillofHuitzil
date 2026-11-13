export const roboticsDetails = `
# FRC Team 7777 Autonomous Robotics Platform

## What is it?

The full autonomous robotics codebase and embedded subsystem control suite for **FIRST Robotics Competition (FRC) Team 7777**, built on Java and the WPILib robotics framework. 

This project represents the genesis of a **decade-long systems builder journey**: programming an industrial competition robot solo at age 16 and maintaining, refining, and tuning its autonomous and teleoperated subsystems across three full competition seasons.

---

## Technical Architecture

\`\`\`text
Robotics Subsystem Control (FRC Team 7777)
├── Core Robot Architecture (TimedRobot / Subsystem-Command Pattern)
├── Autonomous Pathing & State Machines (Encoder Odometry + Gyro Angle Correction)
├── Closed-Loop PID Velocity Control (CAN Talon SRX / Spark MAX Motor Controllers)
├── Pneumatics Control Module (Double Solenoid Intake & Shifter Actuators)
└── Real-Time Telemetry & Driver Station Teleoperated Mapping
\`\`\`

---

## Core Engineering Highlights

### 1. Autonomous Pathing & Gyro Alignment
- Developed deterministic autonomous navigation routines using wheel encoders and NavX micro-gyroscope feedback.
- Implemented real-time heading correction algorithms to compensate for mechanical wheel slip and drift during rapid field sprints.

### 2. Closed-Loop PID Velocity & Position Control
- Tuned proportional-integral-derivative (PID) feedback loops on high-speed brushless motors to achieve millisecond-level target RPM stabilization on high-torque shooter and elevator mechanisms.
- Engineered motion profiling algorithms to prevent mechanical shock and current spikes during abrupt acceleration.

### 3. Subsystem Command Pattern
- Structured code utilizing the modular Command-Based framework: cleanly decoupling drivetrain kinematics, pneumatic actuators, intake arms, and sensor listeners into independent, testable subsystems.
- Implemented software safety lockouts to prevent simultaneous actuation of conflicting pneumatic mechanisms.

### 4. Hardware Diagnostics & Field Triage
- Diagnosed CAN bus communication drops, encoder noise, and electrical brownouts under intense competition conditions.
- Iterated hardware wiring layouts and sensor placements alongside software deadband calibration to optimize driver controllability.

---

## Long-Term Impact

Maintaining this platform independently taught the fundamental systems principles that now inform my approach to enterprise IT, Linux systems, and cybersecurity:
- **Resilience under failure**: Mechanical parts break; software must fail gracefully with explicit safety defaults.
- **Signal vs. Noise**: Analog and digital sensor inputs require filtering and calibration before triggering mission-critical decisions.
- **Deep Hardware-Software Integration**: Code is only as reliable as the physical signals, power rails, and buses running beneath it.

---

## The Tech Stack

| Domain | Technology |
|---|---|
| **Programming Language** | Java (JDK 11 / WPILib Suite) |
| **Robotics Hardware** | NI roboRIO, CAN Talon SRX, Spark MAX, NavX-MXP IMU |
| **Control Theory** | PID Feedback Loops, Motion Profiling, Deadband Calibration |
| **Subsystems** | Pneumatic Control Module (PCM), Optical Encoders, Dual-Motor Gearboxes |
`;
