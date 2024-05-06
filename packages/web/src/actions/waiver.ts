"use server";

import config from "@packages/config";
import * as validate from "@packages/validate";
// import { createTransport, genWaiverMessage } from "@/lib/email";
import { addAirtableRecord } from "@/lib/airtable";

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

  if (!parsed.success) {
    console.error(parsed.error);
    return {
      message: "Invalid data ❌",
      success: false,
    };
  }

  const { data } = parsed;
  const values = { ...data, waiverAgreed: true, signatureAgreed: true };

  const { error } = await addAirtableRecord({
    table: config.AIRTABLE_WAIVER_TABLE_ID,
    record: values,
  });

  if (error) {
    return {
      message: "❌  Failed to submit waiver",
      success: false,
    };
  }

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
