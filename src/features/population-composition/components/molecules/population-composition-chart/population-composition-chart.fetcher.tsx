import { FC } from 'react';
import { getPopulationComposition } from '@/features/population-composition/fetchers';
import { Prefecture } from '@/features/prefecture/schemas';
import { shouldNeverHappen } from '@/utils/panic-helper';
import { matchResult } from '@/utils/result';
import {
  PopulationCompositionChartPresentational,
  PopulationCompositionChartPresentationalProps,
} from './population-composition-chart.presentational';

export type PopulationCompositionChartFetcherProps = Omit<
  PopulationCompositionChartPresentationalProps,
  'populationCompositions'
> & {
  prefectures: Prefecture[];
};

export const PopulationCompositionChartFetcher: FC<
  PopulationCompositionChartFetcherProps
> = async ({ type, prefectures, ...rest }) => {
  const populationCompositionResults = await Promise.all(
    prefectures.map((prefecture) =>
      getPopulationComposition({ prefCode: prefecture.prefCode }).then(
        (result) =>
          matchResult(
            result,
            ({ result }) => ({
              ...(result.data.find((data) => data.label === type.label) ??
                shouldNeverHappen('Invalid label')),
              prefecture,
            }),
            ({ error }) => {
              throw error;
            },
          ),
      ),
    ),
  );

  return (
    <PopulationCompositionChartPresentational
      populationCompositions={populationCompositionResults}
      type={type}
      {...rest}
    />
  );
};
