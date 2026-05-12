export const clinicaDeSaludLong = `
### OPERATIONAL_CHALLENGE
CSVS operates across multiple distributed clinical environments, requiring high-availability systems for patient care. The primary challenge was the slow, manual provisioning of new medical workstations and the lack of centralized endpoint management, which delayed clinical operations.

### TECHNICAL_STRATEGY
I orchestrated a complete overhaul of the deployment pipeline:
- **Imaging Automation**: Implemented SmartDeploy to create hardware-independent images, reducing workstation setup time from 4 hours to 45 minutes.
- **RMM Integration**: Leveraged NinjaOne for real-time monitoring and patch management across all clinical nodes.
- **Scripted Provisioning**: Developed a library of PowerShell scripts to automate software installations and security configurations post-imaging.

### MISSION_OUTCOME
Achieved a 75% reduction in deployment lead times and established a 99.9% success rate for monthly security patching across the entire organization.
`;
