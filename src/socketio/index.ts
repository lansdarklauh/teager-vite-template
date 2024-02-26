import { io } from 'socket.io-client'

let socket = null

export function initSocket() {
  socket = io('/socket/example', {
    transports: ['websocket'],
  })

  socket.on('connect', () => {
    console.log(`[Socket.io] connect`)
  })

  socket.on("disconnect", () => {
    console.log(`[Socket.io] disconnect`)
  });

  return socket
}
