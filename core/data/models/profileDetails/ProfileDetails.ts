import { IProfileDetails} from '../../../domain/providers'

export interface IProfileDetailsProps {
  id: string
  username: string
}

class ProfileDetails implements IProfileDetails {
  id: string
  username: string

  constructor({ id, username }: IProfileDetailsProps) {
    this.id = id
    this.username = username
  }
}

export default ProfileDetails
