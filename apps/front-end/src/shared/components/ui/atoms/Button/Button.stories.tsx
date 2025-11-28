import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Atoms/Button',
  component: Button,
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'create account',
  },
};

export default meta;
