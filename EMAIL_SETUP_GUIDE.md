# Email Setup Guide for AgriXvision Contact Form

This guide explains how to set up email functionality for the contact form to send messages to `ranjannikhil476@gmail.com` for both Hindi and English users.

## Overview

The contact form now supports two methods for sending emails:
1. **EmailJS** (Recommended) - Sends emails directly from the website
2. **Fallback Method** - Opens user's default email client with pre-filled content

## Method 1: EmailJS Setup (Recommended)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your email provider
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
{{subject}}
```

**Content:**
```
From: {{from_name}} <{{from_email}}>
Language: {{language}}
Sent: {{timestamp}}

Message:
{{message}}

---
This message was sent from the AgriXvision contact form.
```

4. Save the template and note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

### Step 5: Update Configuration
1. Open `email-config.js`
2. Replace the placeholder values:
   ```javascript
   const EMAIL_CONFIG = {
       PUBLIC_KEY: 'your_actual_public_key_here',
       SERVICE_ID: 'your_actual_service_id_here', 
       TEMPLATE_ID: 'your_actual_template_id_here',
       TO_EMAIL: 'ranjannikhil476@gmail.com',
       FALLBACK_ENABLED: true,
       FALLBACK_METHOD: 'mailto'
   };
   ```

## Method 2: Fallback Method (No Setup Required)

If EmailJS is not configured, the form will automatically use the fallback method:
- Opens the user's default email client
- Pre-fills the recipient as `ranjannikhil476@gmail.com`
- Includes all form data in the email body
- Works in both Hindi and English

## Features

### Multilingual Support
- **English**: Standard English email format
- **Hindi**: Hindi email format with Devanagari script
- Language detection based on current website language setting

### Email Content
Both methods include:
- Sender's name and email
- Message content
- Timestamp
- Language indicator
- Source identification (AgriXvision contact form)

### User Experience
- Loading state during email sending
- Success/error notifications
- Form validation
- Responsive design
- Accessibility features

## Testing

### Test EmailJS Method
1. Configure EmailJS as described above
2. Fill out the contact form
3. Click "Send Message"
4. Check `ranjannikhil476@gmail.com` for the email

### Test Fallback Method
1. Comment out or remove EmailJS configuration
2. Fill out the contact form
3. Click "Send Message"
4. Verify that your default email client opens with pre-filled content

## Troubleshooting

### EmailJS Not Working
- Verify all configuration values are correct
- Check browser console for error messages
- Ensure EmailJS service is active
- Test with a simple template first

### Fallback Method Not Working
- Check if pop-ups are blocked
- Verify email client is installed
- Try different browsers

### No Emails Received
- Check spam folder
- Verify email address is correct
- Test with a different email address
- Check EmailJS service logs

## Security Notes

- EmailJS handles email sending securely
- No sensitive data is stored on the client
- Form validation prevents spam
- Rate limiting is handled by EmailJS

## Support

For issues with:
- **EmailJS**: Contact EmailJS support
- **Website functionality**: Check browser console for errors
- **Email delivery**: Verify EmailJS configuration and check spam folder

## File Structure

```
├── index.html              # Main HTML file
├── script.js               # Main JavaScript file
├── styles.css              # CSS styles
├── email-config.js         # EmailJS configuration
└── EMAIL_SETUP_GUIDE.md    # This guide
```

## Configuration Summary

After setup, your `email-config.js` should look like:

```javascript
const EMAIL_CONFIG = {
    PUBLIC_KEY: 'user_xxxxxxxxxxxxxxxxx',  // Your EmailJS public key
    SERVICE_ID: 'service_xxxxxxxxx',       // Your EmailJS service ID
    TEMPLATE_ID: 'template_xxxxxxxxx',     // Your EmailJS template ID
    TO_EMAIL: 'ranjannikhil476@gmail.com', // Target email address
    FALLBACK_ENABLED: true,                // Enable fallback method
    FALLBACK_METHOD: 'mailto'              // Fallback method type
};
```

The contact form will now successfully send emails to `ranjannikhil476@gmail.com` for both Hindi and English users!
