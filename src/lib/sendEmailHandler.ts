import HelloAdminEmail from "../emails/HelloAdminEmail";
import HelloEmail from "../emails/HelloEmail";
import { sendMail } from "./send-email";

export type SendEmailHandlerProp = {
  email: string;
  username: string;
  message?: string;
};

export const sendEmailHandler = async (props: SendEmailHandlerProp) => {
  "use server";
  try {
    await sendMail({
      to: props.email,
      subject: "Hello from Dzharty",
      body: HelloEmail() as React.ReactElement,
    });
  } catch (error) {
    throw new Error("Email sending failed");
  }

  try {
    await sendMail({
      to: "dzhartyds@gmail.com",
      subject: "Hello from Dzharty",
      body: HelloAdminEmail(props) as React.ReactElement,
    });
  } catch (error) {
    throw new Error("Admin email sending failed");
  }
};
