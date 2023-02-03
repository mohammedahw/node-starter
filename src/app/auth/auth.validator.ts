import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
  })
  .required();

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    username: z.string().min(3),
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    image: z.string().url(),
  })
  .required();

export type LoginDto = z.infer<typeof loginSchema>;
export type RegisterDto = z.infer<typeof registerSchema>;
