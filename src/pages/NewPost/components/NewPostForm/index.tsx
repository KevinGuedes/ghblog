import * as Tabs from '@radix-ui/react-tabs'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  NewPostFormContainer,
  SmallSpinner,
  SubmitButton,
  TabContent,
} from './styles'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PostViewer } from '../../../../components/PostVisualizer'
import { useContextSelector } from 'use-context-selector'
import { BlogContext } from '../../../../contexts/BlogContext'
import { useNavigate } from 'react-router-dom'

const newPostFormSchema = z.object({
  title: z.string().min(1, 'Informe o título da sua nova postagem'),
  body: z.string().min(1, 'Informe o conteúdo da sua nova postagem'),
})

type NewPostFormData = z.infer<typeof newPostFormSchema>

export function NewPostForm() {
  const createNewPost = useContextSelector(
    BlogContext,
    (context) => context.createNewPost,
  )

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<NewPostFormData>({
    resolver: zodResolver(newPostFormSchema),
  })

  const navigate = useNavigate()

  async function handleCreateNewPost(data: NewPostFormData) {
    const newPost = await createNewPost(data)
    if (newPost) {
      navigate(`/post/${newPost.number}`, {
        state: newPost,
      })
      reset()
    }
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
            <div></div>
          </div>
        </TabContent>
        <TabContent value="preview" variant="preview">
          <div>
            <PostViewer markdown={body} />
          </div>
        </TabContent>
      </Tabs.Root>

      <SubmitButton
        type="submit"
        disabled={isSubmitting || !isDirty || !isValid}
      >
        {isSubmitting ? (
          <>
            <SmallSpinner />
            Criando Post
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPlusCircle} />
            Criar Novo Post
          </>
        )}
      </SubmitButton>
    </NewPostFormContainer>
  )
}
