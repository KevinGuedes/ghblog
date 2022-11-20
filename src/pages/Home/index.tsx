import { ChangeEvent } from 'react'
import { useContextSelector } from 'use-context-selector'
import { Spinner } from '../../components/Spinner'
import { BlogContext } from '../../contexts/BlogContext'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm, PostsList, SearchResults } from './styles'

export function Home() {
  const {
    isLoading,
    isSearchingPosts,
    posts,
    profileData,
    query,
    setQueryValue,
  } = useContextSelector(BlogContext, (context) => {
    return {
      isLoading: context.isLoading,
      isSearchingPosts: context.isSearchingPosts,
      posts: context.posts,
      profileData: context.profileData,
      query: context.query,
      setQueryValue: context.setQueryValue,
    }
  })

  function handleSearchPosts(event: ChangeEvent<HTMLInputElement>) {
    setQueryValue(event.target.value)
  }

  const postsCount = isLoading ? 0 : posts.length

  return (
    <>
      {isLoading ? (
        <Spinner message="Buscando dados do perfil..." />
      ) : (
        <div>
          <Profile profileData={profileData} />
          <SearchForm>
            <header>
              <h2>Publicações</h2>

              {postsCount === 1 ? (
                <span>{postsCount} Publicação</span>
              ) : (
                <span>{postsCount} Publicações</span>
              )}
            </header>

            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Buscar conteúdo"
                onChange={handleSearchPosts}
                value={query}
              />
            </form>
          </SearchForm>

          <SearchResults>
            {isSearchingPosts ? (
              <Spinner message="Buscando postagens..." showBackground={false} />
            ) : (
              <PostsList>
                {posts.map((post) => (
                  <PostCard key={post.number} post={post} />
                ))}
              </PostsList>
            )}
          </SearchResults>
        </div>
      )}
    </>
  )
}
