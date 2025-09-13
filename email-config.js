// EmailJS Configuration
// To set up EmailJS for sending emails from the contact form:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{from_mobile}} - Sender's mobile number with country code
//    - {{message}} - Message content
//    - {{to_email}} - Recipient email (ranjannikhil476@gmail.com)
//    - {{language}} - Current language (en/hi)
//    - {{timestamp}} - When the message was sent
//    - {{subject}} - Email subject

// 4. Replace the following placeholders in script.js:
//    - YOUR_PUBLIC_KEY with your EmailJS public key
//    - YOUR_SERVICE_ID with your EmailJS service ID
//    - YOUR_TEMPLATE_ID with your EmailJS template ID

// Email template example:
/*
Subject: {{subject}}

From: {{from_name}} <{{from_email}}>
Mobile: {{from_mobile}}
Language: {{language}}
Sent: {{timestamp}}

Message:
{{message}}

---
This message was sent from the AgriXvision contact form.
*/

// Configuration object
const EMAIL_CONFIG = {
    // Replace these with your actual EmailJS credentials
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
    SERVICE_ID: 'YOUR_SERVICE_ID', 
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
    
    // Email settings
    TO_EMAIL: 'ranjannikhil476@gmail.com',
    
    // Fallback settings
    FALLBACK_ENABLED: true,
    FALLBACK_METHOD: 'mailto' // or 'console' for testing
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMAIL_CONFIG;
} else {
    window.EMAIL_CONFIG = EMAIL_CONFIG;
}
