import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
	StyledUserNotifications,
	Header,
	ClearNotifications,
	HeaderTitle,
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
			<StyledTitle marginbt="0.5rem">your notifications</StyledTitle>

			{userNotifications.length > 0 ? (
				<React.Fragment>
					<ClearNotifications>
						clear all notficiations
					</ClearNotifications>

					{userNotifications.map((userNotification) => (
						<UserNotification
							{...userNotification}
							key={userNotification.notificationID}
						/>
					))}
				</React.Fragment>
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
