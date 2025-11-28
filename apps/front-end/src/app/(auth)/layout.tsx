import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background-color flex min-h-screen flex-col pt-4">
      <div className="flex flex-col items-center">
        <h1 className="text-xl leading-tight font-bold tracking-tight text-zinc-900 md:text-2xl lg:text-4xl dark:text-white">
          Be part of our community
        </h1>
        <p className="mt-2 text-[11px] text-zinc-600 md:text-[12px] lg:text-base dark:text-zinc-400">
          Create an account to start your learning and mentoring journey
        </p>
      </div>

      {children}
    </div>
  );
};

export default AuthLayout;
