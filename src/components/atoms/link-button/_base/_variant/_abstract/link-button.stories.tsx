import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { LinkButton } from './link-button';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/Atoms/LinkButton/_Base/_Variant/_Abstract/LinkButton',
  component: LinkButton,
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

type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  render: () => {
    return (
      <LinkButton href="#" size="md">
        Button
      </LinkButton>
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
              <LinkButton href="#" size={size}>
                Button
              </LinkButton>
            </li>
          ),
        )}
      </ul>
    );
  },
};
