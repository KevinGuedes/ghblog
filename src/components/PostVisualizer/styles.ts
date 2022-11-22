import styled from 'styled-components'

export const PostViewerContainer = styled.div`
  overflow: hidden;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.brand.blue};
    border-bottom: 1px solid transparent;
    padding-inline: 2px;

    &:hover {
      transition: border-color 0.3s;
      border-color: ${(props) => props.theme.colors.brand.blue};
    }
  }

  h1 {
    font-size: ${(props) => props.theme.sizes['2xl']};

    &:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  h2 {
    font-size: ${(props) => props.theme.sizes.xl};
    margin-top: 0.75rem;
  }

  h3 {
    font-size: ${(props) => props.theme.sizes.l};
    margin-top: 0.5rem;
  }

  hr {
    border: 0.5px solid ${(props) => props.theme.colors.base.border};
    margin: 1rem 0;
  }

  pre {
    font-size: ${(props) => props.theme.sizes.sm};
    margin: 1.5rem 0;

    div {
      border: 1px solid ${(props) => props.theme.colors.base.border};
      background: ${(props) => props.theme.colors.base.profile} !important;
    }
  }

  ul,
  ol {
    padding-left: 2rem;
  }

  img {
    width: 100%;
    height: auto;
  }

  table {
    border-collapse: collapse;

    td,
    th {
      padding: 0.5rem 1rem;
      border: 1px solid ${(props) => props.theme.colors.base.border};
    }
  }

  p {
    white-space: pre;
  }
`
