'use client';
import WorkIcon from '@mui/icons-material/Work';
import Button from '@shared/components/ui/atoms/Button/Button';
import Text from '@shared/components/ui/atoms/Text/Text';
import SignUpCard from '@shared/components/ui/molecules/SignUpCard/SignUpCard';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>>;

export default function LearnerMentor(props: Props) {
  const [selected, setSelected] = useState<'learner' | 'mentor' | null>(null);

  return (
    <div className="mt-6! grid px-6" {...props}>
      <div className="flex justify-start">
        <Text
          as="h2"
          className="text-sm font-semibold text-zinc-900 lg:text-[18px] dark:text-white"
        >
          How will you be using the platform?
        </Text>
      </div>
      <div className="flex items-center justify-start gap-4 pt-4">
        <SignUpCard
          h2="I'm a Learner"
          p="Ready to learn new skills and grow my knowledge."
          icon={
            <WorkIcon fontSize="large" className="text-button-green-color" />
          }
          isSelected={selected === 'learner'}
          onClick={() => setSelected('learner')}
        />
        <SignUpCard
          h2="I'm a Mentor"
          p="Ready to share my knowledge and guide others."
          icon={
            <WorkIcon fontSize="large" className="text-button-green-color" />
          }
          isSelected={selected === 'mentor'}
          onClick={() => setSelected('mentor')}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Button variant="regular" className="mt-8! w-full p-3">
          Create Account
        </Button>
        <Text
          as="h2"
          className="text-center text-[12px] text-zinc-500 md:text-sm dark:text-zinc-400"
        >
          By creating an account,{' '}
          <Text
            as="span" // ✅ use span instead of p
            className="text-button-green-color cursor-pointer text-center text-[12px] hover:underline md:text-sm"
          >
            you agree to our
          </Text>
        </Text>

        <Text
          as="p"
          className="text-center text-[12px] text-zinc-600 md:text-sm dark:text-zinc-400"
        >
          Already have an account?
          <Link
            className="text-button-green-color mx-1! text-[12px] hover:underline md:text-sm"
            href="#"
          >
            Log in
          </Link>
        </Text>
      </div>
    </div>
  );
}
