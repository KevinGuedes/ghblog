import { useParams } from 'react-router-dom'

export function Post() {
  const { postId } = useParams()
  return <div>{postId}</div>
}
