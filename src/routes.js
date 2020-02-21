import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/restaurant/:id" exact component={RestaurantPage} />
		</Switch>
	);
}
