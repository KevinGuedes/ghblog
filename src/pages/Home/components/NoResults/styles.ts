import styled from 'styled-components'

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  span {
    font-size: ${(props) => props.theme.sizes.l};
  }
`
