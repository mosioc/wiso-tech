'use client';
import FormikError from '@shared/components/ui/atoms/FormikError/FormikError';
import InputWithLabel from '@shared/components/ui/molecules/InputWithLabel/InputWithLabel';
import { useField } from 'formik';
import React from 'react';

export default function AccountDetail() {
  const [usernameField, usernameMeta] = useField('username');
  const [emailField, emailMeta] = useField('email');
  const [passwordField, passwordMeta] = useField('password');

  return (
    <div className="flex h-full w-full flex-col rounded-lg px-6 pt-8">
      <h2 className="text-sm font-semibold text-zinc-900 lg:text-[18px] dark:text-white">
        Account Detail
      </h2>
      <div className="mt-6 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
          <InputWithLabel
            id="username"
            {...usernameField} // ✅ controlled props from Formik
            label="Username"
            placeholder="Enter a unique username"
          />
          <FormikError field={usernameMeta} />
        </div>

        <div className="col-span-12 md:col-span-6">
          <InputWithLabel
            id="email"
            {...emailField}
            label="Email Address"
            placeholder="you@example.com"
          />
          <FormikError field={emailMeta} />
        </div>

        <div className="col-span-12">
          <InputWithLabel
            id="password"
            {...passwordField}
            label="Password"
            type="password"
            placeholder="Enter a strong password"
          />
          <FormikError field={passwordMeta} />
        </div>
      </div>
    </div>
  );
}
