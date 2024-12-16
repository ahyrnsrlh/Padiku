import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface IconBoxProps {
  icon: LucideIcon;
  className?: string;
}

export function IconBox({ icon: Icon, className }: IconBoxProps) {
  return (
    <div className={cn(
      "p-3 rounded-xl bg-green-50 dark:bg-green-900/30",
      className
    )}>
      <Icon className="h-5 w-5 text-green-600" />
    </div>
  );
}