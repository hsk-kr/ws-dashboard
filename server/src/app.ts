import WebSocket from 'ws';
import 'dotenv/config';

const port = Number(process.env.PORT);

const wss = new WebSocket.Server({ port }, () => {
	console.log(`WebSocket Server Listening ${port}`);
});

wss.on('connection', (ws: WebSocket) => {
	console.log('client connected');

	wss.clients.forEach((client) => {
		client.send('Hello World, really!');
	});

	ws.on('error', (e) => {
		console.error('client connection error', e);
	});

	ws.on('close', () => {
		console.log('client disconnected');
	});
});
