import { useCallback, useEffect } from 'react';

interface WebSocketClientProps {
	onConnected?: (ws: WebSocket) => void;
	onError?: (error: Event) => void;
}

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
		};
	}, []);

	useEffect(() => {
		connect();
	}, []);

	return null;
}
