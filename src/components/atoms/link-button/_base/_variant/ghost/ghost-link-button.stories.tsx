import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { GhostLinkButton } from './ghost-link-button';

const meta: Meta<typeof GhostLinkButton> = {
  title: 'Components/Atoms/LinkButton/_Base/_Variant/Ghost/GhostLinkButton',
  component: GhostLinkButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        className={css({
          padding: '1rem',
        })}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof GhostLinkButton>;

export const Default: Story = {
  render: () => {
    return (
      <GhostLinkButton href="#" size="md">
        Button
      </GhostLinkButton>
    );
  },
};

export const Size: Story = {
  render: () => {
    return (
      <ul
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        })}
      >
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(
          (size) => (
            <li key={size}>
              <GhostLinkButton href="#" size={size}>
                Button
              </GhostLinkButton>
            </li>
          ),
        )}
      </ul>
    );
  },
};
