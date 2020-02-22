import styled from 'styled-components';

export const Container = styled.main`
	color: #404040;
	max-width: 800px;
	padding: 1em;

	@media (min-width: 768px) {
		margin: 0px auto 0px 3.5em;
	}
`;

export const Restaurant = styled.div`
	align-items: flex-start;
	display: flex;
`;

export const RestaurantImage = styled.img`
	border-radius: 4px;
	height: 145px;
	object-fit: cover;
	object-position: center;
	width: 145px;
`;

export const RestaurantInfo = styled.div`
	padding: 0px 1em;
`;

export const RestaurantName = styled.h2`
	font-size: 1.5em;
	font-weight: bold;
	margin: 0px;
`;

export const RestaurantAddress = styled.h3`
	color: #404040;
	font-size: 1em;
	font-weight: normal;
	margin: 4px 0px;
`;

export const RestaurantHour = styled.span`
	display: block;
	font-size: 0.75em;
	margin-bottom: 4px;
`;

export const FoodGroup = styled.div`
	display: grid;
	grid-gap: 1em;
	margin: 2em 0px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const FoodGroupName = styled.h3`
	border-bottom: 2px solid #404040;
	font-size: 1em;
	padding: 0px 0px 0.5em 1em;
	text-transform: capitalize;

	@media (min-width: 768px) {
		grid-column: 1 / 3;
	}
`;
