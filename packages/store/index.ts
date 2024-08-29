import { Redis } from 'ioredis';
import { EndpointError, EndpointDataMap } from '@ws-dashboard/types/endpoints';

export const MAX_STORE_ENDPOINTS_LENGTH = 5;

export const ENDPOINT_ERROR_REDIS_KEY = 'endpoint_error';
export const ENDPOINT_REDIS_KEY = 'endpoint';
export const ENDPOINT_DATA_CHANGE_CHANNEL = 'ENDPOINT_DATA_CHANGE_CHANNEL';

export const addEndpointDataMap = async (
	redis: Redis,
	data: EndpointDataMap
) => {
	const length = await redis.llen(ENDPOINT_REDIS_KEY);

	if (length >= MAX_STORE_ENDPOINTS_LENGTH) {
		await redis.lpop(ENDPOINT_REDIS_KEY);
	}

	await redis.rpush(ENDPOINT_REDIS_KEY, JSON.stringify(data));
	redis.publish(ENDPOINT_DATA_CHANGE_CHANNEL, 'data change');
};

export const getEndpointDataMapList = async (
	redis: Redis
): Promise<EndpointDataMap[]> => {
	return (await redis.lrange(ENDPOINT_REDIS_KEY, 0, -1)).map((d) =>
		JSON.parse(d)
	);
};

export const addEndpointError = async (redis: Redis, error: EndpointError) => {
	await redis.rpush(ENDPOINT_ERROR_REDIS_KEY, JSON.stringify(error));
};

export const getEndpointDataError = async (
	redis: Redis
): Promise<EndpointError[]> => {
	return (await redis.lrange(ENDPOINT_ERROR_REDIS_KEY, 0, -1)).map((d) =>
		JSON.parse(d)
	);
};

export const subscribeEndpointDataChange = (redis: Redis, cb: VoidFunction) => {
	redis.subscribe(ENDPOINT_DATA_CHANGE_CHANNEL, (err) => {
		if (err) {
			console.error('subscribe error', err);
			return;
		}
		console.log(`subscribed ${ENDPOINT_DATA_CHANGE_CHANNEL} channel on Redis.`);
	});

	redis.on('message', () => {
		cb();
	});
};
