import type { Meta, StoryObj } from '@storybook/react';

import InputWithLabel from './InputWithLabel';

const meta: Meta<typeof InputWithLabel> = {
  title: 'UI/Molecules/InputWithLabel',
  component: InputWithLabel,
};

export const Primary: StoryObj<typeof InputWithLabel> = {
  args: {
    label: 'Username',
    placeholder: 'Enter a unique username',
  },
};

export default meta;
