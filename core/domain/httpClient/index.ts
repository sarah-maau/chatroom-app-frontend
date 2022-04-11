export interface IProfileDetailsData {
  id: string
  username: string
}

export interface IProfileData {
  profiles: Array<IProfileDetailsData>
}

/*MESSAGES*/
export interface IMessageDetailsData {
  id: string
  content: string
  profile: IProfileDetailsData
  createdDate: Date
}

export interface IRoomDetailsData {
  id: string
  name: string
  profiles: Array<IProfileDetailsData>
  messages:Array<IMessageDetailsData>
}

export interface IRoomData {
  id: string
  name: string
  profileIds: Array<string>
}

export interface IRoomListData {
  rooms: Array<IRoomData>
}

