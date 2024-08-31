import { useMemo } from 'react';
import { FaServer } from 'react-icons/fa';

import Card from './Card';
import Table from './Table';
import useEndpointData from '../hooks/useEndpointData';

export function Server() {
  const { latestEndpointData } = useEndpointData();
  const server = useMemo(() => {
    if (!latestEndpointData) return undefined;

    const server = latestEndpointData.response.results.stats.server;
    const { active_connections, wait_time, cpu_load, timers } = server;

    return [
      { label: 'active_connections', value: active_connections },
      { label: 'wait_time', value: wait_time },
      { label: 'cpu_load', value: cpu_load },
      { label: 'timers', value: timers },
    ];
  }, [latestEndpointData]);

  if (!server) return null;

  return (
    <Card title="Server" desc="Server Information" icon={FaServer}>
      <Table items={server} />
    </Card>
  );
}
