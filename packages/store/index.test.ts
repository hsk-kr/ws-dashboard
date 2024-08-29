import { test, describe, expect } from 'vitest';
import { addEndpointData, getEndpointData } from '.';
import { Redis } from 'ioredis';

const redis = new Redis({
  host: 'test-redis',
});

describe('addEndpointData and getEndpointData', async () => {
  test('The length of the endpoint should be 1 after adding one time', async () => {
    await addEndpointData(redis, 'us-east', {} as any);
    expect(await getEndpointData(redis, 'us-east')).length(1);
  });

  test('getEndpointData should get correct data with endpoint', async () => {
    await addEndpointData(redis, 'us-west', {} as any);

    await addEndpointData(redis, 'sa-east', { test: 1 } as any);
    await addEndpointData(redis, 'sa-east', { test: 2 } as any);

    const saEastEndpointData = await getEndpointData(redis, 'sa-east');
    expect(saEastEndpointData).length(2);

    expect(saEastEndpointData[0]).toEqual({ test: 1 });
    expect(saEastEndpointData[1]).toEqual({ test: 2 });
  });

  test("endPointdata shouldn't be over 5 items.", async () => {
    for (let i = 1; i <= 6; i++) {
      await addEndpointData(redis, 'ap-southeast', {} as any);
    }

    expect(await getEndpointData(redis, 'ap-southeast')).length(5);
  });
});
