import { IRoomListData } from '../../../domain/httpClient'
import RoomMapper from '../room/RoomMapper'
import RoomList from '../../models/roomList/RoomList'

class RoomListMapper {
  static roomListFromJson(data: IRoomListData): RoomList {
    const rooms = data.rooms.map(it => RoomMapper.roomFromJson(it))
    return new RoomList({rooms: rooms})
  }
}

export default RoomListMapper
