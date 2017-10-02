import React from 'react';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

import UserListeners from './listeners';

// connect to socket
const socket = io.connect(process.env.REACT_APP_USER_SOCKET_URL);
UserListeners(socket);
socket.on('connect', function(){
  console.log("user socket connected....");
});

const UserLayout = (props) => (
  <SocketProvider socket={socket}>
      <div style={{backgroundColor: 'red'}}>{props.children}</div>
  </SocketProvider>
);

export default UserLayout;
