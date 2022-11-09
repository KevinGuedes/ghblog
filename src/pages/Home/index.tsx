import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { PostList } from './styles'

export function Home() {
  return (
    <section>
      <Profile />
      <SearchForm />
      <PostList>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostList>
    </section>
  )
}
