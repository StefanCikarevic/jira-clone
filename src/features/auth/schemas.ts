import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const registerSchema = z.object({
  name: z.string().min(3, 'Required').max(255).trim(),
  email: z.string().email('Invalid email address').min(5).max(255),
  password: z.string().min(8, 'Minimum of 8 characters required').max(32),
});
