import { test, expect } from 'vitest';
import { addEndpointDataMap, getEndpointDataMapList } from '.';
import { Redis } from 'ioredis';

const redis = new Redis({
	host: 'test-redis',
});

test('The length of the endpoint should be 1 after adding one time', async () => {
	await addEndpointDataMap(redis, {} as any);
	expect(await getEndpointDataMapList(redis)).length(1);
});

test("endPointdata shouldn't be over 5 items.", async () => {
	for (let i = 1; i <= 31; i++) {
		await addEndpointDataMap(redis, {} as any);
	}

	expect(await getEndpointDataMapList(redis)).length(30);
});
