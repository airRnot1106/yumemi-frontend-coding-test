import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { PopulationCompositionSelectboxPresentational } from '../../atoms/population-composition-selectbox/population-composition-selectbox.presentational';
import { PopulationCompositionHeader } from './population-composition-header';

const meta: Meta<typeof PopulationCompositionHeader> = {
  title:
    'Features/PopulationComposition/Components/Molecules/PopulationCompositionHeader',
  component: PopulationCompositionHeader,
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

type Story = StoryObj<typeof PopulationCompositionHeader>;

const Component = (
  <PopulationCompositionHeader
    populationCompositionSelectbox={
      <PopulationCompositionSelectboxPresentational />
    }
  />
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
