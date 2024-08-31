import { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Toolbar from '../components/Toolbar';

interface BasicTemplateProps {
  children?: ReactNode;
}

export default function BasicTemplate({ children }: BasicTemplateProps) {
  return (
    <div className="flex h-full font-mono">
      <div className="h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col h-full">
        <Toolbar />
        <main className="flex-1 h-full bg-slate-50">{children}</main>
      </div>
    </div>
  );
}
