import { FC } from 'react';
import { css, cx } from 'styled-system/css';
import { Selectbox, SelectboxProps } from '@/components/atoms/selectbox';
import { POPULATION_COMPOSITION_TYPE_OPTIONS } from '@/features/population-composition/consts';

export type PopulationCompositionSelectboxPresentationalProps = Omit<
  SelectboxProps,
  'children'
>;

export const PopulationCompositionSelectboxPresentational: FC<
  PopulationCompositionSelectboxPresentationalProps
> = ({ defaultValue, className, ...rest }) => {
  return (
    <Selectbox
      aria-label="人口構成"
      className={cx(
        className,
        css({
          minWidth: '8.75rem',
        }),
      )}
      defaultValue={defaultValue}
      {...rest}
    >
      {POPULATION_COMPOSITION_TYPE_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Selectbox>
  );
};
