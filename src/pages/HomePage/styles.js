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
	grid-column-gap: 2em;
	grid-row-gap: 1em;
	margin: 2em auto;
	max-width: 1200px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
