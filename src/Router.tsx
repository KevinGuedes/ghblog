import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
