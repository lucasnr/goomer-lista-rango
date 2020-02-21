import styled from 'styled-components';

export const Container = styled.main`
	padding: 1.5em 1em;
	text-align: center;

	a {
		text-decoration: none;
	}
`;

export const Greetings = styled.h1`
	margin: 0px;
`;

export const Restaurants = styled.div`
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(3, 1fr);
	margin: 3em auto;
	max-width: 1200px;
`;
