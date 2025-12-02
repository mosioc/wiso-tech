'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { authClient } from '@/lib/auth-client';

interface AppError extends Error {
  statusCode?: number; // optional HTTP status
  code?: string; // optional error code
}

export const useSignUpForm = () => {
  const router = useRouter();

  // --- Material UI Snackbar State ---
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const initialValues = {
    email: '',
    password: '',
    username: '',
    yearsOfExperience: '' as string | number,
    expertise: [] as string[],
    profilePhoto: null as File | null,
    userType: '',
  };

  const handleSubmit = useCallback(
    async (
      values: typeof initialValues,
      { resetForm }: { resetForm: () => void }
    ) => {
      try {
        if (!values.profilePhoto) throw new Error('Profile photo is missing');

        const formData = new FormData();
        formData.append('file', values.profilePhoto);

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload profile photo');
        }

        // Make sure we extract the URL string correctly
        const profilePhotoUrl = await uploadResponse.json();

        // 2. Auth Logic
        await authClient.signUp.email(
          {
            email: values.email,
            password: values.password,
            name: values.username,
            username: values.username,
            profilePhoto: profilePhotoUrl,
            yearsOfExperience: Number(values.yearsOfExperience),
            expertise: values.expertise,
            userType: values.userType.toUpperCase(),
          },
          {
            onSuccess: () => {
              // 1. Show the success message immediately
              setSnackbar({
                open: true,
                message: 'Account created successfully! Redirecting...',
                severity: 'success',
              });

              resetForm();

              // DELAY the redirect so the user sees the toast
              setTimeout(() => {
                router.push('/dashboard');
              }, 4000); // 2000ms = 2 seconds
            },
            onError: (ctx) => {
              setSnackbar({
                open: true,
                message: ctx.error.message || 'Registration failed',
                severity: 'error',
              });
            },
          }
        );
      } catch (err) {
        const error = err as AppError;
        setSnackbar({
          open: true,
          message: error.message || 'Something went wrong',
          severity: 'error',
        });
      }
    },
    [router]
  );

  return {
    initialValues,
    handleSubmit,
    snackbar,
    handleCloseSnackbar,
  };
};
