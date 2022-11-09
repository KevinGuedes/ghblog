import styled from 'styled-components'
import headerBackground from '../../assets/cover.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${headerBackground}) no-repeat;
  background-size: cover;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    margin-top: 4rem;
  }
`
