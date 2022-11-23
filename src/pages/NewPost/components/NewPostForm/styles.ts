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
    max-height: none;
  }
`

export const SubmitButton = styled.button`
  padding: 0.75rem;
  border-radius: 6px;
  width: 11rem;
  background: ${(props) => props.theme.colors.brand.blue};
  color: ${(props) => props.theme.colors.base.title};
  font-weight: bold;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
`

interface TabContentProps {
  variant: 'preview' | 'input'
}

export const TabContent = styled(Content)<TabContentProps>`
  border-radius: 6px;

  > div {
    border-radius: 6px;

    ${(props) =>
      props.variant === 'input'
        ? css`
            line-height: 0;
            position: relative;
            z-index: 1;

            :focus-within {
              div {
                border-top: 14px solid
                  ${(props) => props.theme.colors.brand.blue};
              }
            }

            div {
              border-top: 14px solid ${(props) => props.theme.colors.base.label};
              border-left: 14px solid transparent;
              border-right: 14px solid transparent;
              position: absolute;
              pointer-events: none;
              width: 0px;
              height: 0px;
              bottom: -5px;
              right: -11px;
              z-index: 2;
              -webkit-transform: rotate(-45deg);
            }
          `
        : css`
            min-height: 5rem;
            padding: 1rem;
            border: 1px solid ${(props) => props.theme.colors.base.border};
          `}
  }
`

export const SmallSpinner = styled.div`
  border: 4px solid ${(props) => props.theme.colors.brand['blue-lighter']};
  border-radius: 50%;
  border-top: 4px solid ${(props) => props.theme.colors.base.title};
  width: 20px;
  height: 20px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
