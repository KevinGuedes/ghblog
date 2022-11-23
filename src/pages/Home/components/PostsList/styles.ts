import styled from 'styled-components'

export const PostsListContainer = styled.ul`
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(21rem, 100%), 1fr));
  list-style: none;

  &:has(li:hover) li:not(:hover) {
    opacity: 0.5;
    scale: 0.99;
  }
`
