# API Provider Checklist

## ✅ Requirements for Contact Form API Endpoint

This checklist is for the API developer/provider to ensure compatibility with the V Films contact form.

---

## 📍 Endpoint Requirements

### Basic Information
- [ ] API endpoint is accessible via HTTPS
- [ ] Endpoint accepts POST requests
- [ ] Endpoint URL is documented and shared
- [ ] API is production-ready and stable

**Expected Endpoint Format:**
```
POST https://your-domain.com/api/contact
```

---

## 📥 Request Requirements

### Headers
- [ ] Accepts `Content-Type: application/json`
- [ ] CORS headers configured (see CORS section below)

### Request Body
The API must accept JSON with these exact field names:

```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (required)",
  "message": "string (required)"
}
```

#### Field Specifications:
- [ ] `name` field is accepted (string type)
- [ ] `email` field is accepted (string type)
- [ ] `phone` field is accepted (string type)
- [ ] `message` field is accepted (string type)
- [ ] All fields are treated as required
- [ ] Extra validation is optional but recommended

---

## 📤 Response Requirements

### Success Response (HTTP 200)
- [ ] Returns JSON response
- [ ] Contains success indicator
- [ ] Contains user-friendly message

**Expected Format:**
```json
{
  "success": true,
  "message": "Thank you for your message!"
}
```

### Error Response (HTTP 4xx/5xx)
- [ ] Returns JSON response
- [ ] Contains error indicator
- [ ] Contains user-friendly error message

**Expected Format:**
```json
{
  "success": false,
  "message": "Error description here"
}
```

---

## 🌐 CORS Configuration

### Required CORS Headers
- [ ] `Access-Control-Allow-Origin` is configured
- [ ] `Access-Control-Allow-Methods` includes POST
- [ ] `Access-Control-Allow-Headers` includes Content-Type

**Frontend Domain:** (Update this with your actual frontend domain)
```
https://your-frontend-domain.com
```

### Example CORS Configuration (Node.js/Express)
```javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://your-frontend-domain.com');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
```

---

## ✅ Validation Requirements

### Recommended Server-Side Validation
- [ ] Name: minimum 2 characters
- [ ] Email: valid email format
- [ ] Phone: minimum 10 digits
- [ ] Message: minimum 10 characters
- [ ] All fields are non-empty
- [ ] Sanitize inputs to prevent XSS

---

## 🔒 Security Requirements

### Essential Security Measures
- [ ] HTTPS only (no HTTP)
- [ ] Input sanitization implemented
- [ ] SQL injection prevention
- [ ] XSS attack prevention
- [ ] Rate limiting configured
- [ ] Request size limits set

### Recommended Security Measures
- [ ] reCAPTCHA or similar anti-spam
- [ ] Email verification
- [ ] IP address logging
- [ ] Request throttling per IP
- [ ] Honeypot field detection

---

## 📧 Email/Notification Requirements

### What Should Happen After Submission
- [ ] Email sent to company address
- [ ] Auto-reply sent to user (optional)
- [ ] Data saved to database (optional)
- [ ] Admin notification sent (optional)

### Email Content Should Include
- [ ] User's name
- [ ] User's email
- [ ] User's phone
- [ ] User's message
- [ ] Timestamp
- [ ] Source/form identifier

---

## 🧪 Testing Checklist

### Before Providing Endpoint to Frontend Team
- [ ] Test with curl/Postman
- [ ] Verify JSON response format
- [ ] Test CORS from different origin
- [ ] Test with valid data
- [ ] Test with invalid data
- [ ] Test with missing fields
- [ ] Test rate limiting
- [ ] Test error scenarios

### Test Command (curl)
```bash
curl -X POST https://your-api-endpoint.com/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://your-frontend-domain.com" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "message": "This is a test message"
  }'
```

**Expected Response:**
```json
{"success": true, "message": "Thank you for your message!"}
```

---

## 📊 Monitoring & Logging

### Recommended Logging
- [ ] Log all submissions (success and failure)
- [ ] Log timestamp
- [ ] Log IP address
- [ ] Log any errors
- [ ] Set up error alerting

### Monitoring Metrics
- [ ] Success rate
- [ ] Response time
- [ ] Error rate
- [ ] Submission volume

---

## 🚀 Performance Requirements

### Response Time
- [ ] API responds within 2 seconds
- [ ] Database queries optimized
- [ ] Email sending is async (non-blocking)

### Scalability
- [ ] Can handle 100+ requests per hour
- [ ] Can handle traffic spikes
- [ ] Has retry logic for failed operations

---

## 📋 API Documentation Checklist

### Provide to Frontend Team
- [ ] API endpoint URL
- [ ] Request format example
- [ ] Response format example
- [ ] Error codes and messages
- [ ] Rate limiting information
- [ ] Testing credentials (if needed)
- [ ] Support contact

---

## ✅ Final Verification

### Before Going Live
- [ ] All checkboxes above are completed
- [ ] API is deployed to production
- [ ] Endpoint URL shared with frontend team
- [ ] Frontend team has tested successfully
- [ ] Error monitoring is active
- [ ] Backup plan exists for failures
- [ ] Documentation is complete

---

## 📞 Contact Information

**API Provider:**
- Name: _________________
- Email: _________________
- Phone: _________________

**Frontend Team:**
- Name: _________________
- Email: _________________
- Phone: _________________

**Go-Live Date:** ____ / ____ / ________

---

## 🎯 Quick Reference

### Minimum Requirements Summary
✅ **Endpoint:** POST to HTTPS URL
✅ **Request:** JSON with name, email, phone, message
✅ **Response:** JSON with success boolean and message
✅ **CORS:** Configured for frontend domain
✅ **Security:** HTTPS, input sanitization, rate limiting
✅ **Testing:** Verified with curl/Postman

---

**Questions?** Contact the frontend development team or refer to `API_INTEGRATION.md`

*This checklist ensures smooth integration between frontend and backend systems.*
