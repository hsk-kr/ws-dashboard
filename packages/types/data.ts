import { EndpointDataMap } from './endpoints';

export type EndpointDataPayload = {
	type: 'endpointData';
	payload: EndpointDataMap[];
};

export type UnknownPayload = EndpointDataPayload;

export type WrapData = (
	type: EndpointDataPayload['type'],
	payload: EndpointDataPayload['payload']
) => string;

export type UnwrapData = (data: string) => UnknownPayload;
