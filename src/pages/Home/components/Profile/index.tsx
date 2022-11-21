import { Header, ProfileContainer, ProfileInfo } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { ProfileData } from '../../../../contexts/BlogContext'

interface ProfileProps {
  profileData: ProfileData
}

export function Profile({ profileData }: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={profileData.avatar_url} alt="" />
      <div>
        <div>
          <Header>
            <h1>{profileData.name}</h1>
            <a href={profileData.html_url} target="_blank" rel="noreferrer">
              GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </Header>
          <p>{profileData.bio}</p>
        </div>

        <ProfileInfo>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profileData.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {profileData.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {profileData.followers === 1
              ? '1 Seguidor'
              : `${profileData.followers} Seguidores`}
          </span>
        </ProfileInfo>
      </div>
    </ProfileContainer>
  )
}
