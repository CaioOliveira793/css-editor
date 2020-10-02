import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		border-collapse: collapse;
		font-size: 16px;
		font-weight: 400;
		font-family: 'Roboto', 'Helvetica', sans-serif;
	}

	html {
		scroll-behavior: smooth;
	}

	body, #__next {
		background: ${({ theme }) => theme.color.background};
	}
`;
