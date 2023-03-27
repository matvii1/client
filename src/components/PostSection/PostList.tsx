import { useAppSelector } from '~/store/hooks/redux'
import { RootState } from '~/store/store'
import Post from '../Post/Post'
import SkeletonPost from '../Post/SkeletonPost'
import { PostsWrapper } from './StyledPostSection'

export default function PostList() {
  const { posts, status } = useAppSelector((state: RootState) => {
    return state.posts
  })

  console.log('postList:', posts, status)

  const isLoading = status === 'loading'

  if (isLoading) {
    return (
      <PostsWrapper>
        {new Array(6).fill(0).map((el, i) => (
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
