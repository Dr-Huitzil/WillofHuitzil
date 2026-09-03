export const siemSplunkDetection = `
# Custom Splunk Rule Engineering for Real-Time Incident Response

A Security Information and Event Management (SIEM) system is only as good as the rules configured within it. Out-of-the-box rules often generate excessive noise (false positives) or miss targeted attacks. In this post, I explore how I engineered custom Splunk correlation rules to enhance threat detection capabilities.

## The Objective

The goal was to detect potential lateral movement and privilege escalation attempts within our corporate network, specifically focusing on Pass-the-Hash (PtH) and unusual service creation.

## Engineering the Rules

### 1. Detecting Unusual Service Creation

Attackers often create services to establish persistence or execute payloads (e.g., PsExec). We need to monitor Windows Event ID 7045 (A service was installed in the system).

However, monitoring *all* service creations is too noisy. The custom rule filters out known, legitimate service installations based on the service name, image path, and the account installing it.

\`\`\`splunk
index=windows sourcetype=WinEventLog:System EventCode=7045
| regex Service_File_Name!="(?i)^(C:\\\\Windows\\\\System32\\\\svchost\\.exe|C:\\\\Program Files\\\\.*)"
| stats count min(_time) as firstTime max(_time) as lastTime by dest, Service_Name, Service_File_Name, user
| convert ctime(firstTime) ctime(lastTime)
| rename dest as Target_Host, user as Installed_By
\`\`\`

### 2. Monitoring for Pass-the-Hash (PtH) Indicators

PtH attacks often involve specific logon types (Type 9 - NewCredentials) combined with distinct logon processes (seclogo). Monitoring Event ID 4624 (Successful Logon) with these parameters provides a strong indicator of potential PtH activity.

\`\`\`splunk
index=windows sourcetype=WinEventLog:Security EventCode=4624 Logon_Type=9 Logon_Process=seclogo
| stats count min(_time) as firstTime max(_time) as lastTime by src_ip, dest, user, Logon_ID
| convert ctime(firstTime) ctime(lastTime)
\`\`\`

## Tuning and Validation

After implementing these rules, I utilized atomic red team tests to simulate the attacks and ensure the rules triggered correctly. I then spent a week monitoring the alerts, tuning the exclusion lists in the first rule to filter out authorized administrative tools that behaved similarly to malware.

## Conclusion

Custom rule engineering is a continuous cycle of analysis, implementation, and tuning. By moving beyond default rulesets, we significantly improved our mean time to detect (MTTD) sophisticated threats.
`;
