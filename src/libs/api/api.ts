import 'server-only';

import { shouldNeverHappen } from '@/utils/panic-helper';

export const API_BASE_URL =
  process.env.API_BASE_URL ?? shouldNeverHappen('API_BASE_URL is not defined');

export const API_KEY =
  process.env.API_KEY ?? shouldNeverHappen('API_KEY is not defined');
