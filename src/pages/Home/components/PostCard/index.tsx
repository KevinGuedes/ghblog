import { useNavigate } from 'react-router-dom'
import { Post } from '../../../../contexts/BlogContext'
import { PostCardContainer } from './styles'

import { format, formatDistanceToNowStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostViewer } from '../../../../components/PostVisualizer'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate()

  function handleCardClick() {
    navigate(`/post/${post.number}`)
  }

  const createdAt = new Date(post.created_at)
  const creationDateRelativeToNow = formatDistanceToNowStrict(createdAt, {
    locale: ptBR,
    unit: 'day',
    addSuffix: true,
  })
  const formattedCreationDate = format(createdAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR,
  })

  return (
    <PostCardContainer onClick={handleCardClick} title={post.title}>
      <header>
        <h1>{post.title}</h1>
        <time title={formattedCreationDate} dateTime={post.created_at}>
          {creationDateRelativeToNow}
        </time>
      </header>
      <PostViewer markdown={post.body} enableGfm={false} />
    </PostCardContainer>
  )
}
