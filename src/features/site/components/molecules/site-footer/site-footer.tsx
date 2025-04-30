import type { ComponentProps, FC } from 'react';
import { css, cx } from 'styled-system/css';

export type SiteFooterProps = ComponentProps<'footer'>;

export const SiteFooter: FC<SiteFooterProps> = ({ className, ...rest }) => {
  return (
    <footer
      className={cx(
        className,
        css({
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          borderTop: '1px solid',
          borderTopColor: 'muted/20',
          fontSize: {
            base: 'xs',
            md: 'sm',
            lg: 'md',
          },
          paddingBlock: '0.25rem',
        }),
      )}
      {...rest}
    >
      <span>© 2025 - Copyright airRnot, All Rights Reserved.</span>
    </footer>
  );
};
