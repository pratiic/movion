const INITIAL_STATE = {
	showModal: false,
	hasOptions: true,
	modalTitle: "",
	modalMessage: "loading please wait...",
	clickHandler: null,
};

export const modalReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_SHOW_MODAL":
			return { ...state, showModal: action.payload };
		case "SET_HAS_OPTIONS":
			return { ...state, hasOptions: action.payload };
		case "SET_MODAL_TITLE":
			return { ...state, modalTitle: action.payload };
		case "SET_MODAL_MESSAGE":
			return { ...state, modalMessage: action.payload };
		case "SET_CLICK_HANDLER":
			return { ...state, clickHandler: action.payload };
		default:
			return state;
	}
};
