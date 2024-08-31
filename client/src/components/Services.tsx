import { ReactNode, useMemo } from 'react';
import { FaRegWindowRestore } from 'react-icons/fa';
import Card from './Card';
import useEndpointData from '../hooks/useEndpointData';

export function Services() {
  const { latestEndpointData } = useEndpointData();

  const services = useMemo<[string, boolean][] | undefined>(() => {
    if (!latestEndpointData) return undefined;

    return Object.entries(latestEndpointData.response.results.services);
  }, [latestEndpointData]);

  if (!services) return null;

  return (
    <Card title="Services" desc="Running Services" icon={FaRegWindowRestore}>
      <div className="flex flex-col gap-2">
        {services.map(([serviceName, serviceStatus]) => (
          <Badge key={serviceName} status={serviceStatus}>
            {serviceName}
          </Badge>
        ))}
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
