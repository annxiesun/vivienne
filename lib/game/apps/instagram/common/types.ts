export type InstagramPostObject = {
  username: string
  images: string[]
  date: Date
  description: string
  comments: Comment[]
  number_likes: number
}

export type Comment = {
  username: string
  text: string
}


export type InstagramUser = {
  username: string
}