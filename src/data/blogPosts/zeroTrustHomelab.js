export const zeroTrustHomelab = `
# Building a Zero-Trust Architecture in a Hybrid Homelab Environment

Implementing zero-trust principles isn't just for enterprise networks; it's a critical learning exercise for any cybersecurity professional. In this post, I detail how I designed and deployed a zero-trust architecture within my personal hybrid homelab.

## The Problem with Perimeter Security

Traditional network security relies heavily on the "castle and moat" approach. Once an attacker breaches the perimeter (the firewall), they often have unrestricted lateral movement. In a homelab exposing various services (Nextcloud, GitTea, Media Servers), a single compromised container could lead to a full network compromise.

## Core Principles Implemented

1.  **Verify Explicitly:** Every access request is fully authenticated, authorized, and encrypted before granting access.
2.  **Use Least Privilege Access:** Users and services only have access to the resources they absolutely need.
3.  **Assume Breach:** Micro-segmentation and end-to-end encryption are enforced, minimizing the blast radius of any potential compromise.

## Implementation Details

### 1. Identity and Access Management (IAM)

I deployed **Keycloak** as my central Identity Provider (IdP). All web-facing services are placed behind an authenticating reverse proxy (Traefik with ForwardAuth) that delegates authentication to Keycloak using OIDC. 

:::typography
Fira Code | Monospace | Used for code snippets and technical terms
:::

### 2. Network Segmentation & Micro-segmentation

Instead of a single flat network, the homelab is divided into distinct VLANs:
-   **VLAN 10 (Management):** Proxmox, Switch/Router interfaces.
-   **VLAN 20 (Internal Services):** Databases, internal APIs.
-   **VLAN 30 (DMZ / Public Facing):** Web servers, reverse proxy.
-   **VLAN 40 (IoT):** Untrusted devices.

Furthermore, within the Docker/Kubernetes environments, I utilize strict network policies and bridge networks to ensure containers can only communicate with their explicitly defined dependencies.

### 3. Secure Remote Access

Traditional VPNs provide broad network access. Instead, I implemented **Cloudflare Tunnels (cloudflared)** for exposing web services without opening inbound firewall ports. For administrative access, I use a combination of **WireGuard** (restricted to the Management VLAN) and **Teleport** for identity-aware SSH and database access.

## Verification and Auditing

To ensure the architecture functions as intended, I ship all authentication logs (Keycloak, Traefik, Teleport) to a central **Wazuh** SIEM instance.

\`\`\`bash
# Example Wazuh agent deployment snippet
wget https://packages.wazuh.com/4.x/apt/pool/main/w/wazuh-agent/wazuh-agent_4.3.10-1_amd64.deb
sudo dpkg -i wazuh-agent_4.3.10-1_amd64.deb
\`\`\`

## Conclusion

Building this zero-trust environment has significantly hardened my homelab and provided invaluable hands-on experience with enterprise-grade security concepts. It's a continuous process of monitoring, refining access controls, and patching vulnerabilities.
`;
