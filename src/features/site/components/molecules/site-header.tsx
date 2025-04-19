import GitHub from '@/assets/svg/github-mark.svg';
import { LinkButton } from '@/components/atoms/link-button';
import { ThemeToggleButton } from '@/features/theme/components/atoms/theme-toggle-button';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';
import { css, cx } from 'styled-system/css';

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
          <ThemeToggleButton size="md" />
        </li>
        <li>
          <LinkButton
            href="https://github.com/airRnot1106/yumemi-frontend-coding-test"
            target="_blank"
            variant="normal"
            size="md"
            aria-label="GitHub"
          >
            <GitHub
              width="36"
              height="36"
              className={css({
                fill: 'currentColor',
              })}
            />
          </LinkButton>
        </li>
      </ul>
    </header>
  );
};
