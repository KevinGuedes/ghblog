import { ChangeEvent, useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../../../contexts/BlogContext'
import { SearchFormContainer } from './styles'

interface SearchFormProps {
  postsCount: number
}

export function SearchForm({ postsCount }: SearchFormProps) {
  const [query, setQuery] = useState('')
  const fetchPostsByQuery = useContextSelector(
    BlogContext,
    (context) => context.fetchPostsByQuery,
  )

  function handleSearchPosts(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('buscando')
      fetchPostsByQuery(query)
    }, 2000)

    return () => {
      console.log('cancelando')
      clearInterval(timer)
    }
  }, [query, fetchPostsByQuery])

  return (
    <SearchFormContainer>
      <header>
        <h2>Publicações</h2>
        <span>{postsCount} publicações</span>
      </header>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={handleSearchPosts}
          value={query}
        />
      </form>
    </SearchFormContainer>
  )
}
