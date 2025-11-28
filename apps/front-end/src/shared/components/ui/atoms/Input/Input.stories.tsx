import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Atoms/Input',
  component: Input,
};

export const Primary: StoryObj<typeof Input> = {
  args: {
    placeholder: 'Enter a unique username',
    type: 'password',
    icon: [
      <VisibilityIcon key="visible" fontSize="small" />,
      <VisibilityOffIcon key="hidden" fontSize="small" />,
    ],
  },
};

export default meta;
