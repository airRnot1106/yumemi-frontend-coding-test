import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { ComponentProps, FC, ReactNode } from 'react';
import { cva, cx } from 'styled-system/css';

export type LinkButtonProps = LinkProps &
  ComponentProps<'a'> & {
    size?: 'fit-content' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    className?: string;
  };

export const LinkButton: FC<LinkButtonProps> = ({
  size = 'md',
  children,
  className,
  ...rest
}) => {
  return (
    <Link
      className={cx(
        className,
        cva({
          base: {
            display: 'inline-grid',
            alignItems: 'center',
            '--size-base': '0.25rem',
          },
          variants: {
            size: {
              'fit-content': {
                paddingBlock: '0',
                paddingInline: '0',
              },
              xs: {
                height: 'calc(var(--size-base) * 6)',
                paddingInline: '0.5rem',
              },
              sm: {
                height: 'calc(var(--size-base) * 8)',
                paddingInline: '1rem',
              },
              md: {
                height: 'calc(var(--size-base) * 10)',
                paddingInline: '1.5rem',
              },
              lg: {
                height: 'calc(var(--size-base) * 12)',
                paddingInline: '2rem',
              },
              xl: {
                height: 'calc(var(--size-base) * 14)',
                paddingInline: '2.5rem',
              },
            },
          },
        })({ size }),
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};
