import { currentUserActionTypes } from "./current-user.types";

const INITIAL_STATE = {
	currentUser: null,
};

export const currentUserReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case currentUserActionTypes.UPDATE_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};
