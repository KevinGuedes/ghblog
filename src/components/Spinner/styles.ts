import styled from 'styled-components'

export const SpinnerContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const SpinnerElement = styled.div`
  border: 10px solid ${(props) => props.theme.colors.base.label};
  border-radius: 50%;
  border-top: 10px solid ${(props) => props.theme.colors.brand.blue};
  width: 100px;
  height: 100px;
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
