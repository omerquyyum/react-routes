export default (socket) => {
  socket.on("USER_RESPONSE", (data) => console.log(data))
  socket.on("USER_BROADCAST", (data) => console.log(data))
};
