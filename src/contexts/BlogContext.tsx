import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface ProfileData {
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
  html_url: string
  created_at: string
  user: {
    login: string
  }
}

interface BlogContextData {
  isLoading: boolean
  isSearchingPosts: boolean
  posts: Post[]
  profileData: ProfileData
  query: string
  fetchInititalData: () => Promise<void>
  setQueryValue: (query: string) => void
  fetchPostByPostNumber(postNumber: number): Promise<Post | undefined>
}

export const BlogContext = createContext({} as BlogContextData)

interface BlogContextProviderProps {
  children: ReactNode
}

const user: string = import.meta.env.VITE_USER
const repo: string = import.meta.env.VITE_REPO

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const isSearchEnabled = useRef(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSearchingPosts, setIsSearchingPosts] = useState(false)
  const [query, setQuery] = useState('')
  const [profileData, setProfileData] = useState({} as ProfileData)
  const [posts, setPosts] = useState<Post[]>([])

  const fetchProfileData = useCallback(async (): Promise<ProfileData> => {
    const profileResponse = await api.get<ProfileData>(`users/${user}`)
    return profileResponse.data
  }, [])

  function setQueryValue(query: string) {
    setQuery(query)
  }

  const fetchPostsByQuery = useCallback(
    async (query: string): Promise<Post[]> => {
      const postsResponse = await api.get<{ items: Post[] }>('search/issues', {
        params: {
          q: `repo:${user}/${repo} is:issue ${query}`,
          sort: 'updated',
        },
      })

      return postsResponse.data.items
    },
    [],
  )

  const fetchPostByPostNumber = useCallback(
    async (postNumber: number): Promise<Post | undefined> => {
      try {
        setIsLoading(true)
        const postsResponse = await api.get<Post>(
          `repos/${user}/${repo}/issues/${postNumber}`,
        )
        return postsResponse.data
      } catch (error) {
        console.error(`Failed to fetch post #${postNumber} data`)
      } finally {
        setIsLoading(false)
      }
    },
    [],
  )

  useEffect(() => {
    async function fetchPosts(query: string) {
      try {
        const posts = await fetchPostsByQuery(query)
        setPosts(posts)
      } catch (error) {
        console.error('Failed to search posts')
      } finally {
        setIsSearchingPosts(false)
      }
    }

    let timer: ReturnType<typeof setTimeout> | null

    if (isSearchEnabled.current) {
      setIsSearchingPosts(true)
      setPosts([])

      timer = setTimeout(() => {
        fetchPosts(query)
      }, 1000)
    } else {
      isSearchEnabled.current = true
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [query, fetchPostsByQuery])

  const fetchInititalData = useCallback(async () => {
    try {
      setIsLoading(true)
      const [profileData, posts] = await Promise.all([
        fetchProfileData(),
        fetchPostsByQuery(''),
      ])

      setProfileData(profileData)
      setPosts(posts)
    } catch (error) {
      console.error('Failed to fetch initial data')
    } finally {
      setIsLoading(false)
    }
  }, [fetchProfileData, fetchPostsByQuery])

  useEffect(() => {
    fetchInititalData()
  }, [fetchInititalData])

  return (
    <BlogContext.Provider
      value={{
        isLoading,
        isSearchingPosts,
        posts,
        profileData,
        query,
        fetchInititalData,
        setQueryValue,
        fetchPostByPostNumber,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
