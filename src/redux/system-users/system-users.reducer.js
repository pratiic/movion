const INITIAL_STATE = {
	users: [],
};

export const systemUsersReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_SYSTEM_USERS":
			return { ...state, users: action.payload };
		default:
			return state;
	}
};
