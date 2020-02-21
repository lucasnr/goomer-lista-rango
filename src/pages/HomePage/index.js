import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/Form';
import Restaurant from './Restaurant';
import { Container, Greetings, Restaurants } from './styles';

import { getRestaurants } from '../../services/api';

export default function HomePage() {
	let allRestaurants = useRef([]);
	const [restaurants, setRestaurants] = useState();
	const inputRef = useRef(null);

	useEffect(() => {
		getRestaurants().then(({ data }) => {
			allRestaurants.current = data;
			setRestaurants(data);
		});
	}, []);

	const handleSubmit = event => {
		event.preventDefault();

		let { value } = inputRef.current;
		value = value.trim().toLowerCase();
		if (value === '') {
			setRestaurants(allRestaurants.current);
			return;
		}

		setRestaurants(
			allRestaurants.current.filter(
				restaurant =>
					restaurant.name.toLowerCase().includes(value) ||
					restaurant.address.toLowerCase().includes(value)
			)
		);
	};

	return (
		<Container>
			<Greetings>Bem-vindo ao Lista Rango</Greetings>
			<Form onSubmit={handleSubmit}>
				<label htmlFor="restaurant">Buscar estabelecimento</label>
				<input autoComplete="off" ref={inputRef} id="restaurant" type="text" />
			</Form>

			{restaurants && restaurants.length > 0 ? (
				<Restaurants>
					{restaurants.map(restaurant => (
						<Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
							<Restaurant {...restaurant} />
						</Link>
					))}
				</Restaurants>
			) : (
				<h5>Nenhum resultado encontrado</h5>
			)}
		</Container>
	);
}
