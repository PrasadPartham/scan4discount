import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const { shopName, ownerName, email, phone, city, message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Shop Registration - Scan4Discount",
      html: `
        <h2>New Registration Request</h2>
        <p><b>Shop Name:</b> ${shopName}</p>
        <p><b>Owner Name:</b> ${ownerName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("Email error:", error);
    return Response.json({ success: false });
  }
}
