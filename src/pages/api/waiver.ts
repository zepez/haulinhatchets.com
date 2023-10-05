// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { createTransport, genWaiverMessage } from "~/lib/email";
import { addAirtableRecord } from "~/lib/airtable";
import type { APIResponse } from "~/types";

const mailer = createTransport({
  email: process.env.WAIVER_EMAIL as string,
  password: process.env.WAIVER_EMAIL_PASSWORD as string,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  const schema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    birthday: z.string(),
    phone: z.string().min(7),
    email: z.string().email().min(4).nullable(),
    promotions: z.boolean(),
    waiverSigned: z.string().min(3),
    waiverAgreed: z.boolean(),
    signatureAgreed: z.boolean(),
  });
  const parsed = schema.safeParse(req.body);

  if (!parsed.success)
    return res.status(400).json({ error: "Invalid input", data: null });

  const { data } = parsed;

  const [airtableError, airtableData] = await addAirtableRecord({
    table: process.env.AIRTABLE_WAIVER_TABLE_ID as string,
    record: data,
  });

  if (airtableError || airtableData?.error) {
    return res.status(500).json({ error: "Failed to add record", data: null });
  }

  const message = genWaiverMessage(data);

  const sent = await mailer.sendMail(message);

  if (!sent || !sent.accepted.length) {
    return res.status(500).json({ error: "Failed to send email", data: null });
  }

  return res.status(200).json({ error: null, data });
}
