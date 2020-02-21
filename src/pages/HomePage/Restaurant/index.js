import React, { useState, useEffect } from 'react';

import { Container, Image, Info, Name, Address, Status } from './styles';

export default function Restaurant({ name, address, image, hours }) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (hours) {
			const currentDate = new Date();
			const currentDay = currentDate.getDay() + 1;
			const currentHour = hours.find(hour =>
				hour.days.some(day => day === currentDay)
			);
			if (currentHour) {
				const { from, to } = currentHour;

				const fromDate = new Date();
				fromDate.setHours(from.substring(0, 2), from.substring(3, 5), 0);

				let toDate = new Date();
				toDate.setHours(to.substring(0, 2), to.substring(3, 5), 0);

				if (fromDate > toDate)
					toDate = new Date(toDate.getTime() + 24 * 60 * 60 * 1000);

				const isOpen = currentDate > fromDate && currentDate < toDate;
				setOpen(isOpen);

				setTimeout(() => {
					setOpen(!isOpen);
				}, toDate.getTime() - currentDate.getTime());
			}
		}
	}, [hours]);

	return (
		<Container>
			<Image src={image} />

			<Info>
				<Name>{name}</Name>
				<Address>{address}</Address>
			</Info>
			<Status open={open}>{open ? 'Aberto agora' : 'Fechado'}</Status>
		</Container>
	);
}
