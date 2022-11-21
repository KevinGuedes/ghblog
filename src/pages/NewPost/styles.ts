import styled from 'styled-components'

export const NewPostContainer = styled.section`
  header {
    padding: 2rem 2.5rem;
    height: 13.25rem;
    background: ${(props) => props.theme.colors.base.profile};
    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    display: flex;
    gap: 2rem;

    img {
      width: 9.25rem;
      height: 9.25rem;
      border-radius: 8px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    span,
    p {
      font-size: ${(props) => props.theme.sizes.l};
    }
  }
`
