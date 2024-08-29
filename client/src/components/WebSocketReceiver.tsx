import { useEffect } from 'react';
import useEndpointData from '../hooks/useEndpointData';

interface WebSocketReceiverProps {
	ws?: WebSocket;
}

export default function WebSocketReceiver({ ws }: WebSocketReceiverProps) {
	const { setEndpointData } = useEndpointData();
	useEffect(() => {
		if (!ws) return;

		ws.onmessage = (e) => {
			setEndpointData(JSON.parse(e.data));
		};
	}, [ws]);

	return null;
}
