import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', { name: 'タイトル' });
    expect(heading.tagName).toBe('H1');
  },
};

export const H2: Story = {
  render: () => {
    return <Heading as="h2">タイトル</Heading>;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', { name: 'タイトル' });
    expect(heading.tagName).toBe('H2');
  },
};

export const H3: Story = {
  render: () => {
    return <Heading as="h3">タイトル</Heading>;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', { name: 'タイトル' });
    expect(heading.tagName).toBe('H3');
  },
};

export const H4: Story = {
  render: () => {
    return <Heading as="h4">タイトル</Heading>;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', { name: 'タイトル' });
    expect(heading.tagName).toBe('H4');
  },
};

export const H5: Story = {
  render: () => {
    return <Heading as="h5">タイトル</Heading>;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', { name: 'タイトル' });
    expect(heading.tagName).toBe('H5');
  },
};

export const H6: Story = {
  render: () => {
    return <Heading as="h6">タイトル</Heading>;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const heading = await canvas.findByRole('heading', { name: 'タイトル' });
    expect(heading.tagName).toBe('H6');
  },
};
