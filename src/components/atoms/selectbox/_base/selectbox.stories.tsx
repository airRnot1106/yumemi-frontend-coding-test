import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from '@storybook/test';
import { ChangeEventHandler } from 'react';
import { css } from 'styled-system/css';
import { Selectbox } from './selectbox';

const meta: Meta<typeof Selectbox> = {
  title: 'Components/Atoms/Selectbox/_Base/Selectbox',
  component: Selectbox,
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

type Story = StoryObj<typeof Selectbox>;

const mockFn = fn();

const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
  const value = e.currentTarget.value;
  mockFn(value);
};

export const Default: Story = {
  render: () => {
    return (
      <Selectbox aria-label="人口構成" onChange={handleChange}>
        <option value="1">総人口</option>
        <option value="2">年少人口</option>
        <option value="3">生産年齢人口</option>
        <option value="4">老年人口</option>
      </Selectbox>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectbox = await canvas.findByRole('combobox');
    await userEvent.selectOptions(selectbox, '1');
    expect(mockFn).toHaveBeenCalledWith('1');
    await userEvent.selectOptions(selectbox, '2');
    expect(mockFn).toHaveBeenCalledWith('2');
    await userEvent.selectOptions(selectbox, '3');
    expect(mockFn).toHaveBeenCalledWith('3');
    await userEvent.selectOptions(selectbox, '4');
    expect(mockFn).toHaveBeenCalledWith('4');
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
              <Selectbox aria-label="人口構成" size={size}>
                <option value="1">総人口</option>
                <option value="2">年少人口</option>
                <option value="3">生産年齢人口</option>
                <option value="4">老年人口</option>
              </Selectbox>
            </li>
          ),
        )}
      </ul>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Selectbox aria-label="人口構成" disabled>
        <option value="1">総人口</option>
        <option value="2">年少人口</option>
        <option value="3">生産年齢人口</option>
        <option value="4">老年人口</option>
      </Selectbox>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectbox = await canvas.findByRole('combobox');
    await userEvent.selectOptions(selectbox, '1');
    expect(mockFn).not.toHaveBeenCalled();
  },
};
