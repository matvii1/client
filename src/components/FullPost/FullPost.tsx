import { useAppSelector } from '~/store/hooks/redux'
import { RootState } from '~/store/store'
import FullComments from '../FullComments/FullComments'
import FullPostCard from './FullPostCard'
import SkeletonFullPost from './SkeletonFullPost'

export default function FullPost() {
  const { currentPost, currentPostStatus } = useAppSelector(
    (state: RootState) => state.posts
  )

  return (
    <>
      {currentPostStatus === 'loading' || !currentPost ? (
        <SkeletonFullPost />
      ) : (
        <FullPostCard />
      )}
      <FullComments />
    </>
  )
}
