// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { createTransport, genContactMessage } from "~/lib/email";
import type { APIResponse } from "~/types";

const mailer = createTransport({
  email: process.env.CONTACT_EMAIL as string,
  password: process.env.CONTACT_EMAIL_PASSWORD as string,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    message: z.string().max(10000),
  });

  const parsed = schema.safeParse(req.body);

  if (!parsed.success)
    return res.status(400).json({ error: "Invalid input", data: null });

  const { data } = parsed;

  const message = genContactMessage(data);

  const sent = await mailer.sendMail(message);

  if (!sent || !sent.accepted.length) {
    return res.status(500).json({ error: "Failed to send email", data: null });
  }

  return res.status(200).json({ error: null, data });
}
