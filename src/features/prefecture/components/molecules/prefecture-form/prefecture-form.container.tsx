'use client';

import { parseAsArrayOf, parseAsInteger, useQueryState } from 'nuqs';
import { FC } from 'react';
import { PREF_CODES_QUERY_KEY } from '@/features/prefecture/consts';
import {
  PrefectureFormPresentational,
  PrefectureFormPresentationalProps,
} from './prefecture-form.presentational';

export type PrefectureFormContainerProps = Omit<
  PrefectureFormPresentationalProps,
  'onSubmit' | 'onReset'
>;

export const PrefectureFormContainer: FC<PrefectureFormContainerProps> = (
  props,
) => {
  const [, setPrefCodes] = useQueryState(
    PREF_CODES_QUERY_KEY,
    parseAsArrayOf(parseAsInteger),
  );

  const handleSubmit: PrefectureFormPresentationalProps['onSubmit'] = (
    prefCodes,
  ) => {
    setPrefCodes(prefCodes, {
      shallow: false,
    });
  };

  const handleReset: PrefectureFormPresentationalProps['onReset'] = () => {
    setPrefCodes(null, {
      shallow: false,
    });
  };

  return (
    <PrefectureFormPresentational
      onReset={handleReset}
      onSubmit={handleSubmit}
      {...props}
    />
  );
};
