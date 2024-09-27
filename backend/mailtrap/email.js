import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";
import { transporter, sender } from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const info = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
    });
    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error}`);
  }
};

export const sendResetPasswordEmail = async (email, url) => {
  try {
    const info = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Reset Your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", url),
    });
    console.log("Password reset Email sent successfully ", info.messageId);
  } catch (error) {
    console.log(`Error sending email :${error}`);
    throw new Error(`Error sending email :${error}`);
  }
};

export const sendResetSuccessfulEmail = async (email) => {
  try {
    const info = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });
    console.log("Password reset successfully ", info.messageId);
  } catch (error) {
    console.log(`Error sending email :${error}`);
    throw new Error(`Error sending email :${error}`);
  }
};
