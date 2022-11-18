import { useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { Spinner } from '../../components/Spinner'
import { BlogContext, Post } from '../../contexts/BlogContext'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostList } from './styles'

export function Home() {
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchPostsByQuery = useContextSelector(
    BlogContext,
    (context) => context.fetchPostsByQuery,
  )

  function onQueryChange(query: string) {
    setQuery(query)
  }

  useEffect(() => {
    async function fetchPosts(query: string, signal?: AbortSignal) {
      try {
        const posts = await fetchPostsByQuery(query, signal)
        setPosts(posts)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    setIsLoading(true)
    const timer = setTimeout(() => {
      fetchPosts(query)
    }, 1000)

    return () => clearTimeout(timer)
  }, [query, fetchPostsByQuery])

  return (
    <HomeContainer>
      <Profile />
      <SearchForm postsCount={posts.length} onQueryChange={onQueryChange} />
      {isLoading ? (
        <div>
          <Spinner message="Buscando postagens..." />
        </div>
      ) : (
        <PostList>
          {posts.map((post) => {
            return <PostCard key={post.number} post={post} />
          })}
        </PostList>
      )}
    </HomeContainer>
  )
}
