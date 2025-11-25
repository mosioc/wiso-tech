'use client';
import React, { useState, type HTMLProps, type ReactNode } from 'react';

type Props = Readonly<HTMLProps<HTMLInputElement>> & {
  icon?: ReactNode | ReactNode[];
};

export default function Input({
  type,
  placeholder,
  className,
  icon,
  ...props
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  let inputType: string | undefined;
  if (type === 'password') {
    inputType = showPassword ? 'text' : 'password';
  } else {
    inputType = type;
  }

  let iconElement: ReactNode | undefined;

  if (Array.isArray(icon)) {
    iconElement = showPassword ? icon[0] : icon[1];
  } else {
    iconElement = icon;
  }

  const classNames = [
    className,
    'form-input',
    'w-full',
    'rounded-lg',
    'border',
    'border-zinc-300',
    'bg-white',
    'p-3',
    'text-sm',
    'font-normal',
    'leading-normal',
    'text-zinc-900',
    'placeholder:text-zinc-400',
    'focus:border-primary',
    'focus:outline-0',
    'focus:ring-1',
    'focus:ring-primary/20',
    'dark:border-zinc-700',
    'dark:bg-input-color',
    'dark:text-white',
    'dark:placeholder:text-zinc-500',
  ]
    .filter(Boolean)
    .join(' ');

  // ✅ Extracted nested ternary into an independent statement

  return (
    <div className="relative w-full">
      <input
        className={classNames}
        placeholder={placeholder}
        type={inputType}
        {...props}
      />
      {type === 'password' && icon && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label="Toggle password visibility"
          className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer border-0 bg-transparent p-0 text-zinc-400"
        >
          {iconElement}
        </button>
      )}
    </div>
  );
}
