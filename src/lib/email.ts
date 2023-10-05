import nodemailer from "nodemailer";
import { ContactFormType, WaiverFormType } from "~/types";

interface CreateTransportOpts {
  email: string;
  password: string;
}

export const createTransport = ({ email, password }: CreateTransportOpts) => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST as string,
    port: 587,
    secure: false,
    auth: {
      user: email,
      pass: password,
    },
  });
};

export const genContactMessage = (data: ContactFormType) => {
  const { name, email, phone, message } = data;

  return {
    from: process.env.CONTACT_EMAIL as string,
    to: process.env.CONTACT_EMAIL as string,
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

export const genWaiverMessage = (data: WaiverFormType) => {
  const { firstName, lastName, birthday, phone, email, waiverSigned } = data;

  return {
    from: process.env.WAIVER_EMAIL as string,
    to: process.env.WAIVER_EMAIL as string,
    subject: `${firstName} ${lastName} | Waiver submission`,
    text: `${firstName} ${lastName} has agreed to the waiver.`,
    html: `
      <h1>${firstName} ${lastName}</h1>
      <ul>
        ${email ? `<li>Email: ${email}</li>` : ""}
        <li>Phone: ${phone}</li>
        <li>Birthday: ${birthday}</li>
        <li>Signature: ${waiverSigned}</li>
      </ul>
    `,
  };
};
