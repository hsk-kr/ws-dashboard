import { ReactNode } from 'react';
import { FaRegWindowRestore } from 'react-icons/fa';
import Card from './Card';

export function Services() {
  return (
    <Card title="Services" desc="Running Services" icon={FaRegWindowRestore}>
      <div className="flex flex-col gap-2">
        <Badge status={true}>Redis</Badge>
        <Badge status={true}>Database</Badge>
      </div>
    </Card>
  );
}

const Badge = ({
  children,
  status,
}: {
  children: ReactNode;
  status: boolean;
}) => {
  return (
    <div
      className={`w-fit text-sm px-4 py-2 ${status ? 'bg-green-500' : 'bg-red-500'} text-white rounded-xl`}
    >
      {children}
    </div>
  );
};
