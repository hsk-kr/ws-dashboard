import { FaCogs } from 'react-icons/fa';

import Card from './Card';
import Table from './Table';
import KeyCollapse from './KeyCollapse';
import useEndpointData from '../hooks/useEndpointData';
import { useMemo } from 'react';

export default function Workers() {
  const { latestEndpointData } = useEndpointData();
  const workers = useMemo(() => {
    if (!latestEndpointData) return undefined;
    return latestEndpointData.response.results.stats.server.workers;
  }, [latestEndpointData]);

  if (!workers) return null;

  return (
    <div className="my-8 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center md:text-start">Workers</h2>
      <div className="flex flex-col flex-wrap items-center md:flex-row md:items-start gap-4">
        {workers.map((worker) => (
          <Card key={worker[0]} title={worker[0]} icon={FaCogs}>
            <div className="flex flex-col gap-1">
              <Table
                items={[
                  { label: 'wait_time', value: worker[1].wait_time },
                  { label: 'workers', value: worker[1].workers },
                  { label: 'waiting', value: worker[1].waiting },
                  { label: 'idle', value: worker[1].idle },
                  { label: 'time_to_return', value: worker[1].time_to_return },
                ]}
              />
              <div className="flex flex-col gap-1">
                <KeyCollapse title="top_keys" data={worker[1].top_keys} />
                <KeyCollapse
                  title="recently_blocked_keys"
                  data={worker[1].recently_blocked_keys}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
