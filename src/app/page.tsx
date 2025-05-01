import { SearchParams } from 'nuqs/server';
import { css } from 'styled-system/css';
import { PopulationCompositionSelectbox } from '@/features/population-composition/components/atoms/population-composition-selectbox';
import { PopulationCompositionArea } from '@/features/population-composition/components/molecules/population-composition-area';
import { PopulationCompositionChart } from '@/features/population-composition/components/molecules/population-composition-chart';
import { PopulationCompositionHeader } from '@/features/population-composition/components/molecules/population-composition-header';
import { POPULATION_COMPOSITION_TYPE_OPTIONS } from '@/features/population-composition/consts';
import { PrefectureForm } from '@/features/prefecture/components/molecules/prefecture-form';
import { PrefectureSection } from '@/features/prefecture/components/molecules/prefecture-section';
import { getPrefectures } from '@/features/prefecture/fetchers';
import { SiteLayout } from '@/features/site/components/molecules/site-layout';
import { matchResult } from '@/utils/result';
import { rootSearchParamsCache } from './search-params';

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Home({ searchParams }: PageProps) {
  const { prefCodes, type } = await rootSearchParamsCache.parse(searchParams);
  const prefectures = matchResult(
    await getPrefectures(),
    ({ result }) =>
      result.filter(({ prefCode }) => (prefCodes ?? []).includes(prefCode)),
    ({ error }) => {
      throw error;
    },
  );

  const populationCompositionType =
    POPULATION_COMPOSITION_TYPE_OPTIONS.find(({ value }) => value === type) ??
    POPULATION_COMPOSITION_TYPE_OPTIONS[0];

  return (
    <SiteLayout>
      <main
        className={css({
          display: 'grid',
          gridAutoFlow: 'row',
          rowGap: '2rem',
          paddingBlock: '1rem',
          paddingInline: '2rem',
        })}
      >
        <PrefectureSection
          prefectureForm={
            <PrefectureForm
              defaultValues={prefectures.map(({ prefCode }) => prefCode)}
            />
          }
        />
        <PopulationCompositionArea
          chart={
            prefectures.length > 0 ? (
              <div
                className={css({
                  overflow: 'auto',
                })}
              >
                <PopulationCompositionChart
                  className={css({
                    width: 'max(90dvw, 1024px)',
                    height: '80dvh',
                    marginInline: 'auto',
                  })}
                  prefectures={prefectures}
                  type={populationCompositionType}
                />
              </div>
            ) : (
              <div
                className={css({
                  display: 'grid',
                  placeContent: 'center',
                  paddingBlock: '6rem',
                })}
              >
                <span>都道府県を選択してください</span>
              </div>
            )
          }
          header={
            <PopulationCompositionHeader
              populationCompositionSelectbox={
                <PopulationCompositionSelectbox
                  defaultValue={populationCompositionType.value}
                />
              }
            />
          }
        />
      </main>
    </SiteLayout>
  );
}
