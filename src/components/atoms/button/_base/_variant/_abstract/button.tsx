import type { ComponentProps, FC, ReactNode } from 'react';
import { cx } from 'styled-system/css';
import { buttonRecipe } from './button.recipe';

export type ButtonProps = ComponentProps<'button'> & {
  size?: 'fit-content' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
};

export const Button: FC<ButtonProps> = ({
  size = 'md',
  children,
  className,
  ...rest
}) => {
  return (
    <button className={cx(className, buttonRecipe({ size }))} {...rest}>
      {children}
    </button>
  );
};
