import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Header, ProfileContainer, ProfileInfo } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/kevinguedes.png" alt="" />
      <div>
        <Header>
          <h1>Kevin Guedes</h1>
          <a
            href="https://github.com/kevinguedes"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          corrupti quis error deserunt eveniet nihil minima maiores atque eos
          blanditi
        </p>

        <ProfileInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            kevinguedes
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            NASA
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </span>
        </ProfileInfo>
      </div>
    </ProfileContainer>
  )
}
