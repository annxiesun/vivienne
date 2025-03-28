// KEYS:
// POSTS IDENTIFIED BY `ID`
// USERS IDENTIFIED BY `USERNAME`

export type InstagramMessageType = {
  is_me: boolean
  value: string
  thought?: string
  next_scene?: boolean
}
export type InstagramChatType = {
  username: string
  messages: InstagramMessageType[]
  unlocked_after_unblock?: boolean
  stage?: number
}

export type InstagramPostType = {
  username: string
  images: string[]
  date: Date
  description: string
  comments: InstagramCommentType[]
  number_likes: number
  thought?: string
  stage?: number
}

export type InstagramCommentType = {
  username: string
  text: string
}

export type InstagramUser = {
  username: string
  num_followers: number | string
  num_following: number
  posts: InstagramPostType[]
  profile_picture: string
  description: string
  profile_thought?: string
  stage?: number
}

export type InstagramNotificationCategory = "follow" | "like" 

export type InstagramNotificationType = {
  username: string
  category: InstagramNotificationCategory
}