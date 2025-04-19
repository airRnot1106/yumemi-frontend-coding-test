import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Atoms/Heading/_Base/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '1rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  render: () => {
    return <Heading as="h1">タイトル</Heading>;
  },
};

export const H2: Story = {
  render: () => {
    return <Heading as="h2">タイトル</Heading>;
  },
};

export const H3: Story = {
  render: () => {
    return <Heading as="h3">タイトル</Heading>;
  },
};

export const H4: Story = {
  render: () => {
    return <Heading as="h4">タイトル</Heading>;
  },
};

export const H5: Story = {
  render: () => {
    return <Heading as="h5">タイトル</Heading>;
  },
};

export const H6: Story = {
  render: () => {
    return <Heading as="h6">タイトル</Heading>;
  },
};
