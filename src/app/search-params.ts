import {
  createSearchParamsCache,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
} from 'nuqs/server';

export const rootSearchParams = {
  prefCodes: parseAsArrayOf(parseAsInteger),
  type: parseAsString,
};

export const rootSearchParamsCache = createSearchParamsCache(rootSearchParams);
