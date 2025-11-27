import type { ButtonHTMLAttributes } from 'react';

interface Props extends Readonly<ButtonHTMLAttributes<HTMLButtonElement>> {
  readonly variant?: 'regular' | 'error' | 'secondary';
}

export default function Button({
  className,
  variant = 'regular',
  ...props
}: Props) {
  const classNames = [
    className,
    'rounded-lg',
    'p-2',
    'text-sm',
    'px-4',
    'cursor-pointer',
  ];

  switch (variant) {
    case 'secondary':
      classNames.push(
        'bg-input-color',
        'text-white',
        'text-input-color',
        'font-bold'
      );
      break;
    case 'regular':
    default:
      classNames.push(
        'bg-button-green-color',
        'text-background-color',
        'font-bold'
      );
      break;
  }

  return <button className={classNames.join(' ')} {...props} />;
}
