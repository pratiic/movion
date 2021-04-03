import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, StyledApp } from "./styles/styles.global";
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
import ChatPage from "./pages/chat/chat";
import FindFriendsPage from "./pages/find-friends/find-friends";
import ChatContainerPage from "./pages/chat-container/chat-container";
import Main from "./components/main/main";

//this is the top level component of the application
//this is where other components are brought to be rendered
//this is where we also define routes to various parts of the application
const App = (props) => {
	const setCurrentTheme = () => {
		const { setTheme } = props;

		const localStorage = window.localStorage;
		const localStorageCurrentTheme = localStorage.getItem("currentTheme");
		if (localStorageCurrentTheme) {
			setTheme(localStorageCurrentTheme);
		}
	};

	useEffect(() => {
		const { updateCurrentUser, toggleNotification } = props;

		setCurrentTheme();

		//whenever the authentication state in our application changes
		const unSubscribeFromAuth = auth.onAuthStateChanged(
			async (userAuth) => {
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
			}
		);

		return () => {
			//whenever the application closes, we unsubscribe from the auth
			//library, preventing any memory leaks
			unSubscribeFromAuth();
		};
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		const { currentUser, fetchFavoritesSuccess } = props;

		//if previously available current user is different from the currently available current user
		//and also if it actually exists (not null)
		if (currentUser) {
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
		// eslint-disable-next-line
	}, [props.currentUser]);

	const {
		currentTheme,
		currentUser,
		notificationMessage,
		notificationType,
	} = props;

	return (
		<BrowserRouter>
			<ThemeProvider
				theme={currentTheme === "dark" ? darkTheme : lightTheme}
			>
				<StyledApp>
					<GlobalStyles />
					<Header />
					<Notification
						message={notificationMessage}
						type={notificationType}
					/>
					<Switch>
						<Route exact path="/">
							<Redirect to="/movies" />
						</Route>
						<Route path="/movies">
							<MoviesPage />
						</Route>
						<Route path="/tvshows">
							<TvShowsPage />
						</Route>
						<Route path="/search/:query">
							<SearchResultsPage />
						</Route>
						<Route path="/details/:type/:id">
							<DetailsPage />
						</Route>
						<Route path="/signin">
							{
								//if the user signs in
								//they are redirected to the home
								//same if they are currently signed in and
								//navigated to the signin page

								currentUser ? (
									<Redirect to="/movies" />
								) : (
									<SignInPage />
								)
							}
						</Route>
						<Route path="/signup">
							{currentUser ? (
								<Redirect to="/movies" />
							) : (
								<SignUpPage />
							)}
						</Route>
						<Route path="/favorites">
							{currentUser ? (
								<FavoritesPage />
							) : (
								<Redirect to="/signin" />
							)}
						</Route>
						<Route path="/chat/:id">
							{currentUser ? (
								<ChatContainerPage />
							) : (
								<Redirect to="/signin" />
							)}
						</Route>
						<Route path="/chat" exact>
							{currentUser ? (
								<ChatPage />
							) : (
								<Redirect to="/signin" />
							)}
						</Route>
						<Route path="/find-friends">
							{currentUser ? (
								<FindFriendsPage />
							) : (
								<Redirect to="/signin" />
							)}
						</Route>
					</Switch>
				</StyledApp>
			</ThemeProvider>
		</BrowserRouter>
	);
};

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
