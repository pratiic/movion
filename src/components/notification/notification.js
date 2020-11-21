import React from "react";

import {
	StyledNotification,
	StyledTickIcon,
	StyledDeleteIcon,
} from "./notification.styles";

const Notification = ({ message, type }) => {
	return message ? (
		<StyledNotification type={type}>
			{" "}
			{type === "success" ? <StyledTickIcon /> : <StyledDeleteIcon />}
			{message}
		</StyledNotification>
	) : null;
};

export default Notification;
