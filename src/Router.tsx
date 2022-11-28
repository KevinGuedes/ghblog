import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { NewPost } from './pages/NewPost'
import { PostDetails } from './pages/PostDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/post/:postNumber" element={<PostDetails />} />
        <Route path="/post/new" element={<NewPost />} />
      </Route>
    </Routes>
  )
}
