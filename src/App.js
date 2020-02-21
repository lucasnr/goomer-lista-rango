import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';

import GlobalStyle from './styles/GlobalStyle';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Header />
			<Routes />
		</Router>
	);
}

export default App;
