import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export function Button({
  children,
  icon: Icon,
  variant = 'primary',
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center px-6 py-3 rounded-full transition-colors",
        variant === 'primary' && "bg-green-600 text-white hover:bg-green-700",
        variant === 'secondary' && "bg-green-50 text-green-600 hover:bg-green-100",
        variant === 'outline' && "border border-green-600 text-green-600 hover:bg-green-50",
        disabled && "opacity-50 cursor-not-allowed",
        fullWidth && "w-full justify-center",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
    </button>
  );
}