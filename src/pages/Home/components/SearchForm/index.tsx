import { SearchFormContainer } from './styles'

interface SearchFormProps {
  postsCount: number
}

export function SearchForm({ postsCount }: SearchFormProps) {
  return (
    <SearchFormContainer>
      <header>
        <h2>Publicações</h2>
        <span>{postsCount} publicações</span>
      </header>

      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  )
}
