import type { Meta, StoryObj } from '@storybook/react';

import LearnerMentor from './LearnerMentor';

const meta: Meta<typeof LearnerMentor> = {
  title: 'UI/Organisms/LearnerMentor',
  component: LearnerMentor,
};
export default meta;

// ✅ Primary story
export const Primary: StoryObj<typeof LearnerMentor> = {
  render: () => <LearnerMentor />,
};
