// KEYS:
// POSTS IDENTIFIED BY `ID`
// USERS IDENTIFIED BY `USERNAME`

export type InstagramMessageType = {
  is_me: boolean
  value: string
}
export type InstagramChatType = {
  username: string
  messages: InstagramMessageType[]
}

export type InstagramPostType = {
  username: string
  images: string[]
  date: Date
  description: string
  comments: InstagramCommentType[]
  number_likes: number
}

export type InstagramCommentType = {
  username: string
  text: string
}

export type InstagramUser = {
  username: string
  num_followers: number
  num_following: number
  posts: InstagramPostType[]
  profile_picture: string
  description: string
}

export type InstagramNotificationCategory = "follow" | "like" 

export type InstagramNotificationType = {
  username: string
  category: InstagramNotificationCategory
}