import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  gap: 2rem;

  padding: 2rem 2.5rem;
  background: ${(props) => props.theme.colors.base.profile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: ${(props) => props.theme.sizes['2xl']};
    color: ${(props) => props.theme.colors.base.title};
    margin-bottom: 0.5rem;
  }

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

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.colors.base.subtitle};

    svg {
      color: ${(props) => props.theme.colors.base.label};
    }
  }
`
