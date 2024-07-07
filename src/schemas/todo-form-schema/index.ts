import { z } from 'zod';

export const TodoFormSchemaKeys = {
  NAME: 'name',
  IMAGE: 'image',
} as const;

export const TodoFormSchema = z.object({
  [TodoFormSchemaKeys.NAME]: z
    .string()
    .min(1, { message: "Name is a required field, it can't be empty" }),
  [TodoFormSchemaKeys.IMAGE]: z.instanceof(Blob, {
    message: "Image is a required field, it can't be empty!",
  }),
});

export type TodoFormSchemaType = z.infer<typeof TodoFormSchema>;
