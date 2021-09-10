import React from "react";
import { connect } from "react-redux";

import { StyledNotification } from "./notification.styles";
import { StyledTickIcon, StyledDeleteIcon } from "../../styles/styles.icons";

const Notification = ({ notificationMessage, success }) => {
	if (!notificationMessage) {
		return null;
	}

	console.log(success);

	return (
		<StyledNotification success={success}>
			{success ? (
				<StyledTickIcon $notificationIcon />
			) : (
				<StyledDeleteIcon $notificationIcon $smaller />
			)}
			{notificationMessage}
		</StyledNotification>
	);
};

const mapStateToProps = (state) => {
	return {
		notificationMessage: state.notification.notificationMessage,
		success: state.notification.success,
	};
};

export default connect(mapStateToProps)(Notification);
