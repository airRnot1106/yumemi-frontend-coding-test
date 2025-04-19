import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { useState } from 'react';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Atoms/Checkbox/_Base/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange = (nextState: boolean) => {
      setChecked(nextState);
    };
    return (
      <Checkbox checked={checked} onChange={handleChange}>
        チェックボックス {checked ? 'ON' : 'OFF'}
      </Checkbox>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole('checkbox');
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).toBeChecked());
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).not.toBeChecked());
  },
};

const handleChange = fn();

export const Uncontrolled: Story = {
  render: () => {
    return <Checkbox onChange={handleChange}>チェックボックス</Checkbox>;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole('checkbox');
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).toBeChecked());
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).not.toBeChecked());
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith(false);
  },
};

export const UncontrolledDefaultChecked: Story = {
  render: () => {
    return (
      <Checkbox defaultChecked onChange={handleChange}>
        チェックボックス
      </Checkbox>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole('checkbox');
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).not.toBeChecked());
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(false);
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).toBeChecked());
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith(true);
  },
};
