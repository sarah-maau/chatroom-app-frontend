import { ITracker } from '../../domain/analytics/tracker'

class Tracker implements ITracker {
  googleAnalyticsId?: string

  constructor(googleAnalyticsId?: string) {
    this.googleAnalyticsId = googleAnalyticsId
  }

  trackEvent(eventName: string) {
    throw Error(`trackEvent is not implemented : ${eventName}`)
  }
}

export default Tracker
