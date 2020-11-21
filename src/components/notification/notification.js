import React from "react";

import { StyledNotification, StyledTickIcon } from "./notification.styles";

const Notification = ({ message }) => {
	return message ? (
		<StyledNotification>
			{" "}
			<StyledTickIcon /> {message}
		</StyledNotification>
	) : null;
};

export default Notification;
