# API Integration Examples

## Expected API Endpoint

**URL:** `POST https://your-api-endpoint.com/contact`

**Headers:**
```
Content-Type: application/json
```

## Request Format

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1 (555) 123-4567",
  "message": "I would like to discuss a film project for my company..."
}
```

## Expected Response Format

### Success Response (200 OK)

```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you soon!",
  "data": {
    "id": "msg_12345",
    "timestamp": "2024-11-09T10:30:00Z"
  }
}
```

### Error Response (400 Bad Request)

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Invalid email format"
  }
}
```

### Server Error (500 Internal Server Error)

```json
{
  "success": false,
  "message": "Internal server error. Please try again later."
}
```

## Testing with cURL

### Test Your API Endpoint

```bash
curl -X POST https://your-api-endpoint.com/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "message": "This is a test message"
  }'
```

### Expected Output

```json
{"success": true, "message": "Form submitted successfully"}
```

## Testing with Postman

1. **Method:** POST
2. **URL:** `https://your-api-endpoint.com/contact`
3. **Headers:** 
   - `Content-Type: application/json`
4. **Body (raw JSON):**
   ```json
   {
     "name": "Jane Smith",
     "email": "jane.smith@example.com",
     "phone": "+1 (555) 987-6543",
     "message": "Looking forward to working together!"
   }
   ```

## CORS Configuration

Your API must allow CORS requests from your frontend domain:

### Example CORS Headers (Node.js/Express)

```javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://your-frontend-domain.com');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
```

### Example CORS Headers (Python/Flask)

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["https://your-frontend-domain.com"])
```

## Validation Rules

The frontend validates:

| Field | Rule | Example |
|-------|------|---------|
| Name | Required, min 2 chars | "John Doe" |
| Email | Required, valid email | "john@example.com" |
| Phone | Required, min 10 digits | "+1 (555) 123-4567" |
| Message | Required, min 10 chars | "Hello, I need help..." |

Your API should implement the same or stricter validation.

## Sample API Implementation (Node.js/Express)

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Process the form (e.g., send email, save to database)
    // ... your business logic here ...

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your message!'
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});
```

## Sample API Implementation (Python/Flask)

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone')
        message = data.get('message')
        
        # Validate input
        if not all([name, email, phone, message]):
            return jsonify({
                'success': False,
                'message': 'All fields are required'
            }), 400
        
        # Process the form
        # ... your business logic here ...
        
        return jsonify({
            'success': True,
            'message': 'Thank you for your message!'
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Internal server error'
        }), 500

if __name__ == '__main__':
    app.run(port=3000)
```

## Security Considerations

1. **Rate Limiting:** Implement rate limiting to prevent spam
2. **Input Sanitization:** Sanitize all inputs to prevent XSS/SQL injection
3. **HTTPS Only:** Always use HTTPS in production
4. **Email Validation:** Verify email addresses server-side
5. **CAPTCHA:** Consider adding reCAPTCHA for spam prevention

## Monitoring & Logging

Log the following information for each submission:
- Timestamp
- Success/failure status
- Client IP address
- Error messages (if any)

## Next Steps

1. ✅ Implement your API endpoint
2. ✅ Test with cURL or Postman
3. ✅ Update `src/config/api.config.ts` with your endpoint
4. ✅ Test from the web form
5. ✅ Monitor for errors and refine

---

**Need help?** Check the main `PROJECT_README.md` for more details.
