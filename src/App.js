import React from "react";

import { GlobalStyles } from "./styles/styles.global";

import Header from "./components/header/header";

import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="app">
					<GlobalStyles />
					<Header />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
