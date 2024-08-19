import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Email sent successfully ", response);
  } catch (error) {
    console.log(`Error sending email :${error}`);
    throw new Error(`Error sending email :${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "9c1b07ae-2701-4c7c-a43f-fee9c410244f",
      template_variables: {
        company_info_name: "Authentication Project",
        name: name,
      },
    });
    console.log("Welcome Email sent successfully ", response);
  } catch (error) {
    console.log(`Error sending email :${error}`);
    throw new Error(`Error sending email :${error}`);
  }
};

export const sendResetPasswordEmail = async (email, url) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", url),
      category: "Password Reset",
    });
    console.log("Password reset Email sent successfully ", response);
  } catch (error) {
    console.log(`Error sending email :${error}`);
    throw new Error(`Error sending email :${error}`);
  }
};

export const sendResetSuccessfulEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successfull",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
    console.log("Password reset successfully ", response);
  } catch (error) {
    console.log(`Error sending email :${error}`);
    throw new Error(`Error sending email :${error}`);
  }
};
