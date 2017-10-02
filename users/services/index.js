const services = {};

services.page = (socket, data) => {
  console.log("user..", data);
  socket.emit('USER_RESPONSE', 'user response recieved...');
  socket.broadcast.emit('USER_BROADCAST', 'user broadcast message....');
};

module.exports = services;
/**
 * Created by asveloper on 10/1/17.
 */
