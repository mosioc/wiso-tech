import type { Meta, StoryObj } from '@storybook/react';

import FormikError from './FormikError';

const meta: Meta<typeof FormikError> = {
  title: 'UI/Atoms/FormikError',
  component: FormikError,
};

export const Primary: StoryObj<typeof FormikError> = {
  args: {
    children: 'Hello from Storybook',
  },
};

export default meta;
