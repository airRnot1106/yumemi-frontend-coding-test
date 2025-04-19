import type { ComponentProps, FC, ReactNode } from 'react';
import { css, cx } from 'styled-system/css';

export type SelectBoxProps = ComponentProps<'select'> & {
  children: ReactNode;
};

export const Selectbox: FC<SelectBoxProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <select
      className={cx(
        className,
        css({
          paddingInline: '0.75rem',
          paddingBlock: '0.25rem',

          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'muted/20',

          borderRadius: '0.375rem',

          lineHeight: '1.5',

          appearance: 'base-select',
          WebkitAppearance: 'base-select',

          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',

          _focusVisible: {
            outlineStyle: 'solid',
            outlineWidth: '2px',
            outlineColor: 'currentColor',
            outlineOffset: '2px',
          },

          _disabled: {
            opacity: 0.5,
            cursor: 'not-allowed',
          },
        }),
      )}
      {...rest}
    >
      {children}
    </select>
  );
};
