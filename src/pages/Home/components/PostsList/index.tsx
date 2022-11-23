import { Post } from '../../../../contexts/BlogContext'
import { NoResults } from '../NoResults'
import { PostCard } from '../PostCard'
import { PostsListContainer } from './styles'

interface PostsListProps {
  posts: Post[]
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <PostsListContainer>
      {posts.length === 0 ? (
        <NoResults />
      ) : (
        posts.map((post) => <PostCard key={post.number} post={post} />)
      )}
    </PostsListContainer>
  )
}
