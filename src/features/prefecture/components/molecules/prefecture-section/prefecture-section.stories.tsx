import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { prefectures } from '@/features/prefecture/mocks';
import { PrefectureFormPresentational } from '../prefecture-form/prefecture-form.presentational';
import { PrefectureSection } from './prefecture-section';

const meta: Meta<typeof PrefectureSection> = {
  title: 'Features/Prefecture/Components/Molecules/PrefectureSection',
  component: PrefectureSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        className={css({
          paddingBlock: '1rem',
          paddingInline: '2rem',
        })}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PrefectureSection>;

const handleSubmit = (prefCodes: number[]) => {
  console.log(prefCodes);
};

const handleReset = () => {
  console.log('reset');
};

const Component = (
  <PrefectureSection
    prefectureForm={
      <PrefectureFormPresentational
        onReset={handleReset}
        onSubmit={handleSubmit}
        prefectures={prefectures}
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
