import * as Tabs from '@radix-ui/react-tabs'

import { NewPostFormContainer } from './styles'

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function NewPostForm() {
  return (
    <NewPostFormContainer>
      <h2>Nova Postagem</h2>
      <input type="text" id="title" placeholder="Título" required />

      <div>
        <Tabs.Root defaultValue="body">
          <Tabs.List className="TabsList" aria-label="Crie uma nova postagem">
            <Tabs.Trigger className="TabsTrigger" value="body">
              Conteúdo
            </Tabs.Trigger>
            <Tabs.Trigger className="TabsTrigger" value="preview">
              Pré-Visualização
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="body">
            <textarea id="body" placeholder="Conteúdo" required />
          </Tabs.Content>
          <Tabs.Content value="preview">
            <p>asudhasui</p>
          </Tabs.Content>
        </Tabs.Root>
      </div>

      <button type="submit">
        <FontAwesomeIcon icon={faPlusCircle} />
        Criar Nova Postagem
      </button>
    </NewPostFormContainer>
  )
}
