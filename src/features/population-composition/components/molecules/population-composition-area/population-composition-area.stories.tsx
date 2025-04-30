import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { POPULATION_COMPOSITION_TYPE_OPTIONS } from '@/features/population-composition/consts';
import { data } from '@/features/population-composition/mocks';
import { PopulationCompositionSelectboxPresentational } from '../../atoms/population-composition-selectbox/population-composition-selectbox.presentational';
import { PopulationCompositionChartPresentational } from '../population-composition-chart/population-composition-chart.presentational';
import { PopulationCompositionHeader } from '../population-composition-header';
import { PopulationCompositionArea } from './population-composition-area';

const meta: Meta<typeof PopulationCompositionHeader> = {
  title:
    'Features/PopulationComposition/Components/Molecules/PopulationCompositionArea',
  component: PopulationCompositionHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        className={css({
          width: '94vw',
          height: '100vh',
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
  <PopulationCompositionArea
    chart={
      <PopulationCompositionChartPresentational
        populationCompositions={data.populationCompositions}
        type={POPULATION_COMPOSITION_TYPE_OPTIONS[0]}
      />
    }
    header={
      <PopulationCompositionHeader
        populationCompositionSelectbox={
          <PopulationCompositionSelectboxPresentational />
        }
      />
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
