"use server";

// import config from "@packages/config";
import * as validate from "@packages/validate";
// import { createTransport, genWaiverMessage } from "@/lib/email";
// import { addAirtableRecord } from "@/lib/airtable";

// const mailer = createTransport({
//   email: config.CONTACT_EMAIL,
//   password: config.CONTACT_EMAIL_PASSWORD,
// });

export type FormState = {
  message: string;
  success: boolean;
};

export async function waiverAction(prevState: FormState, formData: FormData) {
  const dataObj = Object.fromEntries(formData);
  const parsed = validate.waiver.safeParse(dataObj);

  console.log(parsed.error);

  if (!parsed.success) {
    return {
      message: "Invalid data ❌",
      success: false,
    };
  }

  const { data } = parsed;

  console.log(data);

  // const { error } = await addAirtableRecord({
  //   table: process.env.AIRTABLE_WAIVER_TABLE_ID as string,
  //   record: data,
  // });

  // if (error) {
  //   return {
  //     message: "❌  Failed to submit waiver",
  //     success: false,
  //   };
  // }

  // const message = genWaiverMessage(data);

  // const sent = await mailer.sendMail(message);

  // if (!sent || !sent.accepted.length) {
  //   return {
  //     message: "❌  Failed to submit waiver",
  //     success: false,
  //   };
  // }

  return {
    message: "Waiver submitted ✅",
    success: true,
  };
}
