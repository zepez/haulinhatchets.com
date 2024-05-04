import config from "@packages/config";
import * as validate from "@packages/validate";

interface AddAirtableRecordOpts {
  table: string;
  record: validate.Waiver;
}

interface AirtableResponse {
  error?: object;
  records?: [];
}

export const addAirtableRecord = async (opts: AddAirtableRecordOpts) => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${config.AIRTABLE_BASE_ID}/${opts.table}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${config.AIRTABLE_API_KEY}`,
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
                Promotions: false,
                "Waiver Signed": opts.record.fullName,
                "Waiver Agreed": opts.record.waiverAgreed,
                "Electronic Signature Consent": opts.record.signatureAgreed,
              },
            },
          ],
        }),
      },
    );

    const data = (await response.json()) as AirtableResponse;

    return { error: data.error ?? null };
  } catch (e) {
    console.error(e);

    return { error: e };
  }
};
