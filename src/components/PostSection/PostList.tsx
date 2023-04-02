import { IPost } from '~/types/Post'
import Post from '../Post/Post'
import SkeletonPost from '../Post/SkeletonPost'
import { PostsWrapper } from './StyledPostSection'

type Props = {
  posts: IPost[]
  isLoading: boolean
}

export default function PostList({ posts, isLoading }: Props) {
  if (isLoading) {
    return (
      <PostsWrapper>
        {new Array(5).fill(0).map((el, i) => (
          <SkeletonPost key={i} />
        ))}
      </PostsWrapper>
    )
  }

  return (
    <PostsWrapper>
      {posts.map((post) => {
        return <Post post={post} key={post._id} />
      })}
    </PostsWrapper>
  )
}
