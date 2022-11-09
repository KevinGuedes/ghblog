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
    background-color: ${(props) => props.theme.colors.base.background};
    color: ${(props) => props.theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
  }

	body, input, textarea, button {
		font: 400 ${(props) => props.theme.sizes.m} 'Nunito', sans-serif;
    line-height: 1.6;
  }
`
