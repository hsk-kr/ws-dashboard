import { useState } from 'react';
import WebSocketClient from '../components/WebSocketClient';
import WebSocketReceiver from '../components/WebSocketReceiver';
import useEndpointData from '../hooks/useEndpointData';
import BasicTemplate from '../templates/BasicTemplate';

export default function Dashboard() {
  const [ws, setWs] = useState<WebSocket>();
  const [error, setError] = useState<Event>();
  const { endpointData } = useEndpointData();

  return (
    <>
      <WebSocketClient onConnected={setWs} onError={setError} />
      <WebSocketReceiver ws={ws} />
      <BasicTemplate>
        <div></div>
      </BasicTemplate>
    </>
  );
}
