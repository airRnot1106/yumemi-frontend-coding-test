import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { css } from 'styled-system/css';
import { GhostButton } from './ghost-button';

const meta: Meta<typeof GhostButton> = {
  title: 'Components/Atoms/Button/_Base/_Variant/Ghost/GhostButton',
  component: GhostButton,
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

type Story = StoryObj<typeof GhostButton>;

const handleClick = fn();

export const Default: Story = {
  render: () => {
    return (
      <GhostButton onClick={handleClick} size="md">
        Button
      </GhostButton>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
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
              <GhostButton size={size}>Button</GhostButton>
            </li>
          ),
        )}
      </ul>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <GhostButton disabled onClick={handleClick} size="md">
        Button
      </GhostButton>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  },
};
