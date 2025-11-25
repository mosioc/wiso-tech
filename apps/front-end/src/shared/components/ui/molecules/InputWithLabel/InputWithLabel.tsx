import type { HTMLProps } from 'react';

import Input from '../../atoms/Input/Input';
import Text from '../../atoms/Text/Text';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly label: string;
}

export default function InputWithLabel({ label, ...props }: Props) {
  return (
    <div className="mb-medium grid gap-2">
      <Text
        as="label"
        htmlFor={props.id}
        className="cursor-pointer text-[14px] text-white lg:text-[16px]"
      >
        {label}
      </Text>
      <Input {...props} />
    </div>
  );
}
