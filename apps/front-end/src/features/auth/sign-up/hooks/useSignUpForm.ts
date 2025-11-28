// hooks/useSignUpForm.ts
'use client';

import { useCallback } from 'react';

export const useSignUpForm = () => {
  const initialValues = {
    email: '',
    password: '',
    username: '',
    yearsOfExperience: null,
    expertise: [] as string[],
    profilePhoto: null as File | null,
    userType: '',
  };

  const handleSubmit = useCallback(
    async (
      values: typeof initialValues,
      { resetForm }: { resetForm: () => void }
    ) => {
      if (!values.profilePhoto) return;

      const data = new FormData();
      data.append('file', values.profilePhoto);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });

      await response.json();

      // ✅ Clear all inputs after successful submit
      resetForm();
    },
    []
  );

  return { initialValues, handleSubmit };
};
