import { Post } from '../../../../contexts/BlogContext'
import { PostCardContainer } from './styles'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContainer>
      <header>
        <h1>{post.title}</h1>
        <time title="11 de Maio às 08:13" dateTime={post.created_at}>
          Há 1 dia
        </time>
      </header>
      <p>{post.body}</p>
    </PostCardContainer>
  )
}
