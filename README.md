# Lavanya Naga Sri - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a complete email notification system.

## 🚀 Features

- **Modern Design**: Clean sidebar navigation with floating card design
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Responsive**: Mobile-first design that works on all devices
- **Email Integration**: Contact form with Nodemailer and OAuth authentication
- **React Router**: Multi-page navigation with dedicated routes
- **TypeScript**: Full type safety throughout the application

## 📧 Email Notification System

The portfolio includes a complete email notification system that sends contact form submissions directly to your inbox:

### Features:
- **Secure OAuth Authentication**: Uses Google OAuth2 for secure email sending
- **Professional Email Templates**: HTML-formatted emails with contact details
- **Rate Limiting**: Prevents spam with IP-based rate limiting
- **Input Validation**: Server-side validation for all form fields
- **Error Handling**: Comprehensive error handling and user feedback

### Setup Instructions:

1. **Google OAuth Setup**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Gmail API
   - Create OAuth 2.0 credentials
   - Add `https://developers.google.com/oauthplayground` to authorized redirect URIs

2. **Get Refresh Token**:
   - Visit [OAuth 2.0 Playground](https://developers.google.com/oauthplayground)
   - Click settings gear → Use your own OAuth credentials
   - Enter your Client ID and Client Secret
   - Select Gmail API v1 → `https://www.googleapis.com/auth/gmail.send`
   - Authorize and get refresh token

3. **Environment Variables**:
   ```bash
   cp .env.example .env
   ```
   Fill in your credentials:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_CLIENT_ID=your-google-client-id
   GMAIL_CLIENT_SECRET=your-google-client-secret
   GMAIL_REFRESH_TOKEN=your-refresh-token
   RECIPIENT_EMAIL=lavanyakoppisetti02@gmail.com
   PORT=3001
   ```

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Fill in your email credentials
   ```

4. **Development**:
   ```bash
   # Run frontend only
   npm run dev
   
   # Run backend only
   npm run dev:server
   
   # Run both frontend and backend
   npm run dev:full
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout wrapper
│   └── Sidebar.tsx         # Navigation sidebar
├── pages/
│   ├── About.tsx           # About page
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Work experience
│   ├── Skills.tsx          # Technical skills
│   └── Contact.tsx         # Contact form
├── hooks/
│   └── useTheme.ts         # Dark mode hook
├── services/
│   └── contactService.ts   # API service
└── App.tsx                 # Main app component

server/
├── config/
│   └── emailConfig.js      # Email service configuration
├── routes/
│   └── contact.js          # Contact API routes
└── server.js               # Express server
```

## 🎨 Customization

### Theme Colors:
The website uses a blue and purple gradient theme. To customize:
- Edit Tailwind classes in components
- Modify gradient colors in `tailwind.config.js`

### Content:
- Update personal information in respective page components
- Modify project data in `Projects.tsx`
- Update skills and experience in their respective components

## 🔒 Security Features

- **Rate Limiting**: Prevents spam submissions
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for specific origins
- **Helmet.js**: Security headers
- **Input Sanitization**: Prevents XSS attacks

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Breakpoints**: Responsive design for all screen sizes
- **Touch-friendly**: Mobile navigation with hamburger menu
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Deployment

### Frontend (Vercel/Netlify):
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Backend (Railway/Heroku):
1. Set environment variables in your hosting platform
2. Deploy the server folder
3. Update API URLs in `contactService.ts`

## 📞 Contact

- **Email**: lavanyakoppisetti02@gmail.com
- **LinkedIn**: [lavanya-koppisetti](https://www.linkedin.com/in/lavanya-koppisetti-0972212aa/)
- **GitHub**: [lavanyanagasri](https://github.com/lavanyanagasri)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).