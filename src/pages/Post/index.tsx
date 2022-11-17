import { PostHeader } from './components/PostHeader'
import { PostViewer } from './components/PostVisualizer'

export function Post() {
  return (
    <article>
      <PostHeader />
      <PostViewer />
    </article>
  )
}
