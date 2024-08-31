import { useMemo } from 'react';
import { TbCloudDataConnection } from 'react-icons/tb';

import Card from './Card';
import Table from './Table';
import useEndpointData from '../hooks/useEndpointData';

export function Stats() {
  const { latestEndpointData } = useEndpointData();
  const stats = useMemo(() => {
    if (!latestEndpointData) {
      return undefined;
    }
    const stats = latestEndpointData.response.results.stats;
    const { online, session, servers_count } = stats;

    return [
      { label: 'servers_count', value: servers_count },
      { label: 'online', value: online },
      { label: 'session', value: session },
    ];
  }, [latestEndpointData]);

  if (!stats) return null;

  return (
    <Card title="Stats" desc="Stats" icon={TbCloudDataConnection}>
      <Table items={stats} />
    </Card>
  );
}
