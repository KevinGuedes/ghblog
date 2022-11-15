import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Header, ProfileContainer, ProfileContent, ProfileInfo } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { Spinner } from '../../../../components/Spinner'

interface ProfileData {
  fullName: string
  userName: string
  avatarUrl: string
  gitHubUrl: string
  bio: string
  company?: string
  followers: number
}

const user: string = import.meta.env.VITE_USER

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoadingProfileData, setIsLoadingProfileData] = useState(true)

  async function fetchProfileData() {
    try {
      setIsLoadingProfileData(true)
      const { data } = await api.get(`users/${user}`)
      setProfileData({
        fullName: data.name,
        userName: data.login,
        avatarUrl: data.avatar_url,
        gitHubUrl: data.html_url,
        company: data.company,
        bio: data.bio,
        followers: data.followers,
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoadingProfileData(false)
    }
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  return (
    <ProfileContainer>
      {isLoadingProfileData ? (
        <Spinner message="Buscando dados do perfil..." />
      ) : (
        <ProfileContent>
          <img src={profileData.avatarUrl} alt="" />
          <div>
            <div>
              <Header>
                <h1>{profileData.fullName}</h1>
                <a
                  href={profileData.gitHubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </Header>
              <p>{profileData.bio}</p>
            </div>

            <ProfileInfo>
              <span>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.userName}
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
