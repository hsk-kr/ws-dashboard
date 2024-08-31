import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { IoIosPie } from 'react-icons/io';
import Logo from './Logo';

export default function Sidebar() {
  return (
    <div className="px-8 py-10 w-80">
      <div className="flex gap-3 items-center mb-12 cursor-pointer">
        <Logo />
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <div className="px-2">
        <NavLinks />
      </div>
    </div>
  );
}

const NavLinks = () => {
  return (
    <ul className="flex gap-6">
      <NavLink icon={IoIosPie}>Dashboard</NavLink>
    </ul>
  );
};

const NavLink = ({
  children,
  icon: Icon,
}: {
  children?: ReactNode;
  icon?: IconType;
}) => {
  // Since there is only one item, apply the active color, but if it has more
  // items in the future, color differerence between active/inactive should be considered.
  return (
    <li className="flex gap-6 items-center bg-indigo-500 text-white text-lg w-full py-4 px-6 rounded-2xl cursor-pointer hover:opacity-90 transition-all">
      {Icon && <Icon className="text-xl" />}
      {children}
    </li>
  );
};
