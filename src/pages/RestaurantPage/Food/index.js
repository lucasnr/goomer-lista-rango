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
import { formatMoneyBRL } from '../../../utils';
import notFoundImage from '../../../assets/img/image-not-found.png';

export default function Food({ image, name, price, priceFormatted, sales }) {
	const [sale, setSale] = useState();
	useEffect(() => {
		if (sales && sales.some(sale => sale.price < price)) {
			const sale = sales.sort((a, b) => (a.price > b.price ? 1 : -1))[0];
			setSale({ ...sale, priceFormatted: formatMoneyBRL(sale.price) });
		}
	}, [price, sales]);

	return (
		<Container>
			<Image src={image || notFoundImage} />
			{sale ? (
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
