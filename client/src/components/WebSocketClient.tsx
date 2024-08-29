import { useCallback, useEffect } from 'react';

interface WebSocketClientProps {
	onConnected?: (ws: WebSocket) => void;
	onError?: (error: Event) => void;
}

const RECONNECT_TIME = 5000;

export default function WebSocketClient({
	onConnected,
	onError,
}: WebSocketClientProps) {
	const connect = useCallback(() => {
		const ws = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL);

		ws.onopen = () => {
			onConnected?.(ws);
		};

		ws.onerror = (e) => {
			ws.close();
			onError?.(e);

			setTimeout(() => {
				connect();
			}, RECONNECT_TIME);
		};

		ws.onclose = () => {
			if (ws.readyState === WebSocket.OPEN) {
				ws.close();
			}

			setTimeout(() => {
				connect();
			}, RECONNECT_TIME);
		};
	}, []);

	useEffect(() => {
		connect();
	}, []);

	return null;
}
