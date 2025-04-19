import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { css } from 'styled-system/css';
import { NormalLinkButton } from './normal-link-button';

const meta: Meta<typeof NormalLinkButton> = {
  title: 'Components/Atoms/LinkButton/_Base/_Variant/Normal/NormalLinkButton',
  component: NormalLinkButton,
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

type Story = StoryObj<typeof NormalLinkButton>;

const handleClick = fn();

export const Default: Story = {
  render: () => {
    return (
      <NormalLinkButton href="#" size="md" onClick={handleClick}>
        Button
      </NormalLinkButton>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('link');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
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
              <NormalLinkButton href="#" size={size}>
                Button
              </NormalLinkButton>
            </li>
          ),
        )}
      </ul>
    );
  },
};
