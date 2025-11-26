import type { Meta, StoryObj } from '@storybook/react';

import ProfileInformation from './ProfileInformation';

const meta: Meta<typeof ProfileInformation> = {
  title: 'UI/Organisms/ProfileInformation',
  component: ProfileInformation,
};

export const Primary: StoryObj<typeof ProfileInformation> = {
  args: {
    children: 'Hello from Storybook',
  },
};

export default meta;
