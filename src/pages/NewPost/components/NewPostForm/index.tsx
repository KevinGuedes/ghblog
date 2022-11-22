import * as Tabs from '@radix-ui/react-tabs'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { NewPostFormContainer, TabContent } from './styles'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostViewer } from '../../../../components/PostVisualizer'

const newPostFormSchema = z.object({
  title: z.string(),
  body: z.string(),
})

type NewPostFormData = z.infer<typeof newPostFormSchema>

export function NewPostForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<NewPostFormData>({
    resolver: zodResolver(newPostFormSchema),
  })

  function handleCreateNewPost(data: NewPostFormData) {
    console.log(data)
    reset()
  }

  const body = watch('body')

  return (
    <NewPostFormContainer onSubmit={handleSubmit(handleCreateNewPost)}>
      <h2>Nova Postagem</h2>
      <input
        type="text"
        id="title"
        placeholder="Título"
        required
        {...register('title')}
      />

      <Tabs.Root defaultValue="body">
        <Tabs.List aria-label="Crie uma nova postagem">
          <Tabs.Trigger value="body">Conteúdo</Tabs.Trigger>
          <Tabs.Trigger value="preview">Pré-Visualização</Tabs.Trigger>
        </Tabs.List>

        <TabContent value="body" variant="input">
          <div>
            <textarea
              id="body"
              placeholder="Conteúdo"
              required
              {...register('body')}
            />
          </div>
        </TabContent>
        <TabContent value="preview" variant="preview">
          <div>
            <PostViewer markdown={body} />
          </div>
        </TabContent>
      </Tabs.Root>

      <button type="submit" disabled={isSubmitting}>
        <FontAwesomeIcon icon={faPlusCircle} />
        Criar Nova Postagem
      </button>
    </NewPostFormContainer>
  )
}
