import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  title?: string;
  icon?: IconType;
  desc?: string;
  children?: ReactNode;
}

export default function Card({ title, desc, icon: Icon, children }: CardProps) {
  return (
    <div className="w-full max-w-80 h-80 bg-white flex flex-col p-8 shadow-md rounded-xl gap-2">
      {(title !== undefined || desc !== undefined) && (
        <div className="flex flex-col gap-1">
          {title && (
            <div className="flex gap-3">
              {Icon && <Icon className="text-indigo-500 text-2xl" />}
              <h2 className="font-bold">{title}</h2>
            </div>
          )}
          {desc && <span className="text-xs text-gray-600 px-1">{desc}</span>}
        </div>
      )}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
