export default {
  HOME: '/',
  MESSAGES: '/messages',
  MESSAGESBYID: function getMessageId(id: string) {
    return `/messages/${id}`
  },
  ROOMS: '/rooms',
  ROOMSBYID: function getRoomId(id: string) {
    return `/rooms/${id}`
  },
  PROFILES: '/profiles',
  PROFILESBYID: function getProfileId(id: string) {
    return `/profiles/${id}`
  }
}
