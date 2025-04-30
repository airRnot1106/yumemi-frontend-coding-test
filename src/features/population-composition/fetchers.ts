import 'server-only';

import { API_BASE_URL, API_KEY } from '@/libs/api';
import { err, ok } from '@/utils/result';
import {
  GetPopulationCompositionQueryParams,
  getPopulationCompositionResponseSchema,
} from './schemas';

export const getPopulationComposition = async ({
  prefCode,
}: GetPopulationCompositionQueryParams) => {
  const query = new URLSearchParams({
    prefCode: prefCode.toString(),
  });

  const res = await fetch(
    `${API_BASE_URL}/api/v1/population/composition/perYear?${query.toString()}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY,
      },
      cache: 'force-cache',
    },
  );

  if (!res.ok) {
    return err({
      status: res.status,
      error: new Error(
        `Failed to fetch population composition: ${res.statusText}`,
      ),
    } as const);
  }

  const maybeData = (await res.json()) as unknown;

  const result = getPopulationCompositionResponseSchema.safeParse(maybeData);
  if (!result.success) {
    return err({
      status: res.status,
      error: new Error(
        `Failed to parse population composition response: ${result.error}`,
      ),
    } as const);
  }

  const { data } = result;

  return ok(data);
};
