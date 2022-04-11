import { IProfileData } from '../../../domain/httpClient'
import ProfileDetailsMapper from '../profileDetails/ProfileDetailsMapper'
import Profile from '../../models/profile/Profile'

class ProfileMapper {
  static profileFromJson(data: IProfileData): Profile {
    const profiles = data.profiles.map(it => ProfileDetailsMapper.profileDetailsFromJson(it))
    return new Profile(profiles)
  }
}

export default ProfileMapper
