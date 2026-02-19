import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('Newsletter API route hit');
  
  try {
    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send emails asynchronously (don't wait for them)
    sendNewsletterEmailsAsync(email).catch(err => {
      console.error('Background email error:', err);
    });

    // Return success immediately
    console.log('Newsletter subscription queued for:', email);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to subscribe',
      },
      { status: 500 }
    );
  }
}

// Background async function to send emails
async function sendNewsletterEmailsAsync(email: string) {
  try {
    const { transporter } = await import('@/lib/email');
    
    console.log('Sending newsletter emails for:', email);

    // Send notification email to your support
    const notificationMail = transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'support@scan4discount.com',
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
            🎉 New Newsletter Subscriber
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="font-size: 16px; margin: 0;">
              <strong>Email:</strong> ${email}
            </p>
            <p style="color: #666; font-size: 14px; margin-top: 10px;">
              Subscribed on: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to subscriber
    const confirmationMail = transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Scan4Discount Newsletter! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px;">
          <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #333; margin: 0; font-size: 28px;">
                Welcome to <span style="color: #fbbf24;">Scan4Discount</span>! 🎉
              </h1>
            </div>
            
            <p style="color: #666; font-size: 16px; line-height: 1.6;">
              Thank you for subscribing to our newsletter! You're now part of our community.
            </p>
            
            <div style="background: #f9fafb; border-left: 4px solid #fbbf24; padding: 20px; margin: 20px 0; border-radius: 8px;">
              <p style="color: #333; margin: 0; font-size: 15px;">
                <strong>What to expect:</strong>
              </p>
              <ul style="color: #666; margin: 10px 0 0 0; padding-left: 20px;">
                <li>Latest features and updates</li>
                <li>Marketing tips and strategies</li>
                <li>Exclusive offers and discounts</li>
                <li>Success stories from our users</li>
              </ul>
            </div>
            
            <p style="color: #666; font-size: 14px; line-height: 1.6;">
              Stay tuned for exciting updates and insights to help your business grow!
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://scan4discount.com" 
                 style="display: inline-block; background: #fbbf24; color: #000; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: bold; font-size: 16px;">
                Visit Our Website
              </a>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                If you didn't subscribe to this newsletter, you can safely ignore this email.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: white; font-size: 12px; opacity: 0.9;">
              © ${new Date().getFullYear()} Scan4Discount. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    // Wait for both emails to send
    await Promise.all([notificationMail, confirmationMail]);
    
    console.log('Newsletter emails sent successfully for:', email);
  } catch (error) {
    console.error('Failed to send newsletter emails:', error);
    throw error;
  }
}
