import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
import { SiteLayout } from './site-layout';

const meta: Meta<typeof SiteLayout> = {
  title: 'Features/Site/Molecules/SiteLayout',
  component: SiteLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SiteLayout>;

const Main: FC = () => {
  return (
    <main>
      <h1>Site Layout</h1>
      <p>This is the main content area.</p>
    </main>
  );
};

const Component = (
  <SiteLayout>
    <Main />
  </SiteLayout>
);

export const Default: Story = {
  render: () => {
    return Component;
  },
};

export const XSmall: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xs',
    },
  },
  render: () => {
    return Component;
  },
};

export const Small: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'sm',
    },
  },
  render: () => {
    return Component;
  },
};

export const Medium: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'md',
    },
  },
  render: () => {
    return Component;
  },
};

export const Large: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'lg',
    },
  },
  render: () => {
    return Component;
  },
};

export const XLarge: Story = {
  tags: ['!autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'xl',
    },
  },
  render: () => {
    return Component;
  },
};
