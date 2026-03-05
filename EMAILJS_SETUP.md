# EmailJS Setup Guide

Para gumana yung contact form at ma-receive mo sa Gmail yung messages, follow these steps:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** at gumawa ng free account
3. Verify yung email mo

## 2. Add Email Service (Gmail)

1. Sa dashboard, punta sa **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** at i-authorize ang Gmail mo
5. Copy yung **Service ID** (example: `service_abc123`)

## 3. Create Email Template

1. Punta sa **"Email Templates"**
2. Click **"Create New Template"**
3. I-setup ang template:

### Template Content:
```
Subject: New Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

### Template Variables:
- `{{from_name}}` - Name ng sender
- `{{from_email}}` - Email ng sender
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Florence)

4. Click **"Save"**
5. Copy yung **Template ID** (example: `template_xyz789`)

## 4. Get Public Key

1. Punta sa **"Account"** → **"General"**
2. Hanapin yung **"Public Key"** (tinatawag din na API Key)
3. Copy mo (example: `AbCdEfGhIjKlMnOp`)

## 5. Update Contact.tsx

Open [src/components/Contact.tsx](src/components/Contact.tsx) at i-replace ang placeholder values:

```tsx
// Line ~58-60
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### Example:
```tsx
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'AbCdEfGhIjKlMnOp';
```

## 6. Test the Contact Form

1. Run ang dev server: `npm run dev`
2. Punta sa Contact section
3. Fill out the form at send test message
4. Check mo yung Gmail inbox mo!

## Free Tier Limits

EmailJS free account:
- **200 emails/month**
- No credit card required
- Perfect for portfolio websites

## Troubleshooting

### Email not received?
- Check yung EmailJS dashboard logs
- Verify na tama yung Service ID, Template ID, at Public Key
- Check spam folder
- Make sure na verified yung EmailJS account mo

### CORS errors?
- I-deploy muna sa Netlify/Vercel
- Or add sa EmailJS dashboard yung `http://localhost:5173` sa allowed origins

## Security Note

Okay lang i-expose yung Public Key sa frontend code - yan yung purpose niya! Pero wag mo i-share yung **Private Key** (sa Account settings).

---

Questions? Check the [EmailJS Docs](https://www.emailjs.com/docs/)
