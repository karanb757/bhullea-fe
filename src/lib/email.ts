import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  try {
    const result = await resend.emails.send({
      from: "BHULLEA <onboarding@resend.dev>", // Resend sandbox email
      to: process.env.CONTACT_EMAIL_TO || "karan@bhullea.com", // Your email
      replyTo: data.email, // Reply goes to user's email
      subject: `New Contact Form: ${data.subject}`,
      html: generateEmailHTML(data),
    });

    return {
      success: true,
      messageId: result.id,
    };
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
}

// Generate professional HTML email
function generateEmailHTML(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: #f9f7f4;
          }
          .header {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            color: #f5f1ed;
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 2px;
          }
          .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            display: block;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #d4a574;
            margin-bottom: 8px;
            font-weight: 600;
          }
          .value {
            color: #1a1a1a;
            font-size: 14px;
            padding: 10px;
            background: #f9f7f4;
            border-left: 3px solid #d4a574;
            padding-left: 15px;
          }
          .message-box {
            background: #f9f7f4;
            padding: 15px;
            border-radius: 4px;
            border-left: 3px solid #d4a574;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #999;
            text-align: center;
          }
          .sender-info {
            background: #f9f7f4;
            padding: 15px;
            border-radius: 4px;
            margin-top: 20px;
            font-size: 13px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>BHULLEA Contact Form</h1>
          </div>
          <div class="content">
            <p style="margin-top: 0; color: #666;">You have received a new message from your website contact form.</p>

            <div class="field">
              <span class="label">Name</span>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>

            <div class="field">
              <span class="label">Email</span>
              <div class="value">
                <a href="mailto:${escapeHtml(data.email)}" style="color: #d4a574; text-decoration: none;">
                  ${escapeHtml(data.email)}
                </a>
              </div>
            </div>

            <div class="field">
              <span class="label">Subject</span>
              <div class="value">${escapeHtml(data.subject)}</div>
            </div>

            <div class="field">
              <span class="label">Message</span>
              <div class="message-box">${escapeHtml(data.message)}</div>
            </div>

            <div class="sender-info">
              <strong>Reply directly to:</strong> ${escapeHtml(data.email)}
            </div>

            <div class="footer">
              <p>This email was sent from the BHULLEA website contact form.</p>
              <p>&copy; 2026 BHULLEA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Escape HTML to prevent injection
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
