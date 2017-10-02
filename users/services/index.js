const services = {};

services.page = (socket, data) => {
  const name = 'omer';
  const pass = '123';

  if (data.name === name && data.pass === pass) {
    socket.emit('USER_RESPONSE', 'logged in true...');
  } else {
    socket.emit('USER_RESPONSE', 'logged in fail...');
  }
  // socket.broadcast.emit('USER_BROADCAST', 'user broadcast message....');
};

services.user = (socket, data) => {
  const name = 'omer';
  const pass = '123';

  if (data.name === name && data.pass === pass) {
    socket.emit('USER_RESPONSE', 'logged in true...');
  } else {
    socket.emit('USER_RESPONSE', 'logged in fail...');
  }
  // socket.broadcast.emit('USER_BROADCAST', 'user broadcast message....');
};

module.exports = services;
/**
 * Created by asveloper on 10/1/17.
 */
