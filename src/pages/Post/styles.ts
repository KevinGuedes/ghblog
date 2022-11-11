import styled from 'styled-components'

export const PostContainer = styled.article`
  section {
    padding: 2.5rem 2rem;
  }
`

export const PostHeader = styled.header`
  background: ${(props) => props.theme.colors.base.profile};
  padding: 2rem 2.5rem;
  border-radius: 10px;

  h1 {
    font-size: ${(props) => props.theme.sizes['2xl']};
    color: ${(props) => props.theme.colors.base.title};
    margin: 1rem 0 0.75rem;
  }

  div:first-of-type {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      text-transform: uppercase;
      font-size: ${(props) => props.theme.sizes.xsm};
      color: ${(props) => props.theme.colors.brand.blue};

      border-bottom: 1px solid transparent;
      border-radius: 4px;
      padding: 0.1rem;

      &:hover {
        transition: border-color 0.3s;
        border-color: ${(props) => props.theme.colors.brand.blue};
      }
    }
  }
`

export const PostInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 0.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.colors.base.span};

    svg {
      color: ${(props) => props.theme.colors.base.label};
    }
  }
`
