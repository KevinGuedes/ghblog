import { SpinnerContainer, SpinnerElement } from './styled'

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
