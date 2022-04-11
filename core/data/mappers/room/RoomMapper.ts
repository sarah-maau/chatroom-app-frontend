import { IRoomData } from '../../../domain/httpClient'
import Room from '../../models/room/Room'

class RoomMapper {
  static roomFromJson(
    data: IRoomData
  ): Room {
    return new Room(data)
  }
}

export default RoomMapper
