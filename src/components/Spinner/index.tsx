import { SpinnerContainer, SpinnerElement } from './styles'

interface SpinnerProps {
  message?: string
}

export function Spinner({ message }: SpinnerProps) {
  return (
    <SpinnerContainer>
      <SpinnerElement />
      {message !== undefined && <span>{message}</span>}
    </SpinnerContainer>
  )
}
