import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
	Route,
	Redirect,
	Switch,
	useLocation,
	useHistory,
} from "react-router-dom";
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
import { setCurrentTheme } from "./utils/utils.theme";
import { fetchUserNotifications } from "./pages/user-notifications/user-notifications.utils";
import { fetchUserChats } from "./pages/chats-container/chats-container.utils";
import { fetchChatRequests } from "./pages/chat-requests/chat-requests.utils";

import Header from "./components/header/header";
import MoviesPage from "./pages/movies/movies";
import TvShowsPage from "./pages/tv-shows/tv-shows";
import SearchResultsPage from "./pages/search-results/search-results";
import DetailsPage from "./pages/details/details";
import SignInPage from "./pages/sign-in/sign-in";
import SignUpPage from "./pages/sign-up/sign-up";
import Notification from "./components/notification/notification";
import FavoritesPage from "./pages/favorites/favorites";
import ChatsContainerPage from "./pages/chats-container/chats-container";
import FindFriendsPage from "./pages/find-friends/find-friends";
import ChatContainerPage from "./pages/chat-container/chat-container";
import UserNotifications from "./pages/user-notifications/user-notifications";
import ChatRequests from "./pages/chat-requests/chat-requests";
import Modal from "./components/modal/modal";

//this is the top level component of the application
//this is where other components are brought to be rendered
//this is where we also define routes to various parts of the application
const App = ({ setTheme, updateCurrentUser, currentTheme, currentUser }) => {
	const location = useLocation();
	const history = useHistory();

	const dispatch = useDispatch();

	useEffect(() => {
		setCurrentTheme(setTheme);

		//whenever the authentication state in our application changes
		const unsubscribeFromAuth = auth.onAuthStateChanged(
			async (userAuth) => {
				//this userAuth is either an object representing the user that is currently sign in
				//or null meaning that no one is signed in or a user has signed out
				if (userAuth) {
					const userRef = await createUserDocument(userAuth);

					userRef.onSnapshot((snapShot) => {
						updateCurrentUser({ ...snapShot.data() });
						dispatch(toggleNotification("signed in successfully"));
					});
				} else {
					updateCurrentUser(userAuth);
				}
			}
		);

		return () => {
			//whenever the application closes, we unsubscribe from the auth
			//library, preventing any memory leaks
			unsubscribeFromAuth();
		};
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
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
	}, [currentUser]);

	useEffect(() => {
		if (!currentUser) {
			return;
		}

		fetchUserNotifications(currentUser, dispatch);
		fetchUserChats(currentUser, dispatch);
		fetchChatRequests(currentUser, dispatch);
		//eslint-disable-next-line
	}, [currentUser]);

	useEffect(() => {
		if (
			location.pathname.includes("favorites") ||
			location.pathname.includes("chat") ||
			location.pathname.includes("find-friends") ||
			location.pathname.includes("notifications")
		) {
			if (!currentUser) {
				dispatch(
					toggleNotification("you need to sign in first", false)
				);
			}
		}

		if (
			location.pathname.includes("signin") ||
			location.pathname.includes("signup")
		) {
			if (currentUser) {
				history.push("/");
			}
		}
		//eslint-disable-next-line
	}, [location, currentUser]);

	return (
		<ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Notification />
			<Header />
			<Modal />
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
						<SignInPage />
					}
				</Route>
				<Route path="/signup">
					<SignUpPage />
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
				<Route path="/chats" exact>
					{currentUser ? (
						<ChatsContainerPage />
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
				<Route path="/notifications">
					{currentUser ? (
						<UserNotifications />
					) : (
						<Redirect to="/signin" />
					)}
				</Route>
				<Route path="/chat-requests">
					{currentUser ? <ChatRequests /> : <Redirect to="/signin" />}
				</Route>
			</Switch>
		</ThemeProvider>
	);
};

const mapStateToProps = (state) => {
	return {
		currentTheme: state.theme.currentTheme,
		currentUser: state.currentUser.currentUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateCurrentUser: (user) => {
			dispatch(updateCurrentUser(user));
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
