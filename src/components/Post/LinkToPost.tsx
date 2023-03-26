import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  children: ReactNode
}

export default function LinkToPost({ id, children }: Props) {
  return <Link to={`/posts/${id}`}>{children}</Link>
}
