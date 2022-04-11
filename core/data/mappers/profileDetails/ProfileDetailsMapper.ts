import { IProfileDetailsData } from '../../../domain/httpClient'
import ProfileDetails from '../../models/profileDetails/ProfileDetails'

class ProfileDetailsMapper {
  static profileDetailsFromJson(
    data: IProfileDetailsData
  ): ProfileDetails {
    return new ProfileDetails(data)
  }
}

export default ProfileDetailsMapper
