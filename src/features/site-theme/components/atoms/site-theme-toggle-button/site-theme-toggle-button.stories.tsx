import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { css } from 'styled-system/css';
import { SiteThemeToggleButton } from './site-theme-toggle-button';

const meta: Meta<typeof SiteThemeToggleButton> = {
  title: 'Features/SiteTheme/Atoms/SiteThemeToggleButton',
  component: SiteThemeToggleButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SiteThemeToggleButton>;

export const Default: Story = {
  render: () => {
    return <SiteThemeToggleButton />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('switch');
    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-checked', 'false');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-checked', 'true');
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
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(
          (size) => (
            <li key={size}>
              <SiteThemeToggleButton size={size} />
            </li>
          ),
        )}
      </ul>
    );
  },
};
