import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-system/css';
import { Selectbox } from './selectbox';

const meta: Meta<typeof Selectbox> = {
  title: 'Components/Atoms/Selectbox/_Base/Selectbox',
  component: Selectbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Selectbox>;

export const Default: Story = {
  render: () => {
    return (
      <Selectbox
        className={css({
          minWidth: '10rem',
        })}
      >
        <option value="1">総人口</option>
        <option value="2">年少人口</option>
        <option value="3">生産年齢人口</option>
        <option value="4">老年人口</option>
      </Selectbox>
    );
  },
};
