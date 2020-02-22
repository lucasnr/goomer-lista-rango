import React, { useEffect, useState } from 'react';

import {
	Container,
	Image,
	Info,
	Name,
	Price,
	FormerPrice,
	Sale
} from './styles';
import { formatMoneyBRL, getDatesOfHour } from '../../../utils';
import notFoundImage from '../../../assets/img/image-not-found.png';

export default function Food({ image, name, price, priceFormatted, sales }) {
	const [sale, setSale] = useState();
	const [hasSale, setHasSale] = useState(false);

	useEffect(() => {
		if (sales && sales.some(sale => sale.price < price)) {
			const sale = sales.sort((a, b) => (a.price > b.price ? 1 : -1))[0];

			const currentDate = new Date();
			const currentDay = currentDate.getDay() + 1;
			const currentHour = sale.hours.find(hour =>
				hour.days.some(day => day === currentDay)
			);
			if (!currentHour) return;
			const { from, to } = getDatesOfHour(currentHour);

			const isValid = currentDate > from && currentDate <= to;
			setHasSale(isValid);
			setSale({ ...sale, priceFormatted: formatMoneyBRL(sale.price) });

			if (isValid)
				setTimeout(() => {
					setHasSale(false);
				}, to.getTime() - currentDate.getTime());
			else {
				let remainingTime = from.getTime() - currentDate.getTime();
				if (remainingTime < 0)
					remainingTime = currentDate.getTime() - from.getTime();

				setTimeout(() => {
					setHasSale(true);
				}, remainingTime);
			}
		}
	}, [price, sales]);

	return (
		<Container>
			<Image src={image || notFoundImage} />
			{hasSale ? (
				<Info>
					<Name>{name}</Name>
					<Sale>{sale.description}</Sale>
					<Price>{sale.priceFormatted}</Price>
					<FormerPrice>{priceFormatted}</FormerPrice>
				</Info>
			) : (
				<Info>
					<Name>{name}</Name>
					<Price>{priceFormatted}</Price>
				</Info>
			)}
		</Container>
	);
}
