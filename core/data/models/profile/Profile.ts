import { IProfile } from '../../../domain/providers'
import ProfileDetails from '../profileDetails/ProfileDetails'

export interface IProfileProps {
  profiles: Array<ProfileDetails>
}

class Profile implements IProfile {
  profiles: Array<ProfileDetails>

  constructor(profiles: Array<ProfileDetails>) {
    this.profiles = profiles
  }
}

export default Profile
