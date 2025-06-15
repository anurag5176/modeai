import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, company, phone, service, message } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'as.srivastava100@gmail.com',
      pass: 'coqf gymx wpkc alku',
    },
  });

  const mailOptions = {
    from: 'as.srivastava100@gmail.com',
    to: 'as.srivastava100@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`,
    html: `<h2>New Contact Form Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Service:</b> ${service}</p>
      <p><b>Message:</b><br/>${message}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
} 