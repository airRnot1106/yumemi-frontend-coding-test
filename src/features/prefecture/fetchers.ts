import 'server-only';

import { API_BASE_URL, API_KEY } from '@/libs/api';
import { err, ok } from '@/utils/result';
import { getPrefecturesResponseSchema } from './schemas';

export const getPrefectures = async () => {
  const res = await fetch(`${API_BASE_URL}/api/v1/prefectures`, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY,
    },
    cache: 'force-cache',
  });

  if (!res.ok) {
    return err({
      status: res.status,
      error: new Error(`Failed to fetch prefectures: ${res.statusText}`),
    });
  }

  const maybeData = (await res.json()) as unknown;

  const result = getPrefecturesResponseSchema.safeParse(maybeData);

  if (!result.success) {
    return err({
      status: res.status,
      error: new Error(`Failed to parse prefectures response: ${result.error}`),
    } as const);
  }

  const { data } = result;

  return ok(data);
};
