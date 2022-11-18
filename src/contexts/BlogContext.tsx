import { ReactNode, useCallback } from 'react'
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
  fetchProfileData: () => Promise<ProfileData>
  fetchPostByPostNumber(postNumber: number): Promise<Post>
  fetchPostsByQuery: (query: string) => Promise<Post[]>
}

export const BlogContext = createContext({} as BlogContextData)

interface BlogContextProviderProps {
  children: ReactNode
}

const user: string = import.meta.env.VITE_USER
const repo: string = import.meta.env.VITE_REPO

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const fetchProfileData = useCallback(async (): Promise<ProfileData> => {
    const profileResponse = await api.get<ProfileData>(`users/${user}`)
    return profileResponse.data
  }, [])

  const fetchPostsByQuery = useCallback(
    async (query: string): Promise<Post[]> => {
      console.log('calling search api')
      const postsResponse = await api.get<{ items: Post[] }>('search/issues', {
        params: {
          q: `repo:${user}/${repo} is:issue ${query}`,
        },
      })

      return postsResponse.data.items
    },
    [],
  )

  const fetchPostByPostNumber = useCallback(
    async (postNumber: number): Promise<Post> => {
      const postsResponse = await api.get<Post>(
        `repos/${user}/${repo}/issues/${postNumber}`,
      )
      return postsResponse.data
    },
    [],
  )

  return (
    <BlogContext.Provider
      value={{
        fetchProfileData,
        fetchPostByPostNumber,
        fetchPostsByQuery,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
