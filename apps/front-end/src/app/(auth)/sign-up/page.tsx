import Devider from '@shared/components/ui/atoms/Devider/Devider';
import AccountDetail from '@shared/components/ui/organisms/AccountDetail/AccountDetail';
import LearnerMentor from '@shared/components/ui/organisms/LearnerMentor/LearnerMentor';
import ProfileInformation from '@shared/components/ui/organisms/ProfileInformation/ProfileInformation';
import React from 'react';

const Page = () => {
  return (
    <div className="bg-secondary-background-color mx-auto mt-8 flex min-h-screen w-[80%] flex-col items-center justify-center rounded-lg border md:w-[50%] dark:border-zinc-800">
      <AccountDetail />
      <Devider />
      <ProfileInformation />
      <Devider className="mt-6!" />
      <LearnerMentor />
    </div>
  );
};

export default Page;
