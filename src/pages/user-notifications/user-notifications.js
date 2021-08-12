import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
	StyledUserNotifications,
	Header,
	ClearNotifications,
} from "./user-notifications.styles";
import { StyledTitle } from "../../styles/styles.title";
import { StyledMessage } from "../../styles/styles.generic";

import UserNotification from "../../components/user-notification/user-notification";

const UserNotifications = ({
	currentUser,
	userNotifications,
	userNotificationsMessage,
}) => {
	useEffect(() => {
		document.title = "Notifications";
	}, []);

	return (
		<StyledUserNotifications>
			<Header>
				<StyledTitle marginbt="0rem">your notifications</StyledTitle>
				<ClearNotifications>clear all notifications</ClearNotifications>
			</Header>

			{userNotifications.length > 0 ? (
				userNotifications.map((userNotification) => (
					<UserNotification
						{...userNotification}
						key={userNotification.notificationID}
					/>
				))
			) : (
				<StyledMessage>{userNotificationsMessage}</StyledMessage>
			)}
		</StyledUserNotifications>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		userNotifications: state.userNotifications.userNotifications,
		userNotificationsMessage:
			state.userNotifications.userNotificationsMessage,
	};
};

export default connect(mapStateToProps)(UserNotifications);
