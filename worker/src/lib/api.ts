import 'dotenv/config';
import { Endpoint } from '@ws-dashboard/types/endpoints';
import { MonitoringAPIResponse } from '@ws-dashboard/types/api';

export const fetchEndpointData = async (country: Endpoint) => {
	const url = process.env.ENDPOINT_URL?.replace('[COUNTRY]', country);
	if (url === undefined) throw new Error('Empty URL');

	const res = await fetch(url);
	const data = await res.json();

	return data as MonitoringAPIResponse;
};
