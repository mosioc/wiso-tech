'use client';
import { useLearnerMentor } from '@features/auth/sign-up/context/LearnerMentorContextProvider';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Text from '@shared/components/ui/atoms/Text/Text';
import React from 'react';

const skills = [
  'UI Design',
  'Product Management',
  'Python',
  'Leadership',
  'UX Research',
];

export default function ExpertiseInput() {
  const [selectedSkills, setSelectedSkills] = React.useState<string[]>([]);
  const { isMentor } = useLearnerMentor();

  return (
    <Autocomplete
      multiple
      freeSolo
      options={skills}
      value={selectedSkills}
      onChange={(event, newValue) => setSelectedSkills(newValue)}
      slotProps={{
        chip: {
          sx: { bgcolor: 'rgba(12, 170, 91, 1)', color: 'white' },
        },
      }}
      renderInput={(params) => (
        <div>
          <Text
            as="label"
            htmlFor="expertise-input"
            className="cursor-pointer text-[#71717b]"
          >
            {isMentor
              ? 'Add skill you can mentor others in'
              : 'Add skill you want to learn'}
          </Text>
          <TextField
            {...params}
            id="expertise-input"
            className="bg-input-color mt-2! rounded-lg"
            placeholder={
              selectedSkills.length === 0
                ? 'e.g. Python, Leadership, UX Research'
                : ''
            }
            sx={{
              '& .MuiOutlinedInput-input': {
                color: '#ffffff',
                '&::placeholder': {
                  color: '#71717b',
                  opacity: 1,
                },
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: '0.75rem',
              },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#3f3f46',
                borderRadius: '0.75rem',
              },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#3f3f46',
                },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: '#ffffff',
                  borderWidth: '1px',
                },
              '& .MuiOutlinedInput-root.Mui-focused': {
                boxShadow: 'none',
              },
              '& .MuiInputLabel-root': {
                color: '#71717b',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#71717b',
              },
            }}
          />
          {/* 👇 Helper text below the TextField */}
          <Text as="div" className="mt-1 text-sm text-[#71717b]">
            {isMentor
              ? 'List skills you can mentor others in. e.g., Python, Leadership, UX Research'
              : 'List skills you want to learn. e.g., Python, Leadership, UX'}
          </Text>
        </div>
      )}
    />
  );
}
