export const endpoints = [
	'us-east',
	'eu-west',
	'eu-central',
	'us-west',
	'sa-east',
	'ap-southeast',
] as const;

export type Endpoint = (typeof endpoints)[number];

export interface EndpointError {
	endpoint: Endpoint;
	error: unknown;
}
