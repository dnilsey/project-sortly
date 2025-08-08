import { z } from 'zod';

export const signupSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  gender: z.enum(["male", "female", "other"], {
    message: "Gender is required"
  }),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirm_password: z.string()
}).refine((data) => data.password === data.confirm_password, {
  path: ['confirm_password'],
  message: 'Passwords do not match',
});


export type SignupFormData = z.infer<typeof signupSchema>;
