import { IMessageDetails } from '../../../domain/providers'
import ProfileDetails from "../profileDetails/ProfileDetails";

export interface IMessageDetailsProps {
    id: string
    content: string
    profile: ProfileDetails
    createdDate: Date
}

class MessageDetails implements IMessageDetails {
    id: string
    content: string
    profile: ProfileDetails
    createdDate: Date

    constructor({ id, content, profile, createdDate }: IMessageDetailsProps) {
        this.id = id
        this.content = content
        this.profile = profile
        this.createdDate = createdDate
    }
}

export default MessageDetails
