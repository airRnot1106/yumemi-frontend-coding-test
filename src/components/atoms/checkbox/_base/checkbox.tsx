'use client';

import { type ComponentProps, type FC, type ReactNode, useState } from 'react';
import { css, cx } from 'styled-system/css';

export type CheckboxProps = Omit<
  ComponentProps<'input'>,
  'checked' | 'defaultChecked' | 'onChange'
> & {
  children?: ReactNode;
  onChange?: (checked: boolean) => void;
} & (
    | {
        checked: boolean;
        defaultChecked?: never;
      }
    | {
        checked?: never;
        defaultChecked?: boolean;
      }
  );

export const Checkbox: FC<CheckboxProps> = ({
  children,
  checked,
  defaultChecked,
  onChange,
  className,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked ?? false);

  const handleChange = () => {
    const nextState = checked == null ? !isChecked : !checked;
    if (checked == null) {
      setIsChecked(nextState);
    }
    if (onChange) {
      onChange(nextState);
    }
  };

  return (
    <label
      className={cx(
        className,
        css({
          display: 'inline-flex',
          alignItems: 'center',
          columnGap: '0.5rem',
          cursor: 'pointer',
        }),
      )}
    >
      <input
        type="checkbox"
        className={css({
          width: '1.125rem',
          height: '1.125rem',
          appearance: 'none',
          WebkitAppearance: 'none',
          color: 'muted/20',
          border: '1px solid',
          borderColor: 'foam',
          borderRadius: '0.25rem',
          position: 'relative',

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
            clipPath: 'polygon(20% 100%, 20% 80%, 50% 80%, 70% 80%, 70% 100%)',
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
            boxShadow: '0 0 0 2px var(--colors-foam)',
          },

          '&:disabled': {
            cursor: 'not-allowed',
            opacity: 0.5,
          },
        })}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        {...rest}
      />
      {children}
    </label>
  );
};
