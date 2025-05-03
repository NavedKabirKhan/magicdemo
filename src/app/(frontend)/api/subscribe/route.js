import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email } = body; // Only email is required for the newsletter

    // Check if the email is provided
    if (!email) {
      return new Response(
        JSON.stringify({ success: false, message: "Email is required" }),
        { status: 400 }
      );
    }

    // Create SMTP transporter using your credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.elasticemail.com", // Change to your SMTP host if necessary
      port: process.env.SMTP_PORT || 2525, // Default ElasticEmail port
      auth: {
        user: process.env.SMTP_USER || "hello@magictable.in", // Your email username
        pass: process.env.SMTP_PASS || "D9F882D55571737E474D10BF6D907949AF8C", // Your email password (API key or SMTP password)
      },
    });

    // Configure the email
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL || "hello@magictable.in", // Your 'from' email address
      to: process.env.SMTP_TO_EMAIL || "magictable2025@gmail.com", // The recipient email address for newsletter subscriptions
      subject: "New Website Subscription", // Subject of the email
      html: `<p>A new user has subscribed to the website:</p><p><strong>Email:</strong> ${email}</p>`, // Email body with HTML formatting
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Subscription successful!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message || "Internal server error" }),
      { status: 500 }
    );
  }
}

// Handle GET request (not allowed for this endpoint)
export const GET = () =>
  new Response(
    JSON.stringify({ success: false, message: "GET method not allowed" }),
    { status: 405 }
  );
