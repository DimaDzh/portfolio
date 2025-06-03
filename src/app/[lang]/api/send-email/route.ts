import { sendEmailHandler } from "../../../../lib/sendEmailHandler";

export async function POST(req: Request) {
  const data = await req.json();

  try {
    const { email, username, message } = data;
    await sendEmailHandler({
      email,
      username,
      message: message || "",
    });

    return Response.json({
      message: "Email sent successfully",
    });
  } catch (error) {
    return Response.json({
      message: "Failed to send email",
    });
  }
}
