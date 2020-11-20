import { currentUserActionTypes } from "./current-user.types";

export const updateCurrentUser = (user) => {
	return {
		type: currentUserActionTypes.UPDATE_CURRENT_USER,
		payload: user,
	};
};
