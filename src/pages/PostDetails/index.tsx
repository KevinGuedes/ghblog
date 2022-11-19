import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Spinner } from '../../components/Spinner'
import { BlogContext, Post } from '../../contexts/BlogContext'
import { PostHeader } from './components/PostHeader'
import { PostViewer } from '../../components/PostVisualizer'
import { PostDetailsContainer } from './styles'

export function PostDetails() {
  const { postNumber } = useParams()
  const [post, setPost] = useState<Post | undefined>()

  const { isLoading, fetchPostByPostNumber } = useContextSelector(
    BlogContext,
    (context) => {
      return {
        isLoading: context.isLoading,
        fetchPostByPostNumber: context.fetchPostByPostNumber,
      }
    },
  )

  useEffect(() => {
    async function fetchPostDetails() {
      if (postNumber && post === undefined) {
        const post = await fetchPostByPostNumber(Number(postNumber))
        setPost(post)
      }
    }

    fetchPostDetails()
  }, [fetchPostByPostNumber, postNumber, post])

  return (
    <PostDetailsContainer>
      {isLoading || post === undefined ? (
        <Spinner message="Buscando dados da postagem..." />
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
