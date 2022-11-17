import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../contexts/BlogContext'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostList } from './styles'

export function Home() {
  const { isLoading, posts } = useContextSelector(BlogContext, (context) => {
    return {
      isLoading: context.isLoading,
      posts: context.posts,
    }
  })

  const postsCount = posts.length
  const showPostsList = !isLoading

  return (
    <article>
      <Profile />
      <SearchForm postsCount={postsCount} />
      <PostList>
        {showPostsList &&
          posts.map((post) => {
            return <PostCard key={post.number} post={post} />
          })}
      </PostList>
    </article>
  )
}
