import {
  IProfileDetails,
  IProfile,
  IMessageDetails,
  IRoomDetails,
  IRoom,
  IRoomList
} from './index'

export interface IChatRoomProvider {
    getProfileDetails(id: string): Promise<IProfileDetails>

    getProfile(): Promise<IProfile>

    getMessageDetails(id: string): Promise<IMessageDetails>

    getRoomDetails(id: string): Promise<IRoomDetails>

    getRoom(id: string): Promise<IRoom>

    getRoomList(): Promise<IRoomList>

}
