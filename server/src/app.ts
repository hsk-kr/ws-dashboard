import WebSocket from 'ws';
import { Redis } from 'ioredis';
import 'dotenv/config';

import { EndpointDataMap } from '@ws-dashboard/types/endpoints';
import { wrapData } from '@ws-dashboard/data';
import {
	subscribeEndpointDataChange,
	getEndpointDataMapList,
} from '@ws-dashboard/store';

const port = Number(process.env.PORT);

const redis = new Redis({
	host: process.env.REDIS_HOST,
});
const subscriber = new Redis({
	host: process.env.REDIS_HOST,
});

let latestEndpointDataList: EndpointDataMap[] = [];

const updateLatestEndpointDataList = async () => {
	latestEndpointDataList = await getEndpointDataMapList(redis);
};

const server = () => {
	// WebSocket Server
	const wss = new WebSocket.Server({ port }, () => {
		console.log(`WebSocket Server Listening ${port}`);
	});
	
	wss.on('connection', async (ws: WebSocket) => {
		console.log('client connected');
	
		ws.on('error', (e) => {
			console.error('client connection error', e);
		});
	
		ws.on('close', () => {
			console.log('client disconnected');
		});
	
		sendLatestEndpointDataList(ws);
	});
	
	const sendLatestEndpointDataList = (ws: WebSocket) => {
		const data = wrapData('endpointData', latestEndpointDataList);
		ws.send(data);
	};
	
	const broadcastLatestEndpointDataList = () => {
		wss.clients.forEach((client) => {
			sendLatestEndpointDataList(client);
		});
	};

	// Redis
	const onEndpointDataChange = async () => {
		await updateLatestEndpointDataList();
		broadcastLatestEndpointDataList();
	};

	subscribeEndpointDataChange(subscriber, onEndpointDataChange);
};



// Main
updateLatestEndpointDataList().then(server);