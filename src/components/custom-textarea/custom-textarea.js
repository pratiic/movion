import React from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
	StyledCustomTextarea,
	TextArea,
	ReplyButton,
} from "./custom-textarea.styles";

import { toggleNotification } from "../../redux/notification/notification.actions";

const CustomTextarea = ({
	placeholder,
	value,
	size,
	reference,
	showSubmitButton,
	submitButtonValue,
	changeHandler,
	submitHandler,
	currentUser,
}) => {
	const history = useHistory();

	const dispatch = useDispatch();

	const handleInputFocus = () => {
		if (!currentUser) {
			history.push("/signin");
			dispatch(toggleNotification("you need to sign in first", false));
		}
	};

	return (
		<StyledCustomTextarea onSubmit={submitHandler}>
			<TextArea
				placeholder={placeholder}
				value={value}
				size={size}
				ref={reference}
				onChange={changeHandler}
				onFocus={handleInputFocus}
			/>
			{showSubmitButton && <ReplyButton>{submitButtonValue}</ReplyButton>}
		</StyledCustomTextarea>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(CustomTextarea);
