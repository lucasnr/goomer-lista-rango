import React from 'react';

import { Container, Icon } from './styles';

export default function Form({ children, ...rest }) {
	return (
		<Container {...rest}>
			{children}

			<button type="submit">
				<Icon />
			</button>
		</Container>
	);
}
