import { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';
import Toolbar from '../components/Toolbar';
import MobileNavbar from '../components/MobileNavbar';

interface BasicTemplateProps {
  children?: ReactNode;
}

export default function BasicTemplate({ children }: BasicTemplateProps) {
  return (
    <div className="flex h-full font-mono">
      <div className="h-full hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col h-full">
        <div className="md:hidden">
          <MobileNavbar />
        </div>
        <div className="hidden md:block">
          <Toolbar />
        </div>
        <main className="flex-1 h-full overflow-auto bg-slate-50 p-8">
          {children}
        </main>
        <div className="md:hidden">
          <Toolbar />
        </div>
      </div>
    </div>
  );
}
