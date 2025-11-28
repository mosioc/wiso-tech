import Input from '@shared/components/ui/atoms/Input/Input';
import Text from '@shared/components/ui/atoms/Text/Text';
import type { HTMLProps } from 'react';

interface Props extends Readonly<HTMLProps<HTMLInputElement>> {
  readonly label: string;
}

export default function InputWithLabel({ label, ...props }: Props) {
  return (
    <div className="mb-medium grid gap-2">
      <Text
        as="label"
        htmlFor={props.id}
        className="text-gray-color cursor-pointer text-[14px] lg:text-[16px]"
      >
        {label}
      </Text>
      <Input {...props} />
    </div>
  );
}
