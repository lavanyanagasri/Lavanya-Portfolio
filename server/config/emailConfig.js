const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

const OAuth2 = google.auth.OAuth2;

class EmailService {
  constructor() {
    this.oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );

    this.oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN
    });
  }

  async createTransporter() {
    try {
      const accessToken = await this.oauth2Client.getAccessToken();

      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.GMAIL_USER,
          clientId: process.env.GMAIL_CLIENT_ID,
          clientSecret: process.env.GMAIL_CLIENT_SECRET,
          refreshToken: process.env.GMAIL_REFRESH_TOKEN,
          accessToken: accessToken.token,
        },
      });

      return transporter;
    } catch (error) {
      console.error('Error creating email transporter:', error);
      throw error;
    }
  }

  async sendContactFormEmail(formData) {
    try {
      const transporter = await this.createTransporter();

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `Portfolio Contact Form - Message from ${formData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
            <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Contact Details</h2>
              
              <div style="margin-bottom: 20px;">
                <strong style="color: #374151; display: inline-block; width: 100px;">Name:</strong>
                <span style="color: #1f2937;">${formData.name}</span>
              </div>
              
              <div style="margin-bottom: 20px;">
                <strong style="color: #374151; display: inline-block; width: 100px;">Email:</strong>
                <a href="mailto:${formData.email}" style="color: #3b82f6; text-decoration: none;">${formData.email}</a>
              </div>
              
              <div style="margin-bottom: 20px;">
                <strong style="color: #374151; display: block; margin-bottom: 10px;">Message:</strong>
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                  ${formData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
                <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Source:</strong> Portfolio Website Contact Form</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
              <p>This email was sent automatically from your portfolio website.</p>
            </div>
          </div>
        `,
        replyTo: formData.email
      };

      const result = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result.messageId);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}

module.exports = new EmailService();