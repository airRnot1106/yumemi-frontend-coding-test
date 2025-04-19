import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export type HeadingProps = ComponentProps<'h1'> & {
  children: ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading: FC<HeadingProps> = ({
  children,
  as: HeadingTag,
  className,
  ...rest
}) => {
  return (
    <HeadingTag
      className={cx(
        className,
        css({
          fontSize: '2xl',
          fontWeight: 'bold',
          borderBottom: '1px solid',
          borderBottomColor: 'muted/20',
          paddingBottom: '0.5rem',
          width: '100%',
        }),
      )}
      {...rest}
    >
      {children}
    </HeadingTag>
  );
};
