import { useState } from 'react';
import WebSocketClient from '../components/WebSocketClient';
import WebSocketReceiver from '../components/WebSocketReceiver';
import useEndpointData from '../hooks/useEndpointData';
import BasicTemplate from '../templates/BasicTemplate';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Server } from '../components/Server';
import Workers from '../components/Workers';

export default function Dashboard() {
  const [ws, setWs] = useState<WebSocket>();
  const [error, setError] = useState<Event>();
  const { endpointData } = useEndpointData();

  return (
    <>
      <WebSocketClient onConnected={setWs} onError={setError} />
      <WebSocketReceiver ws={ws} />
      <BasicTemplate>
        <div className="flex flex-col flex-wrap items-center md:flex-row md:items-start gap-4">
          <Services />
          <Stats />
          <Server />
        </div>
        <Workers />
      </BasicTemplate>
    </>
  );
}
