import { Redis } from 'ioredis';
import {
  Endpoint,
  EndpointError,
  EndpointData,
} from '@ws-dashboard/types/endpoints';
import { MonitoringAPIResponse } from '@ws-dashboard/types/api';

export const MAX_STORE_ENDPOINTS_LENGTH = 5;

export const ENDPOINT_ERROR_REDIS_KEY = 'endpoint_error';

export const addEndpointData = async (
  redis: Redis,
  endpoint: Endpoint,
  data: MonitoringAPIResponse
) => {
  const length = await redis.llen(endpoint);

  if (length >= MAX_STORE_ENDPOINTS_LENGTH) {
    await redis.lpop(endpoint);
  }

  const endpointData: EndpointData = {
    endpoint,
    response: data,
    date: new Date().toISOString(),
  };

  await redis.rpush(endpoint, JSON.stringify(endpointData));
};

export const getEndpointData = async (
  redis: Redis,
  endpoint: Endpoint
): Promise<EndpointData[]> => {
  return (await redis.lrange(endpoint, 0, -1)).map((d) => JSON.parse(d));
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
