import { SpinnerContainer, SpinnerElement } from './styles'

interface SpinnerProps {
  message?: string
  showBackground?: boolean
}

export function Spinner({ showBackground = true, message }: SpinnerProps) {
  return (
    <SpinnerContainer showBackground={showBackground}>
      <SpinnerElement />
      {message !== undefined && <span>{message}</span>}
    </SpinnerContainer>
  )
}
