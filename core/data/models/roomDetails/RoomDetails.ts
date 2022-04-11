import {IRoomDetails} from '../../../domain/providers'
import ProfileDetails from "../profileDetails/ProfileDetails";
import MessageDetails from "../messageDetails/MessageDetails";

export interface IRoomDetailsProps {
  id: string
  name: string
  profiles: Array<ProfileDetails>
  messages:Array<MessageDetails>
}

class RoomDetails implements IRoomDetails {
  id: string
  name: string
  profiles: Array<ProfileDetails>
  messages:Array<MessageDetails>

  constructor({ id, name, profiles, messages }: IRoomDetailsProps) {
    this.id = id
    this.name = name
    this.profiles = profiles
    this.messages = messages
  }
}

export default RoomDetails
