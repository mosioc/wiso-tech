import type { Meta, StoryObj } from '@storybook/react';

import AccountDetail from './AccountDetail';

const meta: Meta<typeof AccountDetail> = {
  title: 'UI/Organisms/AccountDetail',
  component: AccountDetail,
};

export const Primary: StoryObj<typeof AccountDetail> = {
  args: {
    children: 'Hello from Storybook',
  },
};

export default meta;
