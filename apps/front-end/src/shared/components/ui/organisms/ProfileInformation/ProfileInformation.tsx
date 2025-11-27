'use client';

import { useLearnerMentor } from '@features/auth/sign-up/context/LearnerMentorContextProvider';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Avatar from '@mui/material/Avatar';
import Button from '@shared/components/ui/atoms/Button/Button';
import Text from '@shared/components/ui/atoms/Text/Text';
import ExpertiseInput from '@shared/components/ui/molecules/ExpertiseInput/ExpertiseInput';
import InputWithLabel from '@shared/components/ui/molecules/InputWithLabel/InputWithLabel';
import { useField, useFormikContext } from 'formik';
import React, { useRef, useState, useEffect } from 'react';

export default function ProfileInformation() {
  const { isMentor } = useLearnerMentor();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  // Formik fields
  const [yearsField, yearsMeta] = useField('yearsOfExperience');
  const [expertiseField, expertiseMeta] = useField('expertise');
  const [photoField, photoMeta] = useField('profilePhoto');

  const { setFieldValue, setFieldTouched } = useFormikContext();

  // Set preview if profilePhoto exists (e.g., on component mount with initial values)
  useEffect(() => {
    if (photoField.value instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(photoField.value);
    }
  }, [photoField.value]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        return;
      }

      setIsImageUploading(true);

      const data = new FormData();
      data.set('file', file);

      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);

      setIsImageUploading(false);

      setFieldValue('profilePhoto', file);
      setFieldTouched('profilePhoto', true, false); // ✅ only mark photo as touched
    }
  };

  return (
    <div className="flex h-full w-full flex-col px-6 pt-8">
      <Text
        as="h1"
        className="text-sm font-semibold text-zinc-900 lg:text-[18px] dark:text-white"
      >
        Profile Information
      </Text>

      {/* Profile Photo Upload */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <Avatar
          sx={{
            width: 84,
            height: 84,
            bgcolor: '#27272a',
          }}
          src={preview || undefined}
        >
          {!preview && (
            <CameraAltIcon fontSize="large" className="text-gray-color" />
          )}
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
            <Button
              variant="secondary"
              type="button"
              disabled={isImageUploading}
              className="cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              {isImageUploading ? 'Uploading...' : 'Upload Image'}
            </Button>
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/png,image/jpeg,image/gif"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
            {/* Error message for photo */}
            {photoMeta.touched && photoMeta.error && (
              <div className="mt-1 text-sm text-red-500">{photoMeta.error}</div>
            )}
          </div>
        </div>
      </div>

      {/* Years of Experience Input */}
      <div className="mt-6">
        <InputWithLabel
          id={isMentor ? 'years-of-working' : 'years-of-experience'}
          label={
            isMentor ? 'Years of Working in Career' : 'Have prior Experience?'
          }
          placeholder="e.g., 5"
          type="number"
          {...yearsField}
          value={yearsField.value || ''}
        />
        {yearsMeta.touched && yearsMeta.error && (
          <div className="mt-1 text-sm text-red-500">{yearsMeta.error}</div>
        )}
      </div>

      {/* Expertise Input */}
      <div className="mt-6">
        <ExpertiseInput
          value={expertiseField.value}
          onChange={(value) => setFieldValue('expertise', value)}
        />
        {expertiseMeta.touched && expertiseMeta.error && (
          <div className="mt-1 text-sm text-red-500">
            {typeof expertiseMeta.error === 'string'
              ? expertiseMeta.error
              : 'Invalid expertise'}
          </div>
        )}
      </div>
    </div>
  );
}
