import { FaCogs } from 'react-icons/fa';
import Card from './Card';
import Table from './Table';
import { Worker } from '@ws-dashboard/types/api';
import KeyCollapse from './KeyCollapse';

export default function Workers() {
  const workers: Worker[] = [
    [
      'requests:pageviews',
      {
        wait_time: 0,
        workers: 0,
        waiting: 0,
        idle: 0,
        time_to_return: 0,
        recently_blocked_keys: [],
        top_keys: [],
      },
    ],
    [
      'io',
      {
        wait_time: 0,
        workers: 563,
        waiting: 0,
        idle: 55,
        time_to_return: 0,
        recently_blocked_keys: [['3FG7RD4yF6', 1, '2024-08-31T13:41:15.300Z']],
        top_keys: [
          ['Bvy5aLQrQE', 0.08041237113402062],
          ['3FG7RD4yF6', 0.18556701030927836],
          ['rZxAi6fCTu', 0.06804123711340206],
          ['qPYBL4bhqo', 0.2824742268041237],
          ['k3C7AAdW8o', 0.088659793814433],
        ],
      },
    ],
    [
      'requests:unsupported-users',
      {
        wait_time: 0,
        workers: 0,
        waiting: 0,
        idle: 0,
        time_to_return: 0,
        recently_blocked_keys: [],
        top_keys: [],
      },
    ],
  ];

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
