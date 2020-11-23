import React from "react";

import {
	StyledNotification,
	// StyledTickIcon,
	// StyledDeleteIcon,
} from "./notification.styles";

import { StyledTickIcon, StyledDeleteIcon } from "../../styles/styles.icons";

const Notification = ({ message, type }) => {
	return message ? (
		<StyledNotification type={type}>
			{" "}
			{type === "success" ? (
				<StyledTickIcon $notificationIcon />
			) : (
				<StyledDeleteIcon $notificationIcon $smaller />
			)}
			{message}
		</StyledNotification>
	) : null;
};

export default Notification;
