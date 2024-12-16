import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'gradient';
}

export function Card({ 
  children, 
  className, 
  variant = 'default',
  ...props 
}: CardProps) {
  return (
    <div 
      className={cn(
        "rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300",
        variant === 'default' && "bg-white dark:bg-gray-800",
        variant === 'gradient' && "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}