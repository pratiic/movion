import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
	StyledUserNotification,
	StyledMessage,
	StyledNotificationTime,
	IconContainer,
	NotificationMain,
} from "./user-notification.styles";
import { StyledDeleteIcon } from "../../styles/styles.icons";

import { setUserNotificationSeen as setUserNotificationSeenRedux } from "../../redux/user-notifications/user-notifications.actions";
import {
	showErrorNotification,
	toggleNotification,
} from "../../redux/notification/notification.actions";
import { setChatUser } from "../../redux/chat-user/chat-user.actions";

import { getNotificationMessage } from "./user-notification.utils";
import {
	setUserNotificationSeen,
	deleteUserNotification,
} from "../../firebase/firebase.user-notifications.utils";
import { getHowLongAgo } from "../../utils/utils.date-time";

import ProfilePicture from "../profile-picture/profile-picture";

const UserNotification = ({
	sourceUser,
	type,
	action,
	notificationID,
	seen,
	contentType,
	contentID,
	createdAt,
	currentUser,
}) => {
	const [deleting, setDeleting] = useState(false);

	const dispatch = useDispatch();

	const history = useHistory();

	useEffect(() => {
		if (!seen) {
			dispatch(setUserNotificationSeenRedux(notificationID));
			setUserNotificationSeen(notificationID, currentUser.id);
		}
		//eslint-disable-next-line
	}, []);

	const handleDeleteIconClick = async () => {
		setDeleting(true);

		const result = await deleteUserNotification(
			notificationID,
			currentUser.id
		);

		if (result.error) {
			setDeleting(false);
			return dispatch(showErrorNotification());
		}

		dispatch(toggleNotification("notification deleted"));
	};

	const handleMessageClick = () => {
		if (contentID) {
			history.push(`/details/${contentType}/${contentID}`);
		}

		if (type === "chat-request") {
			dispatch(setChatUser(sourceUser));
			history.push(`/chat/${sourceUser.userID}`);
		}
	};

	return (
		<StyledUserNotification seen={seen}>
			<ProfilePicture
				username={sourceUser.username}
				photoURL={sourceUser.photoURL}
			/>
			<NotificationMain>
				<StyledMessage onClick={handleMessageClick}>
					{deleting ? (
						"deleting notification..."
					) : (
						<React.Fragment>
							{getNotificationMessage(
								type,
								action,
								sourceUser.username
							)}
						</React.Fragment>
					)}
				</StyledMessage>
				<StyledNotificationTime>
					{getHowLongAgo(createdAt)}
				</StyledNotificationTime>
			</NotificationMain>
			<IconContainer>
				<StyledDeleteIcon
					$smaller
					$showBackground
					onClick={handleDeleteIconClick}
				/>
			</IconContainer>
		</StyledUserNotification>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(UserNotification);
