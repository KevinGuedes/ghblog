import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface ProfileData {
  name: string
  login: string
  avatar_url: string
  html_url: string
  bio: string
  company?: string
  followers: number
}

export interface Post {
  number: number
  title: string
  body: string
  comments: number
  url: string
  created_at: string
  user: {
    login: string
  }
}

export interface BlogContextData {
  isLoading: boolean
  profileData: ProfileData
  posts: Post[]
  fetchPostByNumber(postNumber: number): Promise<Post | undefined>
  fetchPostsByQuery(query: string): Promise<void>
}

export const BlogContext = createContext({} as BlogContextData)

interface BlogContextProviderProps {
  children: ReactNode
}

const user: string = import.meta.env.VITE_USER
const repo: string = import.meta.env.VITE_REPO

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [posts, setPosts] = useState<Post[]>([])

  const fetchProfileData = useCallback(async () => {
    const profileResponse = await api.get<ProfileData>(`users/${user}`)
    setProfileData(profileResponse.data)
  }, [])

  const fetchPosts = useCallback(async (query: string = '') => {
    const postsResponse = await api.get<{ items: Post[] }>('search/issues', {
      params: {
        q: `repo:${user}/${repo} is:issue ${query}`,
      },
    })
    setPosts(postsResponse.data.items)
  }, [])

  const fetchPostsByQuery = useCallback(
    async (query: string) => {
      try {
        setIsLoading(true)
        fetchPosts(query)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    },
    [fetchPosts],
  )

  async function fetchPostByNumber(postNumber: number) {
    try {
      setIsLoading(true)
      const postsResponse = await api.get<Post>(`search/issues/${postNumber}`)
      return postsResponse.data
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchInitialData = useCallback(async () => {
    try {
      setIsLoading(true)
      await Promise.all([fetchProfileData(), fetchPosts()])
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [fetchProfileData, fetchPosts])

  useEffect(() => {
    fetchInitialData()
  }, [fetchInitialData])

  return (
    <BlogContext.Provider
      value={{
        isLoading,
        profileData,
        posts,
        fetchPostByNumber,
        fetchPostsByQuery,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
