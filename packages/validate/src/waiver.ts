import * as z from "zod";

const currentYear = new Date().getFullYear();
const minAge = 18;
const maxAge = 150;

export type Waiver = z.infer<typeof waiver>;
export const waiver = z
  .object({
    fullName: z.string().min(2).max(255),
    birthYear: z.coerce
      .number()
      .int()
      .positive()
      .min(currentYear - maxAge)
      .max(currentYear - minAge),
    birthMonth: z.coerce.number().int().positive().min(1).max(12),
    birthDay: z.coerce.number().int().positive().min(1).max(31),
    email: z.string().email().nullable().default(null),
    phone: z.string().min(10).max(15),
    waiverAgreed: z.boolean().default(false),
    signatureAgreed: z.boolean().default(false),
  })
  .transform((data) => ({
    ...data,
    firstName: data.fullName.split(" ")[0],
    lastName: data.fullName.split(" ")[1],
    birthday: `${data.birthYear.toString().padStart(4, "0")}-${data.birthMonth
      .toString()
      .padStart(2, "0")}-${data.birthDay.toString().padStart(2, "0")}`,
  }));
