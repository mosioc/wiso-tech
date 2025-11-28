import type { Meta, StoryObj } from '@storybook/react';

import ExpertiseInput from './ExpertiseInput';

const meta: Meta<typeof ExpertiseInput> = {
  title: 'UI/Molecules/ExpertiseInput',
  component: ExpertiseInput,
};

export const Primary: StoryObj<typeof ExpertiseInput> = {
  args: {},
};

export default meta;
