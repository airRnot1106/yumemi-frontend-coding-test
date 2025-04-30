import { z } from 'zod';

export const prefectureSchema = z.object({
  prefCode: z.number(),
  prefName: z.string(),
});

export type Prefecture = z.infer<typeof prefectureSchema>;

export const getPrefecturesResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.array(prefectureSchema),
});

export type GetPrefecturesResponse = z.infer<
  typeof getPrefecturesResponseSchema
>;
