'use client';

import { useQueryState } from 'nuqs';
import { FC } from 'react';
import {
  PopulationCompositionSelectboxPresentational,
  PopulationCompositionSelectboxPresentationalProps,
} from './population-composition-selectbox.presentational';

export type PopulationCompositionSelectboxContainerProps = Omit<
  PopulationCompositionSelectboxPresentationalProps,
  'onChange'
>;

export const PopulationCompositionSelectboxContainer: FC<
  PopulationCompositionSelectboxContainerProps
> = (props) => {
  const [, setPopulationComposition] = useQueryState('type');

  const handleChange: PopulationCompositionSelectboxPresentationalProps['onChange'] =
    (e) => {
      const value = e.target.value;
      setPopulationComposition(value, {
        shallow: false,
      });
    };

  return (
    <PopulationCompositionSelectboxPresentational
      onChange={handleChange}
      {...props}
    />
  );
};
