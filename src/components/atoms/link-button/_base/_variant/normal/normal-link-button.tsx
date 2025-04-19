import type { FC } from 'react';
import { css, cx } from 'styled-system/css';
import { LinkButton, type LinkButtonProps } from '../_abstract';

export type NormalLinkButtonProps = LinkButtonProps;

export const NormalLinkButton: FC<NormalLinkButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <LinkButton
      className={cx(
        className,
        css({
          border: '1px solid',
          borderColor: 'muted/20',
          borderRadius: 'md',
          transitionProperty:
            'color, background-color, border-color, box-shadow',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          _hover: {
            backgroundColor: 'color-mix(in oklab, var(--colors-base), #000 7%)',
          },
        }),
      )}
      {...rest}
    >
      {children}
    </LinkButton>
  );
};
