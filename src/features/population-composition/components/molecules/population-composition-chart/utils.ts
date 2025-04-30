import { shouldNeverHappen } from '@/utils/panic-helper';

export const createLineStyle = (index: number) => {
  const colors = [
    'var(--colors-love)',
    'var(--colors-gold)',
    'var(--colors-rose)',
    'var(--colors-pine)',
    'var(--colors-foam)',
    'var(--colors-iris)',
    'color-mix(in srgb, var(--colors-love) 80%, transparent)',
    'color-mix(in srgb, var(--colors-gold) 80%, transparent)',
    'color-mix(in srgb, var(--colors-rose) 80%, transparent)',
    'color-mix(in srgb, var(--colors-pine) 80%, transparent)',
    'color-mix(in srgb, var(--colors-foam) 80%, transparent)',
    'color-mix(in srgb, var(--colors-iris) 80%, transparent)',
  ] as const;

  const color =
    colors[index % colors.length] ?? shouldNeverHappen('Invalid index');
  const isDashed = Math.floor(index / colors.length) % 2 === 1;

  return {
    stroke: color,
    ...(isDashed && { strokeDasharray: '6 2' }),
  } as const;
};

export const formatTo10kNumberUnit =
  ({ maximumFractionDigits }: { maximumFractionDigits: number }) =>
  (value: number) =>
    new Intl.NumberFormat('ja-JP', {
      maximumFractionDigits,
    }).format(+value / 10000);
