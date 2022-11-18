import styled from 'styled-components'

export const PostDetailsContainer = styled.div`
  > div {
    height: 10.5rem;
    background: ${(props) => props.theme.colors.base.profile};
    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
