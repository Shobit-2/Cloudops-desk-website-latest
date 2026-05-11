# SEO DNS Setup Guide — CloudOpsDesk

## 1. SPF Record (Sender Policy Framework)

SPF prevents email spoofing by declaring which servers can send emails on behalf of your domain.

### Recommended SPF Record

Add this as a **TXT** record on your domain DNS:

```
Host: @
Type: TXT
Value: v=spf1 include:_spf.google.com include:mail.zoho.in ~all
```

- `include:_spf.google.com` — allows Google Workspace to send emails
- `include:mail.zoho.in` — allows Zoho Mail (if used)
- Adjust `include:` entries to match your email provider
- `~all` = soft fail for unauthorized senders (recommended)
- `-all` = hard fail (stricter, use once fully validated)

### Verification

```bash
nslookup -type=txt cloudopsdesk.in
# or
dig txt cloudopsdesk.in
```

---

## 2. DMARC Record (Domain-based Message Authentication)

DMARC tells receiving servers what to do with emails that fail SPF/DKIM checks.

### Recommended DMARC Record

```
Host: _dmarc
Type: TXT
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@cloudopsdesk.in; ruf=mailto:dmarc-reports@cloudopsdesk.in; pct=100; adkim=r; aspf=r
```

### DMARC Policy Options

| Policy | Meaning |
|--------|---------|
| `p=none` | Monitor only (start here) |
| `p=quarantine` | Send suspicious emails to spam |
| `p=reject` | Reject unauthorized emails |

### Recommended Rollout

1. Start with `p=none` to monitor
2. Review DMARC reports for 2-4 weeks
3. Move to `p=quarantine`
4. After confirming no legitimate emails are blocked, move to `p=reject`

### Verification

```bash
nslookup -type=txt _dmarc.cloudopsdesk.in
```

---

## 3. DKIM Record (DomainKeys Identified Mail)

DKIM adds a digital signature to your outgoing emails.

- **Google Workspace**: Admin Console → Apps → Google Workspace → Gmail → Authenticate email → Generate DKIM key
- **Zoho Mail**: Mail Admin Console → Domain → Email Authentication → DKIM

Add the generated key as a TXT record. The host will be something like:

```
Host: google._domainkey
Type: TXT
Value: v=DKIM1; k=rsa; p=<your-public-key>
```

---

## 4. Additional Recommended DNS Records

### MX Records (if using Google Workspace)

| Priority | Host | Value |
|----------|------|-------|
| 1 | @ | aspmx.l.google.com |
| 5 | @ | alt1.aspmx.l.google.com |
| 5 | @ | alt2.aspmx.l.google.com |
| 10 | @ | alt3.aspmx.l.google.com |
| 10 | @ | alt4.aspmx.l.google.com |

### Domain Verification Records

- **Google Search Console**: Add TXT record with the verification code from GSC
- **Bing Webmaster Tools**: Add CNAME or TXT record from Bing

---

## 5. SSL/TLS

Ensure your domain has an active SSL certificate:
- If using Cloudflare: Enable "Full (strict)" SSL mode
- If using AWS: Use ACM (AWS Certificate Manager) with ALB/CloudFront
- Always redirect HTTP → HTTPS

---

## 6. Verification Tools

- [Google Admin Toolbox - Check MX](https://toolbox.googleapps.com/apps/checkmx/)
- [MXToolbox SPF Check](https://mxtoolbox.com/spf.aspx)
- [MXToolbox DMARC Check](https://mxtoolbox.com/dmarc.aspx)
- [DKIM Validator](https://dkimvalidator.com/)
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)
