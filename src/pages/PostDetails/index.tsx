import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Spinner } from '../../components/Spinner'
import { BlogContext, Post } from '../../contexts/BlogContext'
import { PostHeader } from './components/PostHeader'
import { PostViewer } from '../../components/PostVisualizer'
import { PostDetailsContainer } from './styles'

export function PostDetails() {
  const { postNumber } = useParams()
  const [post, setPost] = useState<Post>({} as Post)
  const [isLoading, setIsLoading] = useState(true)

  const fetchPostByPostNumber = useContextSelector(
    BlogContext,
    (context) => context.fetchPostByPostNumber,
  )

  const fetchPostDetailsByNumber = useCallback(
    async (postNumber: number) => {
      try {
        setIsLoading(true)
        const post = await fetchPostByPostNumber(Number(postNumber))
        if (post) {
          setPost(post)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    },
    [fetchPostByPostNumber],
  )

  useEffect(() => {
    if (postNumber) {
      fetchPostDetailsByNumber(Number(postNumber))
    }
  }, [fetchPostDetailsByNumber, postNumber])

  return (
    <PostDetailsContainer>
      {isLoading ? (
        <div>
          <Spinner message="Buscando dados da postagem..." />
        </div>
      ) : (
        <article>
          <PostHeader post={post} />
          <div>
            <PostViewer markdown={post.body} />
          </div>
        </article>
      )}
    </PostDetailsContainer>
  )
}
