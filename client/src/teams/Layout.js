import React from 'react';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';

import TeamListeners from './listeners';

// connect to socket
const socket = io.connect(process.env.REACT_APP_TEAM_SOCKET_URL);
TeamListeners(socket);
socket.on('connect', function(){
  console.log("team socket connected....");
});

const TeamLayout = (props) => (
  <SocketProvider socket={socket}>
      <div>{props.children}</div>
  </SocketProvider>
);

export default TeamLayout;
