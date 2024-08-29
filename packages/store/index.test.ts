import { test, describe, expect } from 'vitest';
import { addEndpointData, getEndpointData } from '.';
import { Redis } from 'ioredis';

const redis = new Redis({
	host: 'test-redis',
});

describe('addEndpointData and getEndpointData', async () => {
	test('The length of the endpoint should be 1 after adding one time', async () => {
		await addEndpointData(redis, {} as any);
		expect(await getEndpointData(redis)).length(1);
	});

	test("endPointdata shouldn't be over 5 items.", async () => {
		for (let i = 1; i <= 6; i++) {
			await addEndpointData(redis, {} as any);
		}

		expect(await getEndpointData(redis)).length(5);
	});
});
