import styled from 'styled-components'

export const SearchFormContainer = styled.section`
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
