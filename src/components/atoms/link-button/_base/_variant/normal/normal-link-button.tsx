import type { FC } from 'react';
import { css, cx } from 'styled-system/css';
import { LinkButton, type LinkButtonProps } from '../_abstract';

export type NormalLinkButtonProps = LinkButtonProps;

export const NormalLinkButton: FC<NormalLinkButtonProps> = ({
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
          backgroundColor: 'surface',
          transitionProperty:
            'color, background-color, border-color, box-shadow',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          _hover: {
            backgroundColor:
              'color-mix(in oklab, var(--colors-surface), var(--color-mix-base) 7%)',
          },
        }),
      )}
      {...rest}
    />
  );
};
