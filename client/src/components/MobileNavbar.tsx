import { useState } from 'react';
import Logo from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosPie } from 'react-icons/io';

export default function MobileNavbar() {
  const [fold, setFold] = useState(true);

  const toggleFold = () => setFold((prevFold) => !prevFold);

  return (
    <div>
      <div className="flex justify-between items-center py-4 px-4 border-b-[1px] border-b-slate-200">
        <GiHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={toggleFold}
        />
        <Logo />
      </div>
      {!fold && (
        <ul className="flex flex-col">
          <li className="px-4 py-4 flex gap-6 text-white items-center bg-indigo-500">
            <IoIosPie className="text-2xl" /> Dashboard
          </li>
        </ul>
      )}
    </div>
  );
}
