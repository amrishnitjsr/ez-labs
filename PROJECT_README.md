# V Films - Single Page Web Application

A responsive single-page web application built with React.js and Vite, featuring a complete home page with contact form integration.

## 🚀 Features

- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Contact Form with Validation** - Complete form validation and API integration
- **Smooth Navigation** - Smooth scrolling between sections
- **Reusable Components** - Well-structured React components

## 📋 Sections

1. **Hero Section** - Welcome section with logo, tagline, and company description
2. **About Team** - Team overview with storytelling approach
3. **Contact Form** - Fully functional contact form with validation
4. **Footer** - Complete footer with links and social media

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS (component-scoped)
- **Form Management**: React Hooks (useState)
- **Fonts**: Google Fonts (Playfair Display, Lato, Dancing Script)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ez-labs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🔌 API Integration

### Contact Form Configuration

The contact form is located in `src/components/ContactForm.tsx`. To integrate with your API:

1. **Open** `src/components/ContactForm.tsx`
2. **Find** the API endpoint configuration (line ~98):
```typescript
const API_ENDPOINT = 'https://your-api-endpoint.com/contact';
```

3. **Replace** with your actual API endpoint:
```typescript
const API_ENDPOINT = 'https://api.yourcompany.com/v1/contact';
```

### API Request Format

The form sends a POST request with the following JSON structure:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1 (555) 123-4567",
  "message": "Your message here..."
}
```

### Expected API Response

Your API should return a JSON response:

**Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

**Error Response (4xx/5xx):**
```json
{
  "success": false,
  "message": "Error message"
}
```

### Form Validation

The form includes built-in validation for:

- ✅ **Name**: Required, minimum 2 characters
- ✅ **Email**: Required, valid email format
- ✅ **Phone**: Required, minimum 10 digits
- ✅ **Message**: Required, minimum 10 characters

## 📱 Responsive Breakpoints

- **Desktop**: 1920px max-width
- **Laptop**: 1200px and below
- **Tablet**: 968px and below
- **Mobile**: 768px and below
- **Small Mobile**: 480px and below

## 🎨 Design System

### Colors
- **Primary Background**: `#F5E6D3` (Warm Beige)
- **Primary Text**: `#2C3E50` (Dark Slate Blue)
- **Accent**: `#D84315` (Burnt Orange)
- **Secondary Text**: `#4A4A4A` (Medium Gray)
- **White**: `#FFFFFF`

### Typography
- **Display Font**: Playfair Display (serif)
- **Body Font**: Lato (sans-serif)
- **Script Font**: Dancing Script (cursive)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Navbar.css
│   ├── HeroSection.tsx      # Hero section with logo
│   ├── HeroSection.css
│   ├── AboutTeam.tsx        # Team section
│   ├── AboutTeam.css
│   ├── ContactForm.tsx      # Contact form with API integration
│   ├── ContactForm.css
│   ├── Footer.tsx           # Footer component
│   └── Footer.css
├── App.tsx                  # Main app component
├── App.css                  # Global app styles
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## 🔧 Customization

### Updating Contact Information

Edit `src/components/ContactForm.tsx` to update:
- Email address
- Phone number
- Location

### Updating Footer Links

Edit `src/components/Footer.tsx` to update:
- Social media links
- Quick links
- Copyright information

### Updating Team Content

Edit `src/components/AboutTeam.tsx` to update:
- Team description
- Badge numbers
- Call-to-action text

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The build files will be in the `dist/` directory.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📝 Notes

- All components are fully responsive
- Form validation is client-side with proper error messages
- Smooth scrolling is enabled for navigation
- All images use proper alt text for accessibility
- CSS uses BEM-like naming convention for clarity

## 🤝 Support

For issues or questions, please contact the development team.

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ using React + Vite**
