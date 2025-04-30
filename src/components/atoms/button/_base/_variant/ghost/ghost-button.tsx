import type { FC } from 'react';
import { css, cx } from 'styled-system/css';
import { Button, type ButtonProps } from '../_abstract';

export type GhostButtonProps = ButtonProps;

export const GhostButton: FC<GhostButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Button
      className={cx(
        className,
        css({
          borderRadius: 'md',
          transitionProperty:
            'color, background-color, border-color, box-shadow',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          _hover: {
            backgroundColor:
              'color-mix(in oklab, var(--colors-base), var(--color-mix-base) 7%)',
          },
        }),
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};
