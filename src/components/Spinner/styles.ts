import styled, { css } from 'styled-components'

interface SpinnerContainerProps {
  showBackground: boolean
}

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 2.5rem;

  height: 13.25rem;
  border-radius: 10px;

  ${(props) =>
    props.showBackground &&
    css`
      background: ${(props) => props.theme.colors.base.profile};
      box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    `}

  span {
    font-size: ${(props) => props.theme.sizes.l};
  }
`

export const SpinnerElement = styled.div`
  border: 8px solid ${(props) => props.theme.colors.base.label};
  border-radius: 50%;
  border-top: 8px solid ${(props) => props.theme.colors.brand.blue};
  width: 85px;
  height: 85px;
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
