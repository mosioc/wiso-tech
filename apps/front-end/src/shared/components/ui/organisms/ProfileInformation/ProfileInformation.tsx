'use client';

import { useLearnerMentor } from '@features/auth/sign-up/context/LearnerMentorContextProvider';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Avatar from '@mui/material/Avatar';
import Button from '@shared/components/ui/atoms/Button/Button';
import Text from '@shared/components/ui/atoms/Text/Text';
import ExpertiseInput from '@shared/components/ui/molecules/ExpertiseInput/ExpertiseInput';
import InputWithLabel from '@shared/components/ui/molecules/InputWithLabel/InputWithLabel';

export default function ProfileInformation() {
  const { isMentor } = useLearnerMentor();

  return (
    <div className="flex h-full w-full flex-col px-6 pt-8">
      <Text
        as="h1"
        className="text-sm font-semibold text-zinc-900 lg:text-[18px] dark:text-white"
      >
        Profile Information
      </Text>

      <div className="mt-6 flex items-center justify-center gap-2">
        <Avatar
          sx={{
            width: 84,
            height: 84,
            bgcolor: '#27272a', // optional background color
          }}
        >
          <CameraAltIcon fontSize="large" className="text-gray-color" />
        </Avatar>

        <div className="grid w-full grid-cols-12 gap-2">
          <div className="col-span-12">
            <Text
              as="h2"
              className="text-sm font-semibold whitespace-nowrap text-zinc-900 lg:text-[14px] dark:text-white"
            >
              Upload a Profile Photo
            </Text>
            <Text
              as="h2"
              className="dark:text-gray-color text-[10px] font-semibold whitespace-nowrap text-zinc-900 md:text-sm lg:text-[12px]"
            >
              PNG, JPG or GIF (MAX. 5MB)
            </Text>
          </div>
          <div className="col-span-12">
            <Button variant="secondary" className="cursor-pointer">
              Upload Image
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <InputWithLabel
          id={isMentor ? 'years-of-working' : 'years-of-experience'}
          label={
            isMentor ? 'Years of Wokring in Career' : 'Have prior Experience?'
          }
          placeholder="e.g.,5"
        />
      </div>
      <div className="mt-6">
        <ExpertiseInput />
      </div>
    </div>
  );
}
