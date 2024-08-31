import { endpoints } from '@ws-dashboard/types/endpoints';

export default function Toolbar() {
  return (
    <div className="flex px-4 py-4 items-center justify-between">
      <LastUpdated />
      <RegionSelect />
    </div>
  );
}

const LastUpdated = () => {
  return (
    <span className="text-xs text-gray-600">
      Last Updated: 2024-08-31 12:24:32 UTC (3 mins ago)
    </span>
  );
};

const RegionSelect = () => {
  return (
    <label className="form-control w-full max-w-40">
      <select className="select select-bordered select-sm md:select-md">
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
