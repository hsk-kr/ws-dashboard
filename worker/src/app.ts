import { Redis } from 'ioredis';
import 'dotenv/config';

import { fetchEndpointData } from './lib/api';
import { addEndpointDataMap, addEndpointError } from '@ws-dashboard/store';
import { EndpointDataMap, endpoints } from '@ws-dashboard/types/endpoints';

const redis = new Redis({
	host: process.env.REDIS_HOST,
});

const INTERVAL = Number(process.env.INTERVAL);

const isEndpointDataMap = (
	endpointDataMap: Partial<EndpointDataMap>
): endpointDataMap is EndpointDataMap => {
	for (const endpoint of endpoints) {
		if (!(endpoint in endpointDataMap)) return false;
	}

	return true;
};

const main = async () => {
	const fetchAndSaveAllEndpointData = async () => {
		const endpointDataMap: Partial<EndpointDataMap> = {};

		for (const endpoint of endpoints) {
			try {
				const data = await fetchEndpointData(endpoint);
				endpointDataMap[endpoint] = {
					endpoint,
					response: data,
					date: new Date().toISOString(),
				};
			} catch (error) {
				endpointDataMap[endpoint] = undefined;

				const endpointError = { endpoint, error };
				await addEndpointError(redis, endpointError);
				console.error(endpointError);
			}
		}

		if (isEndpointDataMap(endpointDataMap)) {
			await addEndpointDataMap(redis, endpointDataMap);
		} else {
			console.error(
				"endpointDataMap doesn'nt have all endpoints",
				endpointDataMap
			);
		}
		console.log(`${new Date().toISOString()}: Fetched all data.`);
	};

	fetchAndSaveAllEndpointData();
	setInterval(fetchAndSaveAllEndpointData, INTERVAL);
};

main();
