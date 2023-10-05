import type { WaiverFormType } from "~/types";

interface AddAirtableRecordOpts {
  table: string;
  record: WaiverFormType;
}

interface AirtableResponse {
  error?: object;
  records?: [];
}

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY as string;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID as string;

export const addAirtableRecord = async (opts: AddAirtableRecordOpts) => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${opts.table}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                "First Name": opts.record.firstName,
                "Last Name": opts.record.lastName,
                Birthday: opts.record.birthday,
                Phone: opts.record.phone,
                Email: opts.record.email,
                Promotions: opts.record.promotions,
                "Waiver Signed": opts.record.waiverSigned,
                "Waiver Agreed": opts.record.waiverAgreed,
                "Electronic Signature Consent": opts.record.signatureAgreed,
              },
            },
          ],
        }),
      }
    );

    const data = (await response.json()) as AirtableResponse;

    return [null, data] as const;
  } catch (e) {
    console.log(e);
    return [e, null] as const;
  }
};
