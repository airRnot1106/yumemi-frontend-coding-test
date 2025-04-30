import { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';
import { Heading } from '@/components/atoms/heading';

export type PrefectureSectionProps = ComponentProps<'section'> & {
  prefectureForm: ReactNode;
};

export const PrefectureSection: FC<PrefectureSectionProps> = ({
  prefectureForm,
  className,
  ...rest
}) => {
  return (
    <section
      className={cx(
        className,
        css({
          display: 'grid',
          gridAutoFlow: 'row',
          rowGap: '1rem',
        }),
      )}
      {...rest}
    >
      <Heading as="h2">都道府県</Heading>
      {prefectureForm}
    </section>
  );
};
