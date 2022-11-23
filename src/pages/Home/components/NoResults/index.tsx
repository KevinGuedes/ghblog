import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NoResultsContainer } from './styles'

export function NoResults() {
  return (
    <NoResultsContainer>
      <FontAwesomeIcon icon={faClipboard} size="3x" />
      <span>Nenhum resultado encontrado</span>
    </NoResultsContainer>
  )
}
