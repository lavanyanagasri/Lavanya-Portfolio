const express = require('express');
const router = express.Router();
const emailService = require('../config/emailConfig');

// Rate limiting middleware (simple implementation)
const rateLimitMap = new Map();

const rateLimit = (req, res, next) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per window

  if (!rateLimitMap.has(clientIP)) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + windowMs });
    return next();
  }

  const clientData = rateLimitMap.get(clientIP);
  
  if (now > clientData.resetTime) {
    rateLimitMap.set(clientIP, { count: 1, resetTime: now + windowMs });
    return next();
  }

  if (clientData.count >= maxRequests) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.'
    });
  }

  clientData.count++;
  next();
};

// Input validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;

  // Check required fields
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required.',
      errors: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        message: !message ? 'Message is required' : null
      }
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
      errors: { email: 'Invalid email format' }
    });
  }

  // Validate message length
  if (message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Message must be at least 10 characters long.',
      errors: { message: 'Message too short' }
    });
  }

  // Sanitize inputs
  req.body.name = name.trim().substring(0, 100);
  req.body.email = email.trim().toLowerCase().substring(0, 100);
  req.body.message = message.trim().substring(0, 1000);

  next();
};

// Contact form submission endpoint
router.post('/send', rateLimit, validateContactForm, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log('Processing contact form submission:', { name, email });

    const result = await emailService.sendContactFormEmail({
      name,
      email,
      message
    });

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or contact me directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Contact service is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;