import SignUpForm from '@features/auth/sign-up/components/SignUpForm';
import React from 'react';

const Page = () => {
  return (
    <div className="bg-secondary-background-color mx-auto mt-6 mb-6 flex min-h-screen w-[80%] flex-col items-center justify-center rounded-lg border pb-6 md:w-[50%] dark:border-zinc-800">
      <SignUpForm />
    </div>
  );
};

export default Page;
