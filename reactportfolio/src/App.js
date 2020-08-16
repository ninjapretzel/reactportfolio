import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/Header"
import Footer from "./components/Footer"

import FourOhFour from "./pages/FourOhFour"; 
import Home from "./pages/Home"; 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Portfolio from './pages/Portfolio';

class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/portfolio" component={Portfolio} />
						<Route component={FourOhFour} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
