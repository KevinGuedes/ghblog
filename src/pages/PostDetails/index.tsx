import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Spinner } from '../../components/Spinner'
import { BlogContext, Post } from '../../contexts/BlogContext'
import { PostHeader } from './components/PostHeader'
import { PostViewer } from '../../components/PostVisualizer'
import { PostDetailsContainer } from './styles'

export function PostDetails() {
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

  const { postNumber } = useParams()
  const location = useLocation()
  const createdPost = location.state

  useEffect(() => {
    async function fetchPostDetails() {
      if (postNumber) {
        const post = await fetchPostByPostNumber(Number(postNumber))
        setPost(post)
      }
    }

    if (createdPost) {
      setPost(createdPost)
    } else {
      fetchPostDetails()
    }
  }, [fetchPostByPostNumber, postNumber, createdPost])

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
