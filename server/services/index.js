const services = {};

services.page = (socket, data) => {
  console.log("team..", data);
  socket.emit("TEAM_RESPONSE", "team response recieved...")
  socket.broadcast.emit("TEAM_BROADCAST","team broadcast message....")
};

module.exports = services;
/**
 * Created by asveloper on 10/1/17.
 */
