import { useEffect } from 'react';

interface WebSocketReceiverProps {
	ws?: WebSocket;
}

export default function WebSocketReceiver({ ws }: WebSocketReceiverProps) {
	useEffect(() => {
		if (!ws) return;

		ws.onmessage = (e) => {
			console.log(e);
		};
	}, [ws]);

	return null;
}
