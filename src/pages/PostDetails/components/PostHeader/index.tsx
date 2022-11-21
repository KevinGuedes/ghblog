import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faComment,
  faCalendar,
  faArrowUpRightFromSquare,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Post } from '../../../../contexts/BlogContext'
import { PostInfo, PostHeaderContainer, HeaderNavigation } from './styles'

import { format, formatDistanceToNowStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostHeaderProps {
  post: Post
}

export function PostHeader({ post }: PostHeaderProps) {
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
    <PostHeaderContainer>
      <HeaderNavigation>
        <Link to="/">
          <FontAwesomeIcon icon={faAngleLeft} /> Voltar
        </Link>
        <a href={post.html_url} target="_blank" rel="noreferrer">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </HeaderNavigation>
      <h1 title={post.title}>{post.title}</h1>
      <PostInfo>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {post.user.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendar} />
          <time dateTime={post.created_at} title={formattedCreationDate}>
            {creationDateRelativeToNow}
          </time>
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {post.comments} Comentário(s)
        </span>
      </PostInfo>
    </PostHeaderContainer>
  )
}
