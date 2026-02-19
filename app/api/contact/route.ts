// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: Request) {
//   try {
//     const { name, email, shopName, message } = await req.json();

//    const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'learnxhub3@gmail.com',
//     pass: 'vhknjkwdryltuzqw',
//   },
// });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: 'support@scan4discount.com',
//       subject: `Contact Form: ${name} - ${shopName}`,
//       html: `
//         <h3>New Contact Form Submission</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Shop Name:</strong> ${shopName}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import { transporter } from '@/lib/email';

export async function POST(req: Request) {
  console.log('Contact API route hit');
  
  try {
    const body = await req.json();
    console.log('Request body received');
    
    const { name, email, shopName, message } = body;

    // Validate input
    if (!name || !email || !shopName || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
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

    console.log('Sending email...');

    // Send email with a timeout
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'support@scan4discount.com',
      replyTo: email,
      subject: `Contact Form: ${name} - ${shopName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Shop Name:</strong> ${shopName}</p>
          </div>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // Set timeout for sending email (8 seconds max)
    const emailPromise = transporter.sendMail(mailOptions);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email timeout')), 8000)
    );

    await Promise.race([emailPromise, timeoutPromise]);

    console.log('Email sent successfully');
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email',
      },
      { status: 500 }
    );
  }
}