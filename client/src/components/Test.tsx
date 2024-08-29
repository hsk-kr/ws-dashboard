import { useState } from 'react';
import WebSocketClient from './WebSocketClient';
import WebSocketReceiver from './WebSocketReceiver';
import useMonitoringData from '../hooks/useMonitoringData';

export default function Test() {
	const [ws, setWs] = useState<WebSocket>();
	const [error, setError] = useState<Event>();
	const { monitoringData } = useMonitoringData();

	return (
		<div>
			<WebSocketClient onConnected={setWs} onError={setError} />
			<WebSocketReceiver ws={ws} />
			Hello Vite~!
		</div>
	);
}
