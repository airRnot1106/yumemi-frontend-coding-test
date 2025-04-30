import { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export type PopulationCompositionHeaderProps = ComponentProps<'header'> & {
  populationCompositionSelectbox: ReactNode;
};

export const PopulationCompositionHeader: FC<
  PopulationCompositionHeaderProps
> = ({ populationCompositionSelectbox, className, ...rest }) => {
  return (
    <header
      className={cx(
        className,
        css({
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'flex-end',
          borderBottom: '1px solid',
          borderColor: 'muted/20',
          paddingBlock: '0.5rem',
          paddingInline: '0.25rem',
        }),
      )}
      {...rest}
    >
      {populationCompositionSelectbox}
    </header>
  );
};
