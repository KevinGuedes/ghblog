import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Spinner } from '../../components/Spinner'
import { BlogContext } from '../../contexts/BlogContext'
import { NewPostForm } from './components/NewPostForm'
import { HeaderNavigation, NewPostContainer } from './styles'

export function NewPost() {
  const {
    isLoading,
    profileData: { name },
  } = useContextSelector(BlogContext, (context) => {
    return {
      isLoading: context.isLoading,
      profileData: context.profileData,
    }
  })

  return (
    <>
      {isLoading ? (
        <Spinner message="Buscando dados do perfil..." />
      ) : (
        <NewPostContainer>
          <header>
            <HeaderNavigation>
              <Link to="/">
                <FontAwesomeIcon icon={faAngleLeft} /> Voltar
              </Link>
            </HeaderNavigation>
            <div>
              <h1>
                Olá, <strong>{name}</strong>!
              </h1>
              <p>
                Que tal criar uma <strong>nova postagem</strong> para o seu
                blog? Basta preencher o formulário abaixo e ser feliz! No
                conteúdo da postagem, utilize a linguagem <i>markdown</i> e
                capriche no assunto!
              </p>
            </div>
          </header>
          <NewPostForm />
        </NewPostContainer>
      )}
    </>
  )
}
