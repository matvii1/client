import { User } from './User'

export interface IPost {
  title: string
  viewsCount: number
  text: string
  tags: Array<number | string>
  comments: number
  _id: number
  userId: User
  createdAt: string
}
