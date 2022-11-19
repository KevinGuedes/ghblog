import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:focus {
		outline: 0;
		box-shadow: 0 0 0 1px ${(props) => props.theme.colors.brand.blue};
	}

  body {
    background: ${(props) => props.theme.colors.base.background};
    color: ${(props) => props.theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: overlay;
  }

	body, input, textarea, button {
		font: 400 ${(props) => props.theme.sizes.m} 'Nunito', sans-serif;
    line-height: 1.6;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${(props) => props.theme.colors.base.label};
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`
