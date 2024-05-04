import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const config = createEnv({
  server: {
    EMAIL_HOST: z.string(),
    CONTACT_EMAIL: z.string().email(),
    CONTACT_EMAIL_PASSWORD: z.string(),
    WAIVER_EMAIL: z.string().email(),
    WAIVER_EMAIL_PASSWORD: z.string(),
    AIRTABLE_API_KEY: z.string(),
    AIRTABLE_BASE_ID: z.string(),
    AIRTABLE_WAIVER_TABLE_ID: z.string(),
  },
  client: {},
  runtimeEnv: {
    EMAIL_HOST: process.env.EMAIL_HOST,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    CONTACT_EMAIL_PASSWORD: process.env.CONTACT_EMAIL_PASSWORD,
    WAIVER_EMAIL: process.env.WAIVER_EMAIL,
    WAIVER_EMAIL_PASSWORD: process.env.WAIVER_EMAIL_PASSWORD,
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_WAIVER_TABLE_ID: process.env.AIRTABLE_WAIVER_TABLE_ID,
  },
});

export default config;
