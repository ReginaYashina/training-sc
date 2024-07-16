import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*, 
	*::before,
	*::after{
		margin: 0;
		padding: 0;
		box-sizing:border-box;
	}

	body {
		min-height: 100vh;
		font-family: 'Inter', sans-serif;
	  display: flex;
	  justify-content:center;align-items: center;
	  gap: 20px;
}

`;