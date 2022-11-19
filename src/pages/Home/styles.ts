import styled from 'styled-components'

export const HomeContainer = styled.div`
  > div {
    margin-top: 3rem;
  }
`

export const SearchForm = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 4.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${(props) => props.theme.colors.base.subtitle};
      font-size: ${(props) => props.theme.sizes.l};
    }

    span {
      color: ${(props) => props.theme.colors.base.span};
      font-size: ${(props) => props.theme.sizes.sm};
    }
  }

  form {
    input {
      width: 100%;
      padding: 0.75rem 1rem;
      border-radius: 6px;
      border: 1px solid ${(props) => props.theme.colors.base.border};
      background: ${(props) => props.theme.colors.base.input};
      color: ${(props) => props.theme.colors.base.text};

      &::placeholder {
        color: ${(props) => props.theme.colors.base.label};
      }
    }
  }
`

export const SearchContainer = styled.div`
  margin-top: 3rem;
`

export const PostsList = styled.section`
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(21rem, 100%), 1fr));
`
