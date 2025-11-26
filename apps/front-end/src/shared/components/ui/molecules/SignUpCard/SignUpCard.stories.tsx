import WorkIcon from '@mui/icons-material/Work';
import type { Meta, StoryObj } from '@storybook/react';

import SignUpCard from './SignUpCard';

const meta: Meta<typeof SignUpCard> = {
  title: 'UI/Molecules/SignUpCard',
  component: SignUpCard,
};
export default meta;

// ✅ Static story
export const Primary: StoryObj<typeof SignUpCard> = {
  args: {
    icon: <WorkIcon fontSize="large" className="text-button-green-color" />,
    h2: "I'm a Mentor",
    p: 'Ready to share my knowledge and guide others.',
    isSelected: true, // shows the green ring
  },
};
