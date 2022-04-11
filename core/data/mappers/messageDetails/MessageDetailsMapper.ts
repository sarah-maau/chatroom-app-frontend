import {IMessageDetailsData} from '../../../domain/httpClient'
import MessageDetails from '../../models/messageDetails/MessageDetails'
import ProfileDetailsMapper from '../profileDetails/ProfileDetailsMapper'


class MessageDetailsMapper {
  static messageDetailsFromJson(
    data: IMessageDetailsData
  ): MessageDetails {
    const messageUid = data.id
    const profile = ProfileDetailsMapper.profileDetailsFromJson(data.profile)
    const date = data.createdDate ? new Date(data.createdDate) : new Date()

    return new MessageDetails({...data, id: messageUid, profile: profile, createdDate: date})
  }
}

export default MessageDetailsMapper
