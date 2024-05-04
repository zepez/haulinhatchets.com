"use server";

// import config from "@packages/config";
import * as validate from "@packages/validate";
// import { createTransport, genContactMessage } from "@/lib/email";

// const mailer = createTransport({
//   email: config.CONTACT_EMAIL,
//   password: config.CONTACT_EMAIL_PASSWORD,
// });

export type FormState = {
  message: string;
};

export async function contactAction(prevState: FormState, formData: FormData) {
  const dataObj = Object.fromEntries(formData);
  const parsed = validate.contact.safeParse(dataObj);

  if (!parsed.success) {
    return {
      message: "Invalid data ❌",
    };
  }

  const { data } = parsed;

  console.log(data);

  // const message = genContactMessage(data);
  // const sent = await mailer.sendMail(message);

  // if (!sent || !sent.accepted.length) {
  //   return {
  //     error: "❌  Failed to send email",
  //   };
  // }

  return {
    message: "Email sent ✅",
  };
}
