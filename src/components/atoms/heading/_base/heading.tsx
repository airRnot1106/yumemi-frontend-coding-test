import type { ComponentProps, FC, ReactNode } from 'react';
import { cva, cx } from 'styled-system/css';

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
        cva({
          base: {
            fontWeight: 'bold',
            borderBottom: '1px solid',
            borderBottomColor: 'muted/20',
            paddingBottom: '0.5rem',
            width: '100%',
          },
          variants: {
            as: {
              h1: {
                fontSize: '3xl',
              },
              h2: {
                fontSize: '2xl',
              },
              h3: {
                fontSize: 'xl',
              },
              h4: {
                fontSize: 'lg',
              },
              h5: {
                fontSize: 'md',
              },
              h6: {
                fontSize: 'md',
              },
            },
          },
        })({ as: HeadingTag }),
      )}
      {...rest}
    >
      {children}
    </HeadingTag>
  );
};
