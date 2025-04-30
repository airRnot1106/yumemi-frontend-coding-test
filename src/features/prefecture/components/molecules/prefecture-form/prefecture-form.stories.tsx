import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { css } from 'styled-system/css';
import { prefectures } from '@/features/prefecture/mocks';
import { PrefectureFormPresentational } from './prefecture-form.presentational';

const meta: Meta<typeof PrefectureFormPresentational> = {
  title: 'Features/Prefecture/Components/Molecules/PrefectureForm',
  component: PrefectureFormPresentational,
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

type Story = StoryObj<typeof PrefectureFormPresentational>;

const handleSubmit = fn();

const handleReset = fn();

const Component = (
  <PrefectureFormPresentational
    onReset={handleReset}
    onSubmit={handleSubmit}
    prefectures={prefectures}
  />
);

export const Default: Story = {
  render: () => {
    return Component;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkedPrefCodes = [] as number[];
    for (const prefecture of prefectures) {
      const checkbox = await canvas.findByRole('checkbox', {
        name: prefecture.prefName,
      });
      await userEvent.click(checkbox);
      await waitFor(() => expect(checkbox).toBeChecked());
      checkedPrefCodes.push(prefecture.prefCode);
      expect(handleSubmit).toHaveBeenCalledWith(checkedPrefCodes);
    }
    const resetButton = await canvas.findByRole('button', {
      name: 'リセット',
    });
    await userEvent.click(resetButton);
    await waitFor(() => expect(handleReset).toHaveBeenCalled());
    for (const prefecture of prefectures) {
      const checkbox = await canvas.findByRole('checkbox', {
        name: prefecture.prefName,
      });
      expect(checkbox).not.toBeChecked();
    }
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
