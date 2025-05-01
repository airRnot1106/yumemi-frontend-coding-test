'use client';

import { useEffect } from 'react';
import { css } from 'styled-system/css';
import { Button } from '@/components/atoms/button';
import { SiteLayout } from '@/features/site/components/molecules/site-layout';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SiteLayout
      className={css({
        display: 'grid',
        placeContent: 'center',
      })}
    >
      <div
        className={css({
          display: 'grid',
          gridAutoFlow: 'row',
          rowGap: '2rem',
        })}
      >
        <hgroup
          className={css({
            display: 'inline-grid',
            justifyItems: 'center',
          })}
        >
          <h2
            className={css({
              fontSize: '6xl',
              fontWeight: 'bold',
            })}
          >
            500
          </h2>
          <p
            className={css({
              fontSize: '2xl',
              fontWeight: 'bold',
            })}
          >
            Internal Server Error
          </p>
        </hgroup>
        <p>アクセスしようとしたページは表示できませんでした</p>
        <Button
          className={css({
            justifySelf: 'center',
          })}
          onClick={reset}
          type="button"
          variant="normal"
        >
          再読み込み
        </Button>
      </div>
    </SiteLayout>
  );
}
