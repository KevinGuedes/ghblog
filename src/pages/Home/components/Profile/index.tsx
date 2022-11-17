import { useContextSelector } from 'use-context-selector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { Header, ProfileContainer, ProfileContent, ProfileInfo } from './styles'
import { Spinner } from '../../../../components/Spinner'
import { BlogContext } from '../../../../contexts/BlogContext'

export function Profile() {
  const { isLoading, profileData } = useContextSelector(
    BlogContext,
    (context) => {
      return { isLoading: context.isLoading, profileData: context.profileData }
    },
  )

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner message="Buscando dados do perfil..." />
      ) : (
        <ProfileContent>
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
                {profileData.followers} seguidor(es)
              </span>
            </ProfileInfo>
          </div>
        </ProfileContent>
      )}
    </ProfileContainer>
  )
}
