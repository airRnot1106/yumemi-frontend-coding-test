import { ComponentProps, FC, ReactNode } from 'react';
import { cva, cx } from 'styled-system/css';

export type SelectboxProps = Omit<ComponentProps<'select'>, 'size'> & {
  children: ReactNode;
  size?: 'fit-content' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Selectbox: FC<SelectboxProps> = ({
  children,
  size = 'md',
  className,
  ...rest
}) => {
  return (
    <select
      className={cx(
        className,
        cva({
          base: {
            appearance: 'none',
            WebkitAppearance: 'none',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'muted',
            borderRadius: '0.375rem',
            lineHeight: '1.5',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
            backgroundImage:
              'linear-gradient(45deg, #0000 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, #0000 50%)',
            backgroundPosition:
              'calc(100% - 20px) calc(1px + 50%), calc(100% - 16.1px) calc(1px + 50%)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '4px 4px, 4px 4px',
            '--size-base': '0.25rem',
            _disabled: {
              cursor: 'not-allowed',
              opacity: 0.5,
            },
            _focusVisible: {
              outlineStyle: 'solid',
              outlineWidth: '2px',
              outlineOffset: '2px',
            },
          },
          variants: {
            size: {
              'fit-content': {
                paddingBlock: '0',
                paddingInline: '0',
              },
              xs: {
                paddingBlock: 'calc(var(--size-base) * 0.25)',
                paddingInline: 'calc(var(--size-base) * 1)',
              },
              sm: {
                paddingBlock: 'calc(var(--size-base) * 0.5)',
                paddingInline: 'calc(var(--size-base) * 2)',
              },
              md: {
                paddingBlock: 'calc(var(--size-base) * 1)',
                paddingInline: 'calc(var(--size-base) * 3)',
              },
              lg: {
                paddingBlock: 'calc(var(--size-base) * 2)',
                paddingInline: 'calc(var(--size-base) * 4)',
              },
              xl: {
                paddingBlock: 'calc(var(--size-base) * 3)',
                paddingInline: 'calc(var(--size-base) * 5)',
              },
            },
          },
        })({ size }),
      )}
      {...rest}
    >
      {children}
    </select>
  );
};
