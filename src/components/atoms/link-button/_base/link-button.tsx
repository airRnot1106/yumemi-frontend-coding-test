import type { FC } from 'react';
import {
  type LinkButtonProps as AbstractLinkButtonProps,
  NormalLinkButton,
} from './_variant';

export type LinkButtonProps = AbstractLinkButtonProps & {
  variant: 'normal';
};

export const LinkButton: FC<LinkButtonProps> = ({
  variant,
  children,
  className = '',
  ...rest
}) => {
  switch (variant) {
    case 'normal': {
      return (
        <NormalLinkButton className={className} {...rest}>
          {children}
        </NormalLinkButton>
      );
    }
    default: {
      variant satisfies never;
      return;
    }
  }
};
