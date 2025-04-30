import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button/_Base/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const Ghost: Story = {
  render: () => {
    return <Button variant="ghost">Button</Button>;
  },
};

export const Normal: Story = {
  render: () => {
    return <Button variant="normal">Button</Button>;
  },
};
