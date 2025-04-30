import type { ComponentProps, FC, ReactNode } from 'react';
import { css } from 'styled-system/css';
import { SiteFooter } from '../site-footer';
import { SiteHeader } from '../site-header';

export type SiteLayoutProps = ComponentProps<'div'> & {
  children: ReactNode;
};

export const SiteLayout: FC<SiteLayoutProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        minHeight: '100dvh',
      })}
      {...rest}
    >
      <SiteHeader />
      <div className={className}>{children}</div>
      <SiteFooter />
    </div>
  );
};
