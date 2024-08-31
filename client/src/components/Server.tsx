import { FaServer } from 'react-icons/fa';
import Card from './Card';
import Table from './Table';

export function Server() {
  return (
    <Card title="Server" desc="Server Information" icon={FaServer}>
      <Table
        items={[
          { label: 'active_connections', value: 1016 },
          { label: 'wait_time', value: 0 },
          { label: 'cpu_load', value: 0.04 },
          { label: 'timers', value: 100 },
        ]}
      />
    </Card>
  );
}
