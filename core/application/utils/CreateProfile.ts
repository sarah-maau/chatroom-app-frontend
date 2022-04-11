import {IProfileContent} from '../../../components/profile/ProfileList'
import ProfileDetails from '../../data/models/profileDetails/ProfileDetails'

const createProfile = (data: ProfileDetails): IProfileContent => ({
  id: data.id,
  username: data.username
})

export {
  createProfile
}
