import styled from 'styled-components'

export const NewPostFormContainer = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div[role='tablist'] {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    button {
      border-radius: 6px;
      background: transparent;
      padding: 0.25rem;
      border: 0;
      color: ${(props) => props.theme.colors.base.text};
      cursor: pointer;
      font-weight: bold;

      &[data-state='active'] {
        color: ${(props) => props.theme.colors.brand.blue};
      }
    }
  }

  input,
  textarea {
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

  textarea {
    resize: vertical;
    min-height: 5rem;
  }

  > button {
    padding: 1rem;
    border-radius: 6px;
    background: ${(props) => props.theme.colors.brand.blue};
    color: ${(props) => props.theme.colors.base.title};
    font-weight: bold;
    align-self: flex-end;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.colors.brand['blue-lighter']};
    }
  }
`
