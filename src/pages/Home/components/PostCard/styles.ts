import styled from 'styled-components'
import { devices } from '../../../../styles/devices'

export const PostCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 16.25rem;
  max-width: 26rem;

  background: ${(props) => props.theme.colors.base.post};
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    border-color: ${(props) => props.theme.colors.base.label};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h1 {
      flex: 1;
      color: ${(props) => props.theme.colors.base.title};
      font-size: ${(props) => props.theme.sizes.xl};

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    time {
      color: ${(props) => props.theme.colors.base.span};

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  div {
    overflow: hidden;
  }

  @media ${devices.mobile} {
    max-width: none;
  }
`
