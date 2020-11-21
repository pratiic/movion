import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/styles.global";
import { darkTheme, lightTheme } from "./styles/styles.themes";

import { auth } from "./firebase/firebase.utils";

import { updateCurrentUser } from "./redux/current-user/current-user.actions";
import { toggleNotification } from "./redux/notification/notification.actions";

import Header from "./components/header/header";
import MoviesPage from "./pages/movies/movies";
import TvShowsPage from "./pages/tv-shows/tv-shows";
import SearchResultsPage from "./pages/search-results/search-results";
import DetailsPage from "./pages/details/details";
import SignInPage from "./pages/sign-in/sign-in";
import SignUpPage from "./pages/sign-up/sign-up";
import Notification from "./components/notification/notification";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unSubscribeFromAuth = null;

	componentDidMount() {
		const { updateCurrentUser, toggleNotification } = this.props;

		this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
			//this.setState({ currentUser: user });
			updateCurrentUser(user);

			if (user) {
				toggleNotification("signed in successfully");
			}
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		const { currentTheme, currentUser, notificationMessage } = this.props;

		return (
			<BrowserRouter>
				<ThemeProvider
					theme={currentTheme === "dark" ? darkTheme : lightTheme}
				>
					<div className="app">
						<GlobalStyles />
						<Header currentUser={this.state.currentUser} />
						<Notification message={notificationMessage} />
						<Switch>
							<Route
								exact
								path="/"
								render={() => <Redirect to="/movies" />}
							/>
							<Route path="/movies" component={MoviesPage} />
							<Route path="/tvshows" component={TvShowsPage} />
							<Route
								path="/search/:query"
								component={SearchResultsPage}
							/>
							<Route
								path="/details/:type/:id"
								component={DetailsPage}
							/>
							<Route
								path="/signin"
								render={() => {
									return currentUser ? (
										<Redirect to="/movies" />
									) : (
										<SignInPage />
									);
								}}
							/>
							<Route
								path="/signup"
								render={() => {
									return currentUser ? (
										<Redirect to="/movies" />
									) : (
										<SignUpPage />
									);
								}}
							/>
						</Switch>
					</div>
				</ThemeProvider>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentTheme: state.theme.currentTheme,
		currentUser: state.currentUser.currentUser,
		notificationMessage: state.notification.notificationMessage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateCurrentUser: (user) => {
			dispatch(updateCurrentUser(user));
		},
		toggleNotification: (notificationMessage) => {
			dispatch(toggleNotification(notificationMessage));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
