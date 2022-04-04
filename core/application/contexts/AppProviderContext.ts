import React from 'react'
import { ITracker } from '../../domain/analytics/tracker'
import { IAuthProvider } from '../../domain/providers/IAuthProvider'

export interface IAppProviderContext {
  authProvider?: IAuthProvider
  tracker?: ITracker
}

export const AppProviderContext = React.createContext<IAppProviderContext>({})

export const useAppProviderContext = (): IAppProviderContext => React.useContext(AppProviderContext)
