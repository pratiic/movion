import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/styles.global";
import { darkTheme, lightTheme } from "./styles/styles.themes";

import Header from "./components/header/header";
import MoviesPage from "./pages/movies/movies";
import TvShowsPage from "./pages/tv-shows/tv-shows";

class App extends React.Component {
	render() {
		const { currentTheme } = this.props;

		return (
			<BrowserRouter>
				<ThemeProvider
					theme={currentTheme === "dark" ? darkTheme : lightTheme}
				>
					<div className="app">
						<GlobalStyles />
						<Header />
						<Route
							exact
							path="/"
							render={() => <Redirect to="/movies" />}
						/>
						<Route path="/movies" component={MoviesPage} />
						<Route path="/tvshows" component={TvShowsPage} />
					</div>
				</ThemeProvider>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentTheme: state.theme.currentTheme,
	};
};

export default connect(mapStateToProps)(App);
