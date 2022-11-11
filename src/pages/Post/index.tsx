import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faComment,
  faCalendar,
  faArrowUpRightFromSquare,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { PostContainer, PostHeader, PostInfo } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faAngleLeft} /> Voltar
          </Link>
          <a
            href="https://github.com/kevinguedes"
            target="_blank"
            rel="noreferrer"
          >
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <PostInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            kevinguedes
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendar} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </span>
        </PostInfo>
      </PostHeader>
      <section></section>
    </PostContainer>
  )
}
