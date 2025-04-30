import {
  GhostLinkButton,
  type GhostLinkButtonProps,
  NormalLinkButton,
  type NormalLinkButtonProps,
} from './_variant';

type LinkButtonVariant = 'ghost' | 'normal';

export type LinkButtonProps<T extends LinkButtonVariant> = T extends 'ghost'
  ? GhostLinkButtonProps & { variant: T }
  : T extends 'normal'
    ? NormalLinkButtonProps & { variant: T }
    : never;

export const LinkButton = <T extends LinkButtonVariant>(
  props: LinkButtonProps<T>,
) => {
  switch (props.variant) {
    case 'ghost': {
      return <GhostLinkButton {...props} />;
    }
    case 'normal': {
      return <NormalLinkButton {...props} />;
    }
    default: {
      return props satisfies never;
    }
  }
};
