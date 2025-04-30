import { z } from 'zod';

export const populationCompositionSchema = z.object({
  label: z.string(),
  data: z.array(
    z.object({
      year: z.number(),
      value: z.number(),
      rate: z.number().optional(),
    }),
  ),
});

export type PopulationComposition = z.infer<typeof populationCompositionSchema>;

export const getPopulationCompositionQueryParamsSchema = z.object({
  prefCode: z.number(),
});

export type GetPopulationCompositionQueryParams = z.infer<
  typeof getPopulationCompositionQueryParamsSchema
>;

export const getPopulationCompositionResponseSchema = z.object({
  message: z.string().nullable(),
  result: z.object({
    boundaryYear: z.number(),
    data: z.array(populationCompositionSchema),
  }),
});
