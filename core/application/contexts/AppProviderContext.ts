import React from 'react'
import { IChatRoomProvider} from '../../domain/providers/IChatRoomProvider'

export interface IAppProviderContext {
  chatRoomProvider?: IChatRoomProvider
}

export const AppProviderContext = React.createContext<IAppProviderContext>({})

export const useAppProviderContext = (): IAppProviderContext => React.useContext(AppProviderContext)
