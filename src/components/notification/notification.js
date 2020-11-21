import React from "react";

import { StyledNotification } from "./notification.styles";

const Notification = ({ message }) => {
	return message ? <StyledNotification>{message}</StyledNotification> : null;
};

export default Notification;
