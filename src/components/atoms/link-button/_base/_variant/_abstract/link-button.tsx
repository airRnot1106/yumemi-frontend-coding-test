import Link, { LinkProps } from 'next/link';
import type { ComponentProps, FC, ReactNode } from 'react';
import { cx } from 'styled-system/css';
import { buttonRecipe } from '@/components/atoms/button';

export type LinkButtonProps = LinkProps &
  ComponentProps<'a'> & {
    size?: 'fit-content' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
  };

export const LinkButton: FC<LinkButtonProps> = ({
  size = 'md',
  children,
  className,
  ...rest
}) => {
  return (
    <Link className={cx(className, buttonRecipe({ size }))} {...rest}>
      {children}
    </Link>
  );
};
