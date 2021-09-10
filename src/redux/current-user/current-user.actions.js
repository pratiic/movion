import { currentUserActionTypes } from "./current-user.types";

import { auth } from "../../firebase/firebase.utils";

import { toggleNotification } from "../notification/notification.actions";
import { closeSidebar } from "../sidebar/sidebar.actions";
import { setUserNotifications } from "../user-notifications/user-notifications.actions";
import { setChatRequests, setChats } from "../chats/chats.actions";

export const updateCurrentUser = (user) => {
	return {
		type: currentUserActionTypes.UPDATE_CURRENT_USER,
		payload: user,
	};
};

export const currentUserSignout = () => {
	return (dispatch) => {
		auth.signOut();
		dispatch(updateCurrentUser(null));
		dispatch(closeSidebar());
		dispatch(setUserNotifications([]));
		dispatch(setChats([]));
		dispatch(setChatRequests([]));
		dispatch(toggleNotification("signed out successfully", "success"));
		window.location.reload();
	};
};
