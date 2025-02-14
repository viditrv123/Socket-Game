import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { SocketUser } from './types';

@WebSocketGateway({
  path: '/socket.io',
  cors: {
    origin: '*',
    method: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  },
})
export class SocketGateway {
  constructor() {}

  @WebSocketServer()
  private server: any;

  afterInit() {
    this.server.on('connection', (client: Socket) => {
      console.log(`Client connected: ${client.id}`);
    });
  }

  @SubscribeMessage('GET_CURRENT_USER')
  async getCurrentUser(client: Socket) {
    const user = (client.data.user as SocketUser) || {};

    return user;
  }
}
