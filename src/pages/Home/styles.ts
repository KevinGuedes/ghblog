import styled from 'styled-components'

export const HomeContainer = styled.div`
  > a {
    width: fit-content;
    text-decoration: none;
    margin-top: 3rem;
    margin-left: auto;

    padding: 0.75rem;
    border-radius: 6px;
    background: ${(props) => props.theme.colors.brand.blue};
    color: ${(props) => props.theme.colors.base.title};
    font-weight: bold;
    align-self: flex-end;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    border: 0;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      transition: background-color 0.2s;
      background: ${(props) => props.theme.colors.brand['blue-lighter']};
    }
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

export const SearchResults = styled.div`
  margin-top: 3rem;
`
