import { IRoom } from '../../../domain/providers'

export interface IRoomProps {
  id: string
  name: string
  profileIds: Array<string>
}

class Room implements IRoom {
  id: string
  name: string
  profileIds: Array<string>

  constructor({ id, name, profileIds }: IRoomProps) {
    this.id = id
    this.name = name
    this.profileIds = profileIds
  }
}

export default Room
