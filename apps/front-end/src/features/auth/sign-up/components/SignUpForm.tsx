'use client';
import { LearnerMentorProvider } from '@features/auth/sign-up/context/LearnerMentorContextProvider';
import { useSignUpForm } from '@features/auth/sign-up/hooks/useSignUpForm';
import { signUpValidationSchema } from '@features/auth/sign-up/types';
import Devider from '@shared/components/ui/atoms/Devider/Devider';
import Snackbar from '@shared/components/ui/molecules/Snackbar/Snackbar';
import AccountDetail from '@shared/components/ui/organisms/AccountDetail/AccountDetail';
import LearnerMentor from '@shared/components/ui/organisms/LearnerMentor/LearnerMentor';
import ProfileInformation from '@shared/components/ui/organisms/ProfileInformation/ProfileInformation';
import { Formik, Form } from 'formik';
import React from 'react';

const SignUpForm = () => {
  const { initialValues, handleSubmit, snackbar, handleCloseSnackbar } =
    useSignUpForm();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex w-full flex-col">
            <LearnerMentorProvider>
              <AccountDetail />
              <Devider />
              <ProfileInformation />
              <Devider className="mt-6!" />
              <LearnerMentor isSubmitting={isSubmitting} />
            </LearnerMentorProvider>
          </Form>
        )}
      </Formik>

      {/* 2. Add the Snackbar here */}
      <Snackbar
        open={snackbar.open}
        time={4000} // use your `time` prop instead of autoHideDuration
        message={snackbar.message}
        severity={snackbar.severity}
        handleCloseSnackbar={handleCloseSnackbar}
      />
    </>
  );
};

export default SignUpForm;
