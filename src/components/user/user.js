import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { StyledUser, UserInfo, Username, UserEmail } from "./user.styles";

import { setChatUser } from "../../redux/chat-user/chat-user.actions";
import { firestore, addUserToChats } from "../../firebase/firebase.utils";

import ProfilePicture from "../profile-picture/profile-picture";

const User = ({
	id,
	username,
	email,
	photoURL,
	createdAt,
	currentUser,
	setChatUser,
}) => {
	const history = useHistory();

	const handleUserClick = async () => {
		setChatUser({ id, username, email, photoURL, createdAt });

		history.push(`/chat/${id}`);

		// addUserToChats(currentUser, {
		// 	id,
		// 	username,
		// 	email,
		// 	photoURL,
		// 	createdAt,
		// });
	};

	return (
		<StyledUser onClick={handleUserClick}>
			<ProfilePicture
				username={username}
				photoURL={photoURL}
				size="bigger"
			/>
			<UserInfo>
				<Username>{username}</Username>
				<UserEmail>{email}</UserEmail>
			</UserInfo>
		</StyledUser>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setChatUser: (chatUser) => {
			dispatch(setChatUser(chatUser));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
