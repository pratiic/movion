import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/styles.global";
import { darkTheme, lightTheme } from "./styles/styles.themes";

import { auth, createUserDocument } from "./firebase/firebase.utils";

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
import FavoritesPage from "./pages/favorites/favorites";

class App extends React.Component {
	unSubscribeFromAuth = null;

	componentDidMount() {
		const { updateCurrentUser, toggleNotification } = this.props;

		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					updateCurrentUser({ ...snapShot.data() });
					toggleNotification("signed in successfully", "success");
				});
			} else {
				updateCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unSubscribeFromAuth();
	}

	render() {
		const {
			currentTheme,
			currentUser,
			notificationMessage,
			notificationType,
		} = this.props;

		return (
			<BrowserRouter>
				<ThemeProvider
					theme={currentTheme === "dark" ? darkTheme : lightTheme}
				>
					<div className="app">
						<GlobalStyles />
						<Header />
						<Notification
							message={notificationMessage}
							type={notificationType}
						/>
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
							<Route
								path="/favorites"
								render={() => {
									return currentUser ? (
										<FavoritesPage />
									) : (
										<Redirect to="/signin" />
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
		notificationType: state.notification.notificationType,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateCurrentUser: (user) => {
			dispatch(updateCurrentUser(user));
		},
		toggleNotification: (notificationMessage, notificationType) => {
			dispatch(toggleNotification(notificationMessage, notificationType));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
