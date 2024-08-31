import { TbCloudDataConnection } from 'react-icons/tb';
import Card from './Card';
import Table from './Table';

export function Stats() {
  return (
    <Card title="Stats" desc="Stats" icon={TbCloudDataConnection}>
      <Table
        items={[
          { label: 'servers_count', value: 2 },
          { label: 'online', value: 1557 },
          { label: 'session', value: 0 },
        ]}
      />
    </Card>
  );
}
