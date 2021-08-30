export const setShowModal = (show = true) => {
	return {
		type: "SET_SHOW_MODAL",
		payload: show,
	};
};

export const setHasOptions = (hasOptions = true) => {
	return {
		type: "SET_HAS_OPTIONS",
		payload: hasOptions,
	};
};

export const setModalTitle = (modalTitle) => {
	return {
		type: "SET_MODAL_TITLE",
		payload: modalTitle,
	};
};

export const setModalMessage = (modalMessage) => {
	return {
		type: "SET_MODAL_MESSAGE",
		payload: modalMessage,
	};
};

export const setClickHandler = (clickHandler) => {
	return {
		type: "SET_CLICK_HANDLER",
		payload: clickHandler,
	};
};

export const resetModal = () => {
	return (dispatch) => {
		dispatch(setShowModal(false));
		dispatch(setHasOptions(true));
		dispatch(setModalTitle(""));
		dispatch(setClickHandler(null));
	};
};
