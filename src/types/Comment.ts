import { IPost } from './Post'
import { User } from './User'

export interface IComment {
  text: string | number
  userId: User
  post: IPost
  _id: number
}
