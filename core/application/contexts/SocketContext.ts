import React from 'react'
import io, { Socket } from 'socket.io-client'
import {API_ENDPOINT} from '../../config'

// à mettre dans types
export interface ISocketMessage {
    roomId: string
    message: string
    time: string
    username: string
}

export interface ISocketContext {
    socket: Socket
    username?: string
    setUsername: (username: string) => void
    messages?: Array<ISocketMessage>
    //messages?: { message: string; time: string; username: string }[];
    setMessages: (messages) => void
    roomId?: string
    rooms: object
}

const socket = io(API_ENDPOINT)

export const SocketContext = React.createContext<ISocketContext>({
  socket,
  messages: [],
  setUsername: () => console.warn('setUserName is not implemented in the current provider'),
  setMessages: () => console.warn('setMessages is not implemented in the current provider'),
  rooms: {}
})

export const useSocketContext = (): ISocketContext => React.useContext(SocketContext)
