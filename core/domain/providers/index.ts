/* PROFILES */
export interface IProfileDetails {
  id: string
  username: string
}

export interface IProfile {
  profiles: Array<IProfileDetails>
}

/*MESSAGES*/
export interface IMessageDetails {
  id: string
  content: string
  profile: IProfileDetails
  createdDate: Date
}

/* ROOMS */
export interface IRoomDetails {
  id: string
  name: string
  profiles: Array<IProfileDetails>
  messages:Array<IMessageDetails>
}

export interface IRoom {
  id: string
  name: string
  profileIds: Array<string>

}

export interface IRoomList {
  rooms: Array<IRoom>
}




