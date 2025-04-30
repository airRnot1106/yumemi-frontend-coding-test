import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { ChangeEventHandler } from 'react';
import { css } from 'styled-system/css';
import { POPULATION_COMPOSITION_TYPE_OPTIONS } from '@/features/population-composition/consts';
import { PopulationCompositionSelectboxPresentational } from './population-composition-selectbox.presentational';

const meta: Meta<typeof PopulationCompositionSelectboxPresentational> = {
  title:
    'Features/PopulationComposition/Components/Atoms/PopulationCompositionSelectbox',
  component: PopulationCompositionSelectboxPresentational,
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

type Story = StoryObj<typeof PopulationCompositionSelectboxPresentational>;

const mockFn = fn();

const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
  const value = e.currentTarget.value;
  mockFn(value);
};

export const Default: Story = {
  render: () => {
    return (
      <PopulationCompositionSelectboxPresentational onChange={handleChange} />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectbox = await canvas.findByRole('combobox');
    for (const { value } of POPULATION_COMPOSITION_TYPE_OPTIONS) {
      await userEvent.selectOptions(selectbox, value);
      expect(mockFn).toHaveBeenCalledWith(value);
    }
  },
};

export const Size: Story = {
  render: () => {
    return (
      <ul
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          overflow: 'auto',
          whiteSpace: 'nowrap',
        })}
      >
        {(['fit-content', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(
          (size) => (
            <li key={size}>
              <PopulationCompositionSelectboxPresentational size={size} />
            </li>
          ),
        )}
      </ul>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return <PopulationCompositionSelectboxPresentational disabled />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectbox = await canvas.findByRole('combobox');
    await userEvent.selectOptions(
      selectbox,
      POPULATION_COMPOSITION_TYPE_OPTIONS[1].value,
    );
    expect(mockFn).not.toHaveBeenCalled();
  },
};
