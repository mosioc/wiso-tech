import React from 'react';

import InputWithLabel from '../../molecules/InputWithLabel/InputWithLabel';

export default function AccountDetail() {
  return (
    <div className="flex h-full w-full flex-col rounded-lg px-6 pt-8">
      <h2 className="text-sm font-semibold text-zinc-900 lg:text-[18px] dark:text-white">
        Account Detail
      </h2>
      <div className="mt-6 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <InputWithLabel
            id="username"
            label="Username"
            placeholder="Enter a unique username"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <InputWithLabel
            id="email"
            label="Email Address"
            placeholder="you@example.com"
          />
        </div>
        <div className="col-span-12">
          <InputWithLabel
            id="password"
            label="password"
            type="password"
            placeholder="Enter a stront password"
          />
        </div>
        <div />
      </div>
    </div>
  );
}
