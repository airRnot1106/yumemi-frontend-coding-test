import type { FC } from 'react';
import { css, cx } from 'styled-system/css';
import { LinkButton, type LinkButtonProps } from '../_abstract';

export type GhostLinkButtonProps = LinkButtonProps;

export const GhostLinkButton: FC<GhostLinkButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <LinkButton
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
    </LinkButton>
  );
};
