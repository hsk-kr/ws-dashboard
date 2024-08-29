import { MonitoringAPIResponse } from './api';

export const endpoints = [
	'us-east',
	'eu-west',
	'eu-central',
	'us-west',
	'sa-east',
	'ap-southeast',
] as const;

export type Endpoint = (typeof endpoints)[number];

export interface EndpointData {
	endpoint: Endpoint;
	response: MonitoringAPIResponse;
	date: string;
}

export interface EndpointError {
	endpoint: Endpoint;
	error: unknown;
}
