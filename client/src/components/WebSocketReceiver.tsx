import { useEffect } from 'react';
import useEndpointData from '../hooks/useEndpointData';
import { unwrapData } from '@ws-dashboard/data';

interface WebSocketReceiverProps {
  ws?: WebSocket;
}

export default function WebSocketReceiver({ ws }: WebSocketReceiverProps) {
  const { setEndpointData } = useEndpointData();
  useEffect(() => {
    if (!ws) return;

    ws.onmessage = (e) => {
      const data = unwrapData(e.data);

      if (data.type === 'endpointData') {
        setEndpointData(data.payload);
      }
    };
  }, [ws]);

  return null;
}
