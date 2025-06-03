import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import { JSX } from "react";

export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: JSX.Element;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  if (!SMTP_EMAIL || !SMTP_PASSWORD) {
    console.error("SMTP configuration is missing.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true, // Use secure connection
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transporter.verify();
  } catch (error) {
    console.error("Error verifying SMTP connection:", error);
    return;
  }

  try {
    const emailHtml = await render(body);
    const options = {
      from: `Dzharty <${SMTP_EMAIL}>`,
      to,
      subject,
      html: emailHtml,
    };

    const sendResult = await transporter.sendMail(options);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
