import { z } from 'zod';

export const loginSchema = z.object({
  login_id: z.string().min(1, 'Login ID is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
