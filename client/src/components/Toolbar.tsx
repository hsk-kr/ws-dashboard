import { Endpoint, endpoints } from '@ws-dashboard/types/endpoints';
import useEndpointData from '../hooks/useEndpointData';
import { useMemo } from 'react';
import { formatLocalDateTime, fromNow } from '@ws-dashboard/date';

export default function Toolbar() {
  return (
    <div className="flex px-4 py-4 items-center justify-between bg-white">
      <LastUpdated />
      <RegionSelect />
    </div>
  );
}

const LastUpdated = () => {
  const { latestEndpointData } = useEndpointData();
  const lastUpdatedTime = useMemo(() => {
    if (!latestEndpointData) return undefined;

    return formatLocalDateTime(latestEndpointData.date);
  }, [latestEndpointData]);
  const timeFromNow = useMemo(() => {
    if (!latestEndpointData) return undefined;

    return fromNow(latestEndpointData.date);
  }, [latestEndpointData]);

  return (
    <span className="text-xs text-gray-600">
      Last Updated: {lastUpdatedTime} ({timeFromNow})
    </span>
  );
};

const RegionSelect = () => {
  const { region, setRegion } = useEndpointData();

  return (
    <label className="form-control w-full max-w-40">
      <select
        className="select select-bordered select-sm md:select-md"
        onChange={(e) => setRegion(e.target.value as Endpoint)}
        value={region}
      >
        <option disabled>Select Region</option>
        {endpoints.map((endpoint) => (
          <option key={endpoint} value={endpoint}>
            {endpoint}
          </option>
        ))}
      </select>
    </label>
  );
};
