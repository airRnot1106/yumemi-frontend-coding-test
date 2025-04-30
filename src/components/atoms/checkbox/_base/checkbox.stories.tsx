import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { ChangeEventHandler, useState } from 'react';
import { css } from 'styled-system/css';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Atoms/Checkbox/_Base/Checkbox',
  component: Checkbox,
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

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    return <Checkbox>Button</Checkbox>;
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
              <Checkbox size={size}>チェックボックス</Checkbox>
            </li>
          ),
        )}
      </ul>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const checked = e.currentTarget.checked;
      setChecked(checked);
    };
    return (
      <Checkbox checked={checked} disabled onChange={handleChange}>
        チェックボックス {checked ? 'ON' : 'OFF'}
      </Checkbox>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole('checkbox');
    await userEvent.click(checkbox);
    await waitFor(() => expect(checkbox).not.toBeChecked());
  },
};
