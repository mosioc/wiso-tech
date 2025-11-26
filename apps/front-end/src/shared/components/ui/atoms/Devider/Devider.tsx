import React from 'react';

type Props = Readonly<React.HTMLAttributes<HTMLDivElement>>;

export default function Devider(props: Props) {
  const { className, ...rest } = props;

  const classNames = [
    className,
    'mt-4',
    'w-[92%]',
    'border',
    'dark:border-zinc-800',
  ].join(' ');

  return <div {...rest} className={classNames} />;
}
