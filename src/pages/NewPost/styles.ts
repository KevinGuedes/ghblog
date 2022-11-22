import styled from 'styled-components'

export const NewPostContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  header {
    padding: 2rem 2.5rem;
    height: 13.25rem;
    background: ${(props) => props.theme.colors.base.profile};
    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100%;

      h1 {
        font-weight: 400;
      }
    }

    p {
      font-size: ${(props) => props.theme.sizes.l};
    }
  }
`

export const HeaderNavigation = styled.nav`
  width: fit-content;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.sizes.xsm};
    color: ${(props) => props.theme.colors.brand.blue};

    border-bottom: 1px solid transparent;
    padding: 0.1rem;

    &:hover {
      transition: border-color 0.3s;
      border-color: ${(props) => props.theme.colors.brand.blue};
    }
  }
`
