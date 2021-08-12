import { currentUserActionTypes } from "./current-user.types";

import { auth } from "../../firebase/firebase.utils";

import { toggleNotification } from "../notification/notification.actions";
import { closeSidebar } from "../sidebar/sidebar.actions";
import { setUserNotifications } from "../user-notifications/user-notifications.actions";

export const updateCurrentUser = (user) => {
	return {
		type: currentUserActionTypes.UPDATE_CURRENT_USER,
		payload: user,
	};
};

export const currentUserSignout = () => {
	return (dispatch) => {
		auth.signOut();
		dispatch(toggleNotification("signed out successfully", "success"));
		dispatch(closeSidebar());
		dispatch(setUserNotifications([]));
	};
};
