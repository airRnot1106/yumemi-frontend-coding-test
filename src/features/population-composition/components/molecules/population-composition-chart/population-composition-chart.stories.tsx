import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { POPULATION_COMPOSITION_TYPE_OPTIONS } from '@/features/population-composition/consts';
import { data } from '@/features/population-composition/mocks';
import { PopulationCompositionChartPresentational } from './population-composition-chart.presentational';

const meta: Meta<typeof PopulationCompositionChartPresentational> = {
  title:
    'Features/PopulationComposition/Components/Molecules/PopulationCompositionChart',
  component: PopulationCompositionChartPresentational,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        className={css({
          width: '100vw',
          height: '100vh',
        })}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PopulationCompositionChartPresentational>;

const Component = (
  <PopulationCompositionChartPresentational
    populationCompositions={data.populationCompositions}
    type={POPULATION_COMPOSITION_TYPE_OPTIONS[0]}
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
