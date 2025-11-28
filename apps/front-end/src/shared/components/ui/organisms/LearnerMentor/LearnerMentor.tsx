'use client';
import { useLearnerMentor } from '@features/auth/sign-up/context/LearnerMentorContextProvider';
import WorkIcon from '@mui/icons-material/Work';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@shared/components/ui/atoms/Button/Button';
import Text from '@shared/components/ui/atoms/Text/Text';
import SignUpCard from '@shared/components/ui/molecules/SignUpCard/SignUpCard';
import { useFormikContext } from 'formik';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>> & {
  isSubmitting?: boolean;
};

export default function LearnerMentor(props: Props) {
  const [selected, setSelected] = useState<'learner' | 'mentor' | null>(
    'learner'
  );

  const { isSubmitting, ...rest } = props;

  const { setSelected: setSelectedMentorOrLearner } = useLearnerMentor();

  const { setFieldValue } = useFormikContext();

  // 3. Set the default value when the component mounts
  useEffect(() => {
    setFieldValue('userType', 'learner');
  }, [setFieldValue]);

  return (
    <div className="mt-6! grid px-6" {...rest}>
      <div className="flex justify-start">
        <Text
          as="h2"
          className="text-sm font-semibold text-zinc-900 lg:text-[18px] dark:text-white"
        >
          How will you be using the platform?
        </Text>
      </div>

      <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
        <SignUpCard
          h2="I'm a Learner"
          p="Ready to learn new skills and grow my knowledge."
          icon={
            <WorkIcon fontSize="large" className="text-button-green-color" />
          }
          isSelected={selected === 'learner'}
          onClick={() => {
            setSelected('learner');
            setSelectedMentorOrLearner('learner');
            setFieldValue('userType', 'learner');
          }}
        />
        <SignUpCard
          h2="I'm a Mentor"
          p="Ready to share my knowledge and guide others."
          icon={
            <WorkIcon fontSize="large" className="text-button-green-color" />
          }
          isSelected={selected === 'mentor'}
          onClick={() => {
            setSelected('mentor');
            setSelectedMentorOrLearner('mentor');
            setFieldValue('userType', 'mentor');
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="regular"
          className="mt-8 flex w-full items-center justify-center gap-2 p-3"
        >
          Create Account
          {isSubmitting && <CircularProgress size={16} color="inherit" />}
        </Button>
        <Text
          as="h2"
          className="text-center text-[11px] text-zinc-500 md:text-[13px] dark:text-zinc-400"
        >
          By creating an account,{' '}
          <Text
            as="span"
            className="text-button-green-color cursor-pointer text-center text-[11px] hover:underline md:text-[13px]"
          >
            you agree to our term.
          </Text>
        </Text>

        <Text
          as="p"
          className="text-center text-[11px] text-zinc-600 md:text-[13px] dark:text-zinc-400"
        >
          Already have an account?
          <Link
            className="text-button-green-color mx-1! text-[11px] hover:underline md:text-[13px]"
            href="#"
          >
            Log in
          </Link>
        </Text>
      </div>
    </div>
  );
}
