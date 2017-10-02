export default (socket) => {
  socket.on("TEAM_RESPONSE", (data) => console.log(data))
  socket.on("TEAM_BROADCAST", (data) => console.log(data))
};
