import React from 'react';

import AccountDetail from '../../../shared/components/ui/organisms/AccountDetail/AccountDetail';

const Page = () => {
  return (
    <div className="bg-secondary-background-color mx-auto mt-8 flex max-h-screen w-[80%] flex-col items-center justify-center rounded-lg border md:w-[50%] dark:border-zinc-800">
      <AccountDetail />
      <div className="w-[92%] border dark:border-zinc-800" />
    </div>
  );
};

export default Page;
