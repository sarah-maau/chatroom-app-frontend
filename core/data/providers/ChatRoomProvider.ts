import { IHttpClient } from '../../domain/httpClient/IHttpClient'
import {IChatRoomProvider} from '../../domain/providers/IChatRoomProvider'
import ProfileDetails from '../models/profileDetails/ProfileDetails'
import ProfileDetailsMapper from '../mappers/profileDetails/ProfileDetailsMapper'
import Profile from '../models/profile/Profile'
import ProfileMapper from '../mappers/profile/ProfileMapper'
import MessageDetails from '../models/messageDetails/MessageDetails'
import MessageDetailsMapper from '../mappers/messageDetails/MessageDetailsMapper'
import RoomDetails from '../models/roomDetails/RoomDetails'
import RoomDetailsMapper from '../mappers/roomDetails/RoomDetailsMapper'
import Room from '../models/room/Room'
import RoomMapper from '../mappers/room/RoomMapper'
import RoomListMapper from '../mappers/roomList/RoomListMapper'
import RoomList from '../models/roomList/RoomList'

class ChatRoomProvider implements IChatRoomProvider {
    public httpClient: IHttpClient

    constructor(httpClient: IHttpClient) {
      this.httpClient = httpClient
    }

    async getProfileDetails(id): Promise<ProfileDetails> {
      const data = await this.httpClient.getProfileDetails(id)
      return ProfileDetailsMapper.profileDetailsFromJson(
        data
      )
    }

    async getProfile(): Promise<Profile> {
      const data = await this.httpClient.getProfile()
      return ProfileMapper.profileFromJson(data)
    }

    async getMessageDetails(id): Promise<MessageDetails> {
      const data = await this.httpClient.getMessageDetails(id)
      return MessageDetailsMapper.messageDetailsFromJson(
        data
      )
    }

    async getRoomDetails(id): Promise<RoomDetails> {
      const data = await this.httpClient.getRoomDetails(id)
      return RoomDetailsMapper.roomDetailsFromJson(
        data
      )
    }

    async getRoom(id): Promise<Room> {
      const data = await this.httpClient.getRoom(id)
      return RoomMapper.roomFromJson(
        data
      )
    }

    async getRoomList(): Promise<RoomList> {
      const data = await this.httpClient.getRoomList()
      return RoomListMapper.roomListFromJson(data)
    }
}

export default ChatRoomProvider
