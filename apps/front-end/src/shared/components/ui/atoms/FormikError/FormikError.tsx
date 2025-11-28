import Text from '@shared/components/ui/atoms/Text/Text';
import type { FieldMetaProps } from 'formik';
import React from 'react';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>> & {
  field: FieldMetaProps<string>;
};

export default function FormikError(props: Props) {
  const { field } = props;
  return (
    <div {...props}>
      {field.touched && field.error && (
        <Text as="p" className="mt-1 text-sm text-red-500">
          {typeof field.error === 'string' ? field.error : 'Invalid Input'}
        </Text>
      )}
    </div>
  );
}
