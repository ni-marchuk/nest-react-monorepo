import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const buttonClasses = tv({
  base: 'text-white font-satoshi font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 cursor-pointer',
  variants: {
    state: {
      default: 'bg-cyan-700',
      active: 'bg-amber-700',
      disabled: 'bg-cyan-950',
    },
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren & { isActive?: boolean };

export const Button: FC<ButtonProps> = ({ children, isActive = false, disabled = false, ...rest }) => {
  console.log(isActive);
  return (
    <button
      className={buttonClasses({ state: disabled ? 'disabled' : isActive ? 'active' : 'default' })}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};