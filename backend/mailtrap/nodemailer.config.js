// import { MailtrapClient } from "mailtrap";
// import dotenv from "dotenv";

// dotenv.config();

// export const mailtrapClient = new MailtrapClient({
//   endpoint: process.env.MAILTRAP_ENDPOINT,
//   token: process.env.MAILTRAP_TOKEN,
// });

// export const sender = {
//   email: "mailtrap@demomailtrap.com",
//   name: "Authentication Project",
// };

import nodemailer from "nodemailer";

// Set up your nodemailer transport using Gmail's SMTP settings
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "projectauthentication01@gmail.com", // Replace with your Gmail address
    pass: "bunf tyqy klez gqvs", // Replace with your Gmail App Password
  },
});

export const sender = "Authentication Project"; // Replace with your Gmail address
