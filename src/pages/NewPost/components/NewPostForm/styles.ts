import styled, { css } from 'styled-components'
import { Content } from '@radix-ui/react-tabs'

export const NewPostFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div[role='tablist'] {
    width: fit-content;
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;

    button {
      background: transparent;
      padding: 0.25rem;
      border: 0;
      color: ${(props) => props.theme.colors.base.text};
      font-weight: bold;
      cursor: pointer;

      &[data-state='active'] {
        color: ${(props) => props.theme.colors.brand.blue};
        box-shadow: inset 0 -1px 0 0 ${(props) => props.theme.colors.brand.blue},
          0 0.5px 0 0 ${(props) => props.theme.colors.brand.blue};
      }
    }

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.brand.blue};
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
    min-height: 12.5rem;
  }

  button[type='submit'] {
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

interface TabContentProps {
  variant: 'preview' | 'input'
}

export const TabContent = styled(Content)<TabContentProps>`
  > div {
    ${(props) =>
      props.variant === 'input'
        ? css`
            line-height: 0;
          `
        : css`
            min-height: 5rem;
            padding: 1rem;
            border: 1px solid ${(props) => props.theme.colors.base.border};
            border-radius: 6px;
          `}
  }
`
