import type { ComponentProps, FC, ReactNode } from 'react';
import { cva, cx } from 'styled-system/css';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'size'> & {
  children?: ReactNode;
  size?: 'fit-content' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Checkbox: FC<CheckboxProps> = ({
  children,
  size = 'md',
  className,
  ...rest
}) => {
  return (
    <label
      className={cx(
        className,
        cva({
          base: {
            display: 'inline-flex',
            alignItems: 'center',
            columnGap: '0.5rem',
            cursor: 'pointer',
            '--size-base': '0.25rem',

            '&:has(input:disabled)': {
              cursor: 'not-allowed',
              opacity: 0.5,
            },
          },
          variants: {
            size: {
              'fit-content': {
                paddingBlock: '0',
                paddingInline: '0',
              },
              xs: {
                paddingBlock: '0.5rem',
                paddingInline: '0.5rem',
              },
              sm: {
                paddingBlock: '0.5rem',
                paddingInline: '0.5rem',
              },
              md: {
                paddingBlock: '0.5rem',
                paddingInline: '0.5rem',
              },
              lg: {
                paddingBlock: '0.5rem',
                paddingInline: '0.5rem',
              },
              xl: {
                paddingBlock: '0.5rem',
                paddingInline: '0.5rem',
              },
            },
          },
        })({ size }),
      )}
    >
      <input
        className={cva({
          base: {
            appearance: 'none',
            WebkitAppearance: 'none',
            position: 'relative',
            cursor: 'pointer',

            color: 'muted/20',
            border: '1px solid',
            borderColor: 'foam',
            borderRadius: '0.25rem',

            transition:
              'background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s',

            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'currentColor',
              rotate: '45deg',
              opacity: 0,
              clipPath:
                'polygon(20% 100%, 20% 80%, 50% 80%, 70% 80%, 70% 100%)',
              scale: 0.8,
            },

            '&:checked': {
              backgroundColor: 'foam',
              borderColor: 'foam',
              color: 'white',
              '&::before': {
                opacity: 1,
                clipPath:
                  'polygon(20% 100%, 20% 80%, 50% 80%, 50% 0%, 70% 0%, 70% 100%)',
              },
            },

            '&:focus-visible': {
              outlineStyle: 'solid',
              outlineWidth: '2px',
              outlineOffset: '2px',
            },

            '&:disabled': {
              cursor: 'not-allowed',
              opacity: 0.5,
            },
          },
          variants: {
            size: {
              'fit-content': {
                width: 'calc(var(--size-base) * 4.5)',
                height: 'calc(var(--size-base) * 4.5)',
              },
              xs: {
                width: 'calc(var(--size-base) * 4.5)',
                height: 'calc(var(--size-base) * 4.5)',
              },
              sm: {
                width: 'calc(var(--size-base) * 5)',
                height: 'calc(var(--size-base) * 5)',
              },
              md: {
                width: 'calc(var(--size-base) * 5.5)',
                height: 'calc(var(--size-base) * 5.5)',
              },
              lg: {
                width: 'calc(var(--size-base) * 6)',
                height: 'calc(var(--size-base) * 6)',
              },
              xl: {
                width: 'calc(var(--size-base) * 6.5)',
                height: 'calc(var(--size-base) * 6.5)',
              },
            },
          },
        })({ size })}
        type="checkbox"
        {...rest}
      />
      {children}
    </label>
  );
};
