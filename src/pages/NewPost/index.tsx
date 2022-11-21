import { useContextSelector } from 'use-context-selector'
import { Spinner } from '../../components/Spinner'
import { BlogContext } from '../../contexts/BlogContext'
import { NewPostForm } from './components/NewPostForm'
import { NewPostContainer } from './styles'

export function NewPost() {
  const {
    isLoading,
    profileData: { name, avatar_url: avatarUrl },
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
            <img src={avatarUrl} alt="" />
            <div>
              <h1>Olá, {name}!</h1>
              <span>
                Que tal criar uma <strong>nova postagem</strong> para o seu
                blog?
              </span>
              <p>
                Basta preencher o formulário abaixo e ser feliz! No conteúdo da
                postagem utilize a linguagem <i>markdown</i> e capriche no
                assunto!
              </p>
            </div>
          </header>
          <NewPostForm />
        </NewPostContainer>
      )}
    </>
  )
}
