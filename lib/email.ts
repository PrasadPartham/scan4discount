import nodemailer from 'nodemailer';

// Create transporter once and reuse it
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  pool: true, // use pooled connection
  maxConnections: 1,
  rateDelta: 20000, // time between emails
  rateLimit: 5, // max emails per rateDelta
});

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email server is ready');
  }
});