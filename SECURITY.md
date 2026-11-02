# Security Policy

## Supported Versions

| Version | Supported |
| :--- | :--- |
| main branch (Chain 997) | ✅ Yes |
| gh-pages / latest deployment | ✅ Yes |
| Versions < v1.0 | ❌ No |

## Reporting a Vulnerability

**Please DO NOT open a public GitHub issue for security bugs.**

QTrust is a quantum-safe wallet (Dilithium3 + Kyber768). Private keys are generated client-side and never sent to our servers or GitHub.

To report:

**Email:** your-email@example.com  
**Subject:** [SECURITY] QTrust Wallet - Vulnerability

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact (key leak, transaction spoofing, XSS)
- Suggested fix if you have one

We will acknowledge within 48 hours and provide a fix timeline within 7 days.

### What to Report:
- Private key / seed phrase leak in localStorage, console, or logs
- Transaction tampering on Chain ID 997
- XSS or CSP bypass that could steal PQC keys
- Service worker or manifest hijacking
- Phishing site cloning samdeep11.github.io/qtrust-wallet

### What NOT to Report:
- Repository is public (this is intentional for transparency)
- Demo balance showing 1000 PQC (this is testnet genesis)
- Missing 2FA on the user's own GitHub account

## Disclosure Policy

We follow Coordinated Disclosure. Please give us 90 days to fix before making it public. We will credit you in the release notes unless you prefer to stay anonymous.

## Security Best Practices for Users

1. Always verify the URL: `https://samdeep11.github.io/qtrust-wallet/`
2. Install as PWA: Chrome > 3 dots > Install app (don't use in browser tab)
3. Never share your 12-word seed phrase or private key
4. Source code is public for audit

## Quantum Security

- Signatures: Dilithium3
- Key Encapsulation: Kyber768
- Chain ID: 997 (QTrust Chain)

If you find a quantum implementation flaw, please mark it as CRITICAL.

## Contact
Maintainer: @samdeep11
Security Email: Replace with your email

Thank you for keeping QTrust quantum-safe!
