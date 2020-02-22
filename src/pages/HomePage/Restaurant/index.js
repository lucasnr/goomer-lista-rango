import React, { useState, useEffect } from 'react';

import { Container, Image, Info, Name, Address, Status } from './styles';

import { getDatesOfHour } from '../../../utils';

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
				const { from, to } = getDatesOfHour(currentHour);

				const isOpen = currentDate > from && currentDate < to;
				setOpen(isOpen);

				if (isOpen)
					setTimeout(() => {
						setOpen(false);
					}, to.getTime() - currentDate.getTime());
				else {
					let remainingTime = from.getTime() - currentDate.getTime();
					if (remainingTime < 0)
						remainingTime = currentDate.getTime() - from.getTime();

					setTimeout(() => {
						setOpen(true);
					}, remainingTime);
				}
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
