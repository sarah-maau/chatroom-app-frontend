import { IUser } from '../../../domain/providers'

export interface IUserProps {
  id: string
  email: string
  name: string
}

class User implements IUser {
  id: string
  email: string
  name: string

  constructor({ id, email, name }: IUserProps) {
    this.id = id
    this.email = email
    this.name = name
  }
}

export default User
