import { Socket as _Socket } from 'socket.io';

export type SocketUser = {
  id: string;
  userName: string;
};

export type Socket = _Socket & { user: SocketUser };

export type JoinRoom = {
  id: string;
  identity: string;
  url: string;
  host: string;
  pathname: string;
};
