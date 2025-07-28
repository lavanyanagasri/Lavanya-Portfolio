interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
  messageId?: string;
  errors?: {[key: string]: string};
}

class ContactService {
  private baseURL: string;

  constructor() {
    this.baseURL = import.meta.env.PROD 
      ? 'https://your-api-domain.com/api' 
      : 'https://localhost:3001/api';
  }

  async sendMessage(formData: ContactFormData): Promise<ContactResponse> {
    try {
      const response = await fetch(`${this.baseURL}/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      return data;
    } catch (error) {
      console.error('Contact service error:', error);
      
      if (error instanceof Error) {
        throw error;
      }
      
      throw new Error('Network error. Please check your connection and try again.');
    }
  }

  async checkHealth(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}/contact/health`);
      return response.ok;
    } catch (error) {
      console.error('Health check failed:', error);
      return false;
    }
  }
}

export default new ContactService();