import { Redis } from 'ioredis';
import { Endpoint } from '@ws-dashboard/types/endpoints';
import { MonitoringAPIResponse } from '@ws-dashboard/types/api';

export const MAX_STORE_ENDPOINTS_LENGTH = 5;

export const addEndpointData = async (
	redis: Redis,
	endpoint: Endpoint,
	data: MonitoringAPIResponse
) => {
	const length = await redis.llen(endpoint);

	if (length >= MAX_STORE_ENDPOINTS_LENGTH) {
		await redis.rpop(endpoint);
	}

	await redis.lpush(endpoint, JSON.stringify(data));
};

export const getEndpointData = async (
	redis: Redis,
	endpoint: Endpoint
): Promise<MonitoringAPIResponse[]> => {
	return (await redis.lrange(endpoint, 0, -1)).map((d) => JSON.parse(d));
};
