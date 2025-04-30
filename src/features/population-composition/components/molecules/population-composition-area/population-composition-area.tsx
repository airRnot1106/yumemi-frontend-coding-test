import { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export type PopulationCompositionAreaProps = ComponentProps<'div'> & {
  header: ReactNode;
  chart: ReactNode;
};

export const PopulationCompositionArea: FC<PopulationCompositionAreaProps> = ({
  header,
  chart,
  className,
  ...rest
}) => {
  return (
    <div
      className={cx(
        className,
        css({
          display: 'grid',
          gridTemplateRows: 'auto 1fr',
          rowGap: '2rem',
          width: '100%',
          height: '100%',
        }),
      )}
      {...rest}
    >
      {header}
      {chart}
    </div>
  );
};
