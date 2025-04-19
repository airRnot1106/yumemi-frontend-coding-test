import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
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

const handleClick = fn();

export const Default: Story = {
  render: () => {
    return (
      <LinkButton href="#" size="md" onClick={handleClick}>
        Button
      </LinkButton>
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
