import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .matches(
      /^\w+$/, // ✅ concise character class
      'Username can only contain letters, numbers, and underscores'
    )
    .required('Username is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .required('Password is required'),

  yearsOfExperience: Yup.number()
    .min(0, 'Years must be 0 or greater')
    .max(50, 'Years must be less than 50')
    .required('This field is required'),

  expertise: Yup.array()
    .of(Yup.string())
    .min(1, 'Please select at least one area of expertise')
    .required('Expertise is required'),

  profilePhoto: Yup.mixed<File>()
    .required('Profile photo is required')
    .test('fileSize', 'File too large (max 5MB)', (value) => {
      if (!value) return false; // reject empty
      return value instanceof File ? value.size <= 5 * 1024 * 1024 : false;
    })
    .test('fileType', 'Unsupported file format', (value) => {
      if (!value) return false; // reject empty
      return value instanceof File
        ? ['image/jpeg', 'image/png'].includes(value.type)
        : false;
    }),

  userType: Yup.string()
    .oneOf(['learner', 'mentor'], 'Please select a user type')
    .required('Please select how you will use the platform'),
});
