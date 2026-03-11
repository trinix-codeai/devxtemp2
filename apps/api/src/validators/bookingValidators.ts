import { z } from "zod";

export const createBookingSchema = z.object({
  body: z.object({
    packageSlug: z.string().min(1),
    travelers: z.number().int().min(1),
    startDate: z.string().min(1),
    totalAmount: z.number().positive()
  }),
  params: z.object({}).optional(),
  query: z.object({}).optional()
});
