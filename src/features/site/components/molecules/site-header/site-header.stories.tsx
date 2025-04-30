import type { Meta, StoryObj } from '@storybook/react';
import { SiteHeader } from './site-header';

const meta: Meta<typeof SiteHeader> = {
  title: 'Features/Site/Molecules/SiteHeader',
  component: SiteHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SiteHeader>;

export const Default: Story = {
  render: () => {
    return <SiteHeader />;
  },
};

const Component = <SiteHeader />;

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
