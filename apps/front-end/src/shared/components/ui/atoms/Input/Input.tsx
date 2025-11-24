import type { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement>;

export default function Input(props: Props) {
  return <div {...props} />;
}
