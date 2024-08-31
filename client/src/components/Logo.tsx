import { TbLayoutDashboard } from 'react-icons/tb';

export default function Logo() {
  return (
    <div className="w-8 h-8 md:w-14 md:h-14 flex justify-center items-center bg-indigo-500 rounded">
      <TbLayoutDashboard color="white" className="text-xl md:text-3xl" />
    </div>
  );
}
