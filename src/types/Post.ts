import { User } from './User'

export interface IPost {
  title: string
  viewsCount: number
  text: string
  tags: Array<number | string>
  _id: number
  userId: User
  createdAt: string
  imageUrl: string
  commentsCount: number
}
