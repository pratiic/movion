import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import {
	StyledUserNotifications,
	ClearNotifications,
} from "./user-notifications.styles";
import { StyledTitle } from "../../styles/styles.title";
import { StyledMessage } from "../../styles/styles.generic";

import {
	resetModal,
	setHasOptions,
	setModal,
} from "../../redux/modal/modal.actions";
import { setUserNotifications } from "../../redux/user-notifications/user-notifications.actions";

import UserNotification from "../../components/user-notification/user-notification";
import { deleteAllNotifications } from "../../firebase/firebase.user-notifications.utils";
import { toggleNotification } from "../../redux/notification/notification.actions";

const UserNotifications = ({
	currentUser,
	userNotifications,
	userNotificationsMessage,
}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		document.title = "Notifications";
	}, []);

	const handleClearAllClick = () => {
		dispatch(
			setModal(
				"are you sure you want to clear all your notifications ?",
				handleNotificationClearance
			)
		);
	};

	const handleNotificationClearance = async () => {
		dispatch(setHasOptions(false));

		const result = await deleteAllNotifications(currentUser.id);

		dispatch(resetModal());

		if (result.error) {
			return dispatch(
				toggleNotification("something went wrong, try again", false)
			);
		}

		dispatch(setUserNotifications([]));
	};

	return (
		<StyledUserNotifications>
			<StyledTitle marginbt="0.5rem">your notifications</StyledTitle>

			{userNotifications.length > 0 ? (
				<React.Fragment>
					<ClearNotifications onClick={handleClearAllClick}>
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
