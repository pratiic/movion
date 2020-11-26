import React from "react";

import { StyledNotification } from "./notification.styles";
import { StyledTickIcon, StyledDeleteIcon } from "../../styles/styles.icons";

//this component is for showing notifications for different activities
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
