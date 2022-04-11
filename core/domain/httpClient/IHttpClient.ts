import {
  IProfileDetailsData,
  IProfileData,
  IRoomDetailsData,
  IRoomData, IRoomListData
} from './index'
import {IMessageDetails} from '../providers'

export interface IHttpClient {
    getProfileDetails(id: string): Promise<IProfileDetailsData>

    getProfile(): Promise<IProfileData>

    getMessageDetails(id: string): Promise<IMessageDetails>

    getRoomDetails(id: string): Promise<IRoomDetailsData>

    getRoom(id: string): Promise<IRoomData>

    getRoomList(): Promise<IRoomListData>

}
