import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/styles.global";
import { darkTheme, lightTheme } from "./styles/styles.themes";

import { updateCurrentUser } from "./redux/current-user/current-user.actions";
import { toggleNotification } from "./redux/notification/notification.actions";
import { fetchFavoritesSuccess } from "./redux/favorites/favorites.actions";
import { setTheme } from "./redux/theme/theme.actions";

import {
	auth,
	createUserDocument,
	getFavoritesCollectionRef,
	getAllFavoriteDocuments,
} from "./firebase/firebase.utils";

import Header from "./components/header/header";
import MoviesPage from "./pages/movies/movies";
import TvShowsPage from "./pages/tv-shows/tv-shows";
import SearchResultsPage from "./pages/search-results/search-results";
import DetailsPage from "./pages/details/details";
import SignInPage from "./pages/sign-in/sign-in";
import SignUpPage from "./pages/sign-up/sign-up";
import Notification from "./components/notification/notification";
import FavoritesPage from "./pages/favorites/favorites";

//this is the top level component of the application
//this is where other components are brought to be rendered
//this is where we also define routes to various parts of the application
class App extends React.Component {
	//this is a placeholder for the function we get back from auth.onAuthStateChanged()
	//it unsubscribes / closes all connection with the auth library
	unSubscribeFromAuth = null;

	setCurrentTheme = () => {
		const { setTheme } = this.props;

		const localStorage = window.localStorage;
		const localStorageCurrentTheme = localStorage.getItem("currentTheme");
		if (localStorageCurrentTheme) {
			setTheme(localStorageCurrentTheme);
		}
	};

	componentDidMount() {
		const { updateCurrentUser, toggleNotification } = this.props;

		this.setCurrentTheme();

		//whenever the authentication state in our application changes
		this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			//this userAuth is either an object representing the user that is currently sign in
			//or null meaning that no one is signed in or a user has signed out
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

	componentDidUpdate(prevProps) {
		const { currentUser, fetchFavoritesSuccess } = this.props;

		//if previously available current user is different from the currently available current user
		//and also if it actually exists (not null)
		if (prevProps.currentUser !== currentUser && currentUser) {
			//here we are fetcing the favorites of the current user as soon as they sign in
			getFavoritesCollectionRef(currentUser.id).then((collectionRef) => {
				collectionRef.onSnapshot(async (snapShot) => {
					const favorites = await getAllFavoriteDocuments(
						currentUser.id
					);

					fetchFavoritesSuccess(favorites);
				});
			});
		}
	}

	componentWillUnmount() {
		//whenever the application closes, we unsubscribe from the auth
		//library, preventing any memory leaks
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
									//if the user signs in
									//they are redirected to the home
									//same if they are currently signed in and
									//navigated to the signin page
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
									//same logic as with the signin page
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
									//same logic as with the signin page
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
		fetchFavoritesSuccess: (favorites) => {
			dispatch(fetchFavoritesSuccess(favorites));
		},
		setTheme: (theme) => {
			dispatch(setTheme(theme));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
