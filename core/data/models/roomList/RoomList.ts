import { IRoomList} from '../../../domain/providers'
import Room from '../room/Room'

export interface IRoomListProps {
  rooms: Array<Room>
}

class RoomList implements IRoomList {
  rooms: Array<Room>

  constructor({ rooms }: IRoomListProps) {
    this.rooms = rooms
  }
}

export default RoomList
