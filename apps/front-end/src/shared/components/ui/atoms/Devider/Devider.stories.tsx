import type { Meta, StoryObj } from '@storybook/react';

import Devider from './Devider';

const meta: Meta<typeof Devider> = {
  title: 'UI/Atoms/Devider',
  component: Devider,
};

export const Primary: StoryObj<typeof Devider> = {
  args: {
    children: 'Hello from Storybook',
  },
};

export default meta;
