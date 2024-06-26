import nodemailer from "nodemailer";
import config from "@packages/config";
import * as validate from "@packages/validate";

interface CreateTransportOpts {
  email: string;
  password: string;
}

export const createTransport = ({ email, password }: CreateTransportOpts) => {
  return nodemailer.createTransport({
    host: config.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: email,
      pass: password,
    },
  });
};

export const genContactMessage = (data: validate.Contact) => {
  const { name, email, phone, message } = data;

  return {
    from: config.CONTACT_EMAIL,
    to: config.CONTACT_EMAIL,
    cc: email,
    subject: `${name} | Contact form submission`,
    text: message,
    html: `
      <h1>${name}</h1>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>${message}</p>
    `,
  };
};

export const genWaiverMessage = (data: validate.Waiver) => {
  const { fullName, birthday, phone, email } = data;

  return {
    from: config.WAIVER_EMAIL,
    to: config.WAIVER_EMAIL,
    subject: `${fullName} | Waiver submission`,
    text: `${fullName} has signed the waiver.`,
    html: `
      <h1>${fullName}</h1>
      <ul>
        ${email ? `<li>Email: ${email}</li>` : ""}
        <li>Phone: ${phone}</li>
        <li>Birthday: ${birthday}</li>
        <li>Signature: ${fullName}</li>
      </ul>
    `,
  };
};
