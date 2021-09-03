import { combineReducers } from "redux";

import { sidebarReducer } from "./sidebar/sidebar.reducer";
import { searchbarReducer } from "./searchbar/searchbar.reducer";
import { themeReducer } from "./theme/theme.reducer";
import { moviesReducer } from "./movies/movies.reducer";
import { tvShowsReducer } from "./tv-shows/tv-shows.reducer";
import { searchReducer } from "./search/search.reducer";
import { detailsReducer } from "./details/details.reducer";
import { currentUserReducer } from "./current-user/current-user.reducer";
import { notificationReducer } from "./notification/notification.reducer";
import { favoritesReducer } from "./favorites/favorites.reducer";
import { reviewsReducer } from "./reviews/reviews.reducer";
import { chatUserReducer } from "./chat-user/chat-user.reducer";
import { userNotificationsReducer } from "./user-notifications/user-notifications.reducer";
import { chatsReducer } from "./chats/chats.reducer";
import { modalReducer } from "./modal/modal.reducer";
import { systemUsersReducer } from "./system-users/system-users.reducer";

export default combineReducers({
	sidebar: sidebarReducer,
	searchbar: searchbarReducer,
	theme: themeReducer,
	movies: moviesReducer,
	tvShows: tvShowsReducer,
	search: searchReducer,
	details: detailsReducer,
	currentUser: currentUserReducer,
	notification: notificationReducer,
	favorites: favoritesReducer,
	reviews: reviewsReducer,
	chatUser: chatUserReducer,
	userNotifications: userNotificationsReducer,
	chats: chatsReducer,
	modal: modalReducer,
	systemUsers: systemUsersReducer,
});
