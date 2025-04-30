import { FC } from 'react';
import { getPrefectures } from '@/features/prefecture/fetchers';
import { matchResult } from '@/utils/result';
import {
  PrefectureFormContainer,
  PrefectureFormContainerProps,
} from './prefecture-form.container';

export type PrefectureFormFetcherProps = Omit<
  PrefectureFormContainerProps,
  'prefectures'
>;

export const PrefectureFormFetcher: FC<PrefectureFormFetcherProps> = async (
  props,
) => {
  const prefectures = matchResult(
    await getPrefectures(),
    ({ result }) => result,
    ({ error }) => {
      throw error;
    },
  );
  return <PrefectureFormContainer prefectures={prefectures} {...props} />;
};
