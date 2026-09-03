import { zeroTrustHomelab } from './blogPosts/zeroTrustHomelab';
import { powershellSecurityAutomation } from './blogPosts/powershellSecurityAutomation';
import { siemSplunkDetection } from './blogPosts/siemSplunkDetection';

export const blogPosts = [
  {
    id: 1,
    slug: 'powershell-security-automation',
    title: 'Automating Active Directory Health & Threat Audits with PowerShell',
    summary: 'A deep dive into building modular PowerShell scripts for automating daily AD health checks and detecting privilege escalation attempts.',
    date: 'August 28, 2026',
    author: 'Ivan Alier-Reyes',
    readTime: '6 min read',
    tags: ['PowerShell', 'Active Directory', 'Automation', 'Security'],
    imagePlaceholder: 'PLACEHOLDER_POWERSHELL_TERMINAL',
    content: powershellSecurityAutomation
  },
  {
    id: 2,
    slug: 'zero-trust-homelab',
    title: 'Building a Zero-Trust Architecture in a Hybrid Homelab Environment',
    summary: 'Moving beyond perimeter security: implementing micro-segmentation, identity-aware proxies, and secure remote access in a personal lab.',
    date: 'July 15, 2026',
    author: 'Ivan Alier-Reyes',
    readTime: '8 min read',
    tags: ['Zero Trust', 'Network Security', 'Homelab', 'Keycloak'],
    imagePlaceholder: 'PLACEHOLDER_NETWORK_TOPOLOGY',
    content: zeroTrustHomelab
  },
  {
    id: 3,
    slug: 'custom-splunk-rules',
    title: 'Custom Splunk Rule Engineering for Real-Time Incident Response',
    summary: 'Enhancing threat detection capabilities by writing and tuning custom SIEM correlation rules to catch lateral movement.',
    date: 'May 10, 2026',
    author: 'Ivan Alier-Reyes',
    readTime: '5 min read',
    tags: ['SIEM', 'Splunk', 'Threat Detection', 'Incident Response'],
    imagePlaceholder: 'PLACEHOLDER_SIEM_DASHBOARD',
    content: siemSplunkDetection
  }
];
