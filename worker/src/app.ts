import { Redis } from 'ioredis';
import 'dotenv/config';

import { fetchEndpointData } from './lib/api';
import { addEndpointData } from '@ws-dashboard/store';
import { endpoints } from '@ws-dashboard/types/endpoints';

const redis = new Redis({
	host: process.env.REDIS_HOST,
});

const INTERVAL = Number(process.env.INTERVAL);

const main = async () => {
	const fetchAndSaveAllEndpointData = async () => {
		for (const endpoint of endpoints) {
			try {
				const data = await fetchEndpointData(endpoint);
				await addEndpointData(redis, endpoint, data);
			} catch (error) {
				console.error({ endpoint, error });
			}
		}

		console.log(`${new Date().toISOString()}: Fetched all data.`);
	};

	fetchAndSaveAllEndpointData();
	setInterval(fetchAndSaveAllEndpointData, INTERVAL);
};

main();
