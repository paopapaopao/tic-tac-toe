import clsx from 'clsx';
import { type ComponentProps, type ReactNode } from 'react';

interface Props extends ComponentProps<'button'> {
  isLoading?: boolean;
}

const Button = ({ isLoading = false, ...rest }: Props): ReactNode => {
  const { children, className, disabled, ...restProps } = rest;

  const classNames: string = clsx(
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    className
  );

  return (
    <button
      disabled={disabled ?? isLoading}
      className={classNames}
      {...restProps}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
