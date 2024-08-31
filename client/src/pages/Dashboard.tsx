import { useEffect, useState } from 'react';
import WebSocketClient from '../components/WebSocketClient';
import WebSocketReceiver from '../components/WebSocketReceiver';
import BasicTemplate from '../templates/BasicTemplate';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Server } from '../components/Server';
import Workers from '../components/Workers';
import useToast from '../hooks/useToast';

export default function Dashboard() {
  const [ws, setWs] = useState<WebSocket>();
  const [error, setError] = useState<Event>();
  const { showToast } = useToast();

  useEffect(() => {
    if (error === undefined) return;

    if (ws === undefined || ws?.readyState === WebSocket.CLOSED) {
      showToast({
        type: 'error',
        message: 'Failed to connect server, please try it later.',
        duration: 10000,
      });
    }
  }, [error]);

  return (
    <>
      <WebSocketClient onConnected={setWs} onError={setError} />
      <WebSocketReceiver ws={ws} />
      <BasicTemplate>
        {!ws ? (
          <LoadingContent />
        ) : (
          <>
            <div className="flex flex-col flex-wrap items-center md:flex-row md:items-start gap-4">
              <Services />
              <Stats />
              <Server />
            </div>
            <Workers />
          </>
        )}
      </BasicTemplate>
    </>
  );
}

const LoadingContent = () => {
  return (
    <div className="flex flex-col flex-wrap items-center md:flex-row md:items-start gap-4">
      <div className="skeleton h-80 w-full max-w-80"></div>
      <div className="skeleton h-80 w-full max-w-80"></div>
      <div className="skeleton h-80 w-full max-w-80"></div>
    </div>
  );
};
