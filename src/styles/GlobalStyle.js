import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		min-height: 100vh;
		padding: 0;
	}

	body {
		overflow-y: scroll;
	}
	* {
		box-sizing: border-box;
		outline: none;
	}

	body, button, input {
		font-family: 'Montserrat', sans-serif;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle;
