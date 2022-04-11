import {IRoomDetailsData} from '../../../domain/httpClient'
import RoomDetails from '../../models/roomDetails/RoomDetails'
import ProfileDetailsMapper from '../profileDetails/ProfileDetailsMapper'
import MessageDetailsMapper from '../messageDetails/MessageDetailsMapper'

class RoomDetailsMapper {
  static roomDetailsFromJson(
    data: IRoomDetailsData
  ): RoomDetails {
    const roomUid = data.id
    const profiles = data.profiles.map(it => ProfileDetailsMapper.profileDetailsFromJson(it))
    const messages = data.messages.map(it => MessageDetailsMapper.messageDetailsFromJson(it))
    return new RoomDetails({...data, id: roomUid, profiles:profiles, messages:messages })
  }
}
export default RoomDetailsMapper
