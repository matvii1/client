export interface ISinglePost {
  _id: number
  title: string
  text: string
  tags: Array<string | number>
  viewsCount: number
  userId: {
    name: string
    lastName: string
    email: string
  }
  createdAt: Date
  updatedAt: Date
  imageUrl: string
}
