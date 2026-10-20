import { contactFormSchema } from "@/lib/validations/contact";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate data
    const validatedData = contactFormSchema.parse(body);

    // Send email
    await sendContactEmail(validatedData);

    return Response.json(
      {
        success: true,
        message: "Your message has been sent successfully. We'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle validation errors
    if (error instanceof Error) {
      if (error.message.includes("validation")) {
        return Response.json(
          {
            success: false,
            message: "Please check your form and try again.",
            error: error.message,
          },
          { status: 400 }
        );
      }

      // Handle email sending errors
      if (error.message.includes("email")) {
        return Response.json(
          {
            success: false,
            message: "Failed to send email. Please try again later.",
            error: error.message,
          },
          { status: 500 }
        );
      }
    }

    return Response.json(
      {
        success: false,
        message: "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

