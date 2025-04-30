import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { css, cx } from 'styled-system/css';
import GitHub from '@/assets/svg/github-mark.svg';
import { LinkButton } from '@/components/atoms/link-button';
import { SiteThemeToggleButton } from '@/features/site-theme/components/atoms/site-theme-toggle-button';

export type SiteHeaderProps = ComponentProps<'header'>;

export const SiteHeader: FC<SiteHeaderProps> = ({ className, ...rest }) => {
  return (
    <header
      className={cx(
        className,
        css({
          display: 'grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBlock: {
            base: '0.25rem',
            sm: '0.5rem',
          },
          paddingInline: {
            base: '0.5rem',
            sm: '1rem',
          },
          borderBottom: '1px solid',
          borderBottomColor: 'muted/20',
        }),
      )}
      {...rest}
    >
      <Link href="/">
        <h1
          className={css({
            fontSize: {
              base: 'md',
              sm: '2xl',
            },
            fontWeight: 'bold',
          })}
        >
          Prefecture Information Graph
        </h1>
      </Link>
      <ul
        className={css({
          display: 'grid',
          gridAutoFlow: 'column',
          alignItems: 'center',
          gap: {
            base: '0.5rem',
            sm: '1rem',
          },
          '& > li': {
            display: 'grid',
            alignItems: 'center',
          },
        })}
      >
        <li>
          <SiteThemeToggleButton size="md" />
        </li>
        <li>
          <LinkButton
            aria-label="GitHub"
            href="https://github.com/airRnot1106/yumemi-frontend-coding-test"
            size="md"
            target="_blank"
            variant="ghost"
          >
            <GitHub
              className={css({
                fill: 'currentColor',
              })}
              height="36"
              width="36"
            />
          </LinkButton>
        </li>
      </ul>
    </header>
  );
};
