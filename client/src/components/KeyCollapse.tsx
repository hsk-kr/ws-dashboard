import { BlockedKeys, TopKey } from '@ws-dashboard/types/api';
import { ReactNode, useState } from 'react';
import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md';
import { FaCopy } from 'react-icons/fa';
import useToast from '../hooks/useToast';

interface KeyCollapseProps {
  title?: ReactNode;
  data?: TopKey[] | BlockedKeys[];
}

export default function KeyCollapse({ title, data = [] }: KeyCollapseProps) {
  const [fold, setFold] = useState(true);
  const { showToast } = useToast();

  const toggleFold = () => setFold((prevFold) => !prevFold);

  const copy = (text: string) => () => {
    navigator.clipboard.writeText(text);
    showToast('Copied!');
  };

  return (
    <div className="w-full">
      <button
        className="text-sm font-bold flex gap-2 items-center"
        onClick={toggleFold}
      >
        {title} {fold ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}
      </button>
      {!fold && (
        <div className="text-xs text-gray-500 my-2 w-full flex flex-wrap break-all">
          {data.map((d) => (
            <div
              className="flex group cursor-pointer"
              onClick={copy(JSON.stringify(d))}
            >
              <FaCopy className="hidden text-black group-hover:block" />
              <span className=" group-hover:text-black group-hover:font-bold transition-all">
                {JSON.stringify(d)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
