import { z } from "zod";

export const schema = z.object({
  carType: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(20, { message: "Must be 20 or less characters long" }),
  carTitle: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(20, { message: "Must be 20 or less characters long" }),
  rentPrice: z
    .number()
    .positive()
    .min(1, { message: "Must be 1 or more" })
    .max(100000, { message: "Must be 100,000 or less" }),
  capacity: z
    .number()
    .positive()
    .min(1, { message: "Must be 1 or more" })
    .max(10, { message: "Must be 10 or less" }),
  transmission: z.enum(["Automatic", "Manual"]),
  location: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(20, { message: "Must be 20 or less characters long" }),
  fuelCapacity: z
    .number()
    .positive()
    .min(1, { message: "Must be 1 or more" })
    .max(80, { message: "Must be 80 or less" }),
  description: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(500, { message: "Must be 500 or less characters long" }),
  image: z
    .string()
    .url()
    .min(3, { message: "Must be 3 or more characters long" }),
});
