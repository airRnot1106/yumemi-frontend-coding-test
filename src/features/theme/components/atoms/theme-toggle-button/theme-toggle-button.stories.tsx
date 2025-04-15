import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { css } from 'styled-system/css';
import { ThemeToggleButton } from './theme-toggle-button';

const meta: Meta<typeof ThemeToggleButton> = {
  title: 'Features/Theme/Atoms/ThemeToggleButton',
  component: ThemeToggleButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;

export const Default: Story = {
  render: () => {
    return <ThemeToggleButton />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
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
          '& > li': {
            display: 'grid',
            alignItems: 'center',
          },
        })}
      >
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <li key={size}>
            <ThemeToggleButton size={size} />
          </li>
        ))}
      </ul>
    );
  },
};
