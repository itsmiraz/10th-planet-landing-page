import React, { useRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid',
  className = '',
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent) => {
    const button = buttonRef.current;
    if (!button) return;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const existingRipple = button.getElementsByClassName('ripple')[0];
    if (existingRipple) existingRipple.remove();

    button.appendChild(circle);
  };

  const baseClasses = `relative overflow-hidden leading-[100%] text-[22px] px-[30px] py-[14px] rounded-[9px] transition-all duration-300 ease-in-out active:scale-95`;

  const variantClasses =
    variant === 'solid'
      ? 'bg-[#F58215] text-white hover:brightness-90'
      : 'border border-white text-white bg-transparent hover:bg-white hover:text-[#F58215]';

  return (
    <button
      {...props}
      ref={buttonRef}
      onClick={(e) => {
        createRipple(e);
        props.onClick?.(e);
      }}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};
