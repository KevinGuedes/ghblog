import { CanceledError } from 'axios'
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
  fetchPostByNumber(postNumber: number): Promise<Post>
}

export const BlogContext = createContext({} as BlogContextData)

interface BlogContextProviderProps {
  children: ReactNode
}

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const user: string = import.meta.env.VITE_USER
  const repo: string = import.meta.env.VITE_REPO

  const [isLoading, setIsLoading] = useState(true)
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [posts, setPosts] = useState<Post[]>([])

  const fetchProfileData = useCallback(
    async (signal: AbortSignal) => {
      try {
        const profileResponse = await api.get(`users/${user}`, {
          signal,
        })
        setProfileData(profileResponse.data)
      } catch (error) {
        if (error instanceof CanceledError) {
          console.warn('Request cancelled')
        } else {
          throw error
        }
      }
    },
    [user],
  )

  const fetchPosts = useCallback(
    async (signal: AbortSignal, query: string = '') => {
      try {
        const postsResponse = await api.get('search/issues', {
          signal,
          params: {
            q: `repo:${user}/${repo} is:issue ${query}`,
          },
        })

        setPosts(postsResponse.data.items)
      } catch (error) {
        if (error instanceof CanceledError) {
          console.warn('Request cancelled')
        } else {
          throw error
        }
      }
    },
    [repo, user],
  )

  async function fetchPostByNumber(postNumber: number) {
    const postsResponse = await api.get(`search/issues/${postNumber}`)
    return postsResponse.data as Post
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    try {
      setIsLoading(true)
      fetchProfileData(signal)
      fetchPosts(signal)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }

    return () => controller.abort()
  }, [fetchProfileData, fetchPosts])

  return (
    <BlogContext.Provider
      value={{
        isLoading,
        profileData,
        posts,
        fetchPostByNumber,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
