import { z } from 'zod';

export const formSchema = z.object({
  // To
  toBusinessName: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  toWebsite: z.string().optional(),
  toAddress: z.string().optional(),
  toEmail: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  toPhone: z.string().optional(),
  // From
  fromBusinessName: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  fromPhone: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  fromEmail: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  fromDate: z.string().min(6, {
    message: 'Username must be at least 6 characters.',
  }),
  fromAddress: z.string().min(6, {
    message: 'Username must be at least 6 characters.',
  }),
  // Footer
  footerNote: z.string().min(6, {
    message: 'Username must be at least 6 characters.',
  }),
  thanksMsg: z.string().min(6, {
    message: 'Username must be at least 6 characters.',
  }),
  /// Items
  item1_name: z.string().min(2, {
    message: 'At least two characters',
  }),
  item1_amount: z.number().gt(1, {
    message: 'Must be greater than 1 dollar',
  }),
  item1_quantity: z.number().min(6, {
    message: 'Username must be at least 6 characters.',
  }),
  item2_name: z.string().min(2, {
    message: 'At least two characters',
  }),
  item2_amount: z.number().gt(1, {
    message: 'Must be greater than 1 dollar',
  }),
  item2_quantity: z.number().min(6, {
    message: 'Username must be at least 6 characters.',
  }),
  item3_name: z.string().min(2, {
    message: 'At least two characters',
  }),
  item3_amount: z.number().gt(1, {
    message: 'Must be greater than 1 dollar',
  }),
  item3_quantity: z.number().min(6, {
    message: 'Username must be at least 6 characters.',
  }),
  item4_name: z.string().min(2, {
    message: 'At least two characters',
  }),
  item4_amount: z.number().gt(1, {
    message: 'Must be greater than 1 dollar',
  }),
  item4_quantity: z.number().min(6, {
    message: 'Username must be at least 6 characters.',
  }),
});

export const defaultValues: z.infer<typeof formSchema> = {
  item1_name: '',
  item1_amount: 0,
  item1_quantity: 0,
  item2_name: '',
  item2_amount: 0,
  item2_quantity: 0,
  item3_name: '',
  item3_amount: 0,
  item3_quantity: 0,
  item4_name: '',
  item4_amount: 0,
  item4_quantity: 0,
  footerNote: '',
  thanksMsg: '',
  toBusinessName: '',
  toEmail: '',
  fromBusinessName: '',
  fromPhone: '',
  fromEmail: '',
  fromDate: '',
  fromAddress: '',
  toWebsite: '',
  toAddress: '',
  toPhone: '',
};

export type IFormSchema = z.infer<typeof formSchema>;
