import Text from '@shared/components/ui/atoms/Text/Text';
import React from 'react';

type Props = Readonly<React.HTMLAttributes<HTMLButtonElement>> & {
  h2?: React.ReactNode;
  p?: React.ReactNode;
  icon?: React.ReactNode;
  isSelected?: boolean;
};

export default function SignUpCard(props: Props) {
  const { h2, p, icon, isSelected, className, ...rest } = props;

  const classNames = [
    className,
    'flex',
    'flex-col',
    'items-center',
    'bg-input-color',
    'rounded-lg',
    'p-8',
    'cursor-pointer',
    isSelected ? 'ring-3 ring-green-color' : null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={classNames} {...rest}>
      {icon}
      <div className="mt-2 flex flex-col items-center">
        <Text
          as="h2"
          className="mt-2! text-sm font-bold text-zinc-900 lg:text-[18px] dark:text-white"
        >
          {h2}
        </Text>
        <Text className="mt-1! text-sm text-zinc-500 dark:text-zinc-400">
          {p}
        </Text>
      </div>
    </button>
  );
}
