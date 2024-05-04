import * as z from "zod";

export type Contact = z.infer<typeof contact>;
export const contact = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be longer than 1 character." })
    .max(255, { message: "Name can not exceed 255 characters." }),
  email: z.string().email(),
  phone: z
    .string()
    .min(10, { message: "Phone must be longer than 9 characters." })
    .max(15, { message: "Phone can not exceed 15 characters." }),
  message: z
    .string()
    .min(3, { message: "Message must be longer than 2 characters." })
    .max(1000, { message: "Message can not exceed 1000 characters." }),
});
