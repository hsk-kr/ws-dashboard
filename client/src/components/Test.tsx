import { useEffect, useState } from 'react';
import WebSocketClient from './WebSocketClient';
import WebSocketReceiver from './WebSocketReceiver';
import useEndpointData from '../hooks/useEndpointData';

export default function Test() {
	const [ws, setWs] = useState<WebSocket>();
	const [error, setError] = useState<Event>();
	const { endpointData } = useEndpointData();

	useEffect(() => {
		console.log('data', endpointData);
	}, [endpointData]);

	return (
		<div>
			<WebSocketClient onConnected={setWs} onError={setError} />
			<WebSocketReceiver ws={ws} />
			<div className="btn text-3xl font-bold">Hello Vite~!</div>
		</div>
	);
}
