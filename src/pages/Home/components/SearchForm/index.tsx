import { ChangeEvent } from 'react'
import { SearchFormContainer } from './styles'

interface SearchFormProps {
  postsCount: number
  onQueryChange: (query: string) => void
}

export function SearchForm({ postsCount, onQueryChange }: SearchFormProps) {
  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    onQueryChange(event.target.value)
  }

  return (
    <SearchFormContainer>
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
          onChange={handleQueryChange}
        />
      </form>
    </SearchFormContainer>
  )
}
