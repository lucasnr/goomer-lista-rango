import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import Form from '../../components/Form';
import Food from './Food';
import {
	Container,
	Restaurant,
	RestaurantInfo,
	RestaurantImage,
	RestaurantName,
	RestaurantAddress,
	RestaurantHour,
	FoodGroup,
	FoodGroupName
} from './styles';

import { formatMoneyBRL, parseDayOfWeek } from '../../utils';
import { getRestaurantById, getMenuByRestaurantId } from '../../services/api';

export default function RestaurantPage() {
	const [restaurant, setRestaurant] = useState({});
	const [menu, setMenu] = useState();
	const inputRef = useRef(null);
	const { id } = useParams();

	useEffect(() => {
		getRestaurantById(id).then(async ({ data }) => {
			const { data: menu } = await getMenuByRestaurantId(id);
			const groups = groupMenu(menu);
			setMenu(groups);

			if (data.hours) {
				const formattedHours = data.hours.map(hour => {
					const { days, from, to } = hour;
					const firstDay = parseDayOfWeek(days[0]);
					const lastDay = parseDayOfWeek(days[days.length - 1]);
					return {
						days: `${firstDay} à ${lastDay}: `,
						hours: `${from} às ${to}`
					};
				});
				setRestaurant({ ...data, formattedHours, menu: groups });
			} else setRestaurant({ ...data, menu: groups });
		});
	}, [id]);

	const handleSubmit = event => {
		event.preventDefault();
		let { value } = inputRef.current;
		if (value === '') setMenu(restaurant.menu);

		value = value.trim().toLowerCase();
		const results = restaurant.menu
			.map(group => ({
				name: group.name,
				foods: group.foods.filter(food =>
					food.name.toLowerCase().includes(value)
				)
			}))
			.filter(group => group.foods.length > 0);

		setMenu(results);
	};

	const { image, name, address, formattedHours } = restaurant;
	return (
		<Container>
			<Restaurant>
				<RestaurantImage src={image} />
				<RestaurantInfo>
					<RestaurantName>{name}</RestaurantName>
					<RestaurantAddress>{address}</RestaurantAddress>

					{formattedHours &&
						formattedHours.map((formattedHour, index) => (
							<RestaurantHour key={`hour-${index}`}>
								{formattedHour.days}
								<strong>{formattedHour.hours}</strong>
							</RestaurantHour>
						))}
				</RestaurantInfo>
			</Restaurant>

			<Form onSubmit={handleSubmit}>
				<label htmlFor="menu">Buscar no cardápio</label>
				<input id="menu" autoComplete="off" type="text" ref={inputRef} />
			</Form>

			{menu && menu.length ? (
				menu.map(
					(group, index) =>
						group.foods.length > 0 && (
							<FoodGroup key={`food-group-${index}`}>
								<FoodGroupName>{group.name}</FoodGroupName>
								{group.foods.map((food, index) => (
									<Food key={`food-${index}`} {...food} />
								))}
							</FoodGroup>
						)
				)
			) : (
				<h5>Nenhum resultado encontrado</h5>
			)}
		</Container>
	);
}

function groupMenu(menu) {
	const groups = [];
	menu.forEach(food => {
		const name = food.group.toLowerCase();
		food.priceFormatted = formatMoneyBRL(food.price);

		let group = groups.find(group => group.name === name);
		if (group) group.foods.push(food);
		else groups.push({ name, foods: [food] });
	});

	return groups;
}
