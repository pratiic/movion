import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { setSystemUsers } from "../../redux/system-users/system-users.actions";

import { firestore } from "../../firebase/firebase.utils";

import ChatsGeneric from "../chats-generic/chats-generic";

const FindFriendsPage = ({ currentUser, systemUsers }) => {
	const [usersMessage, setUsersMessage] = useState("loading users...");

	const dispatch = useDispatch();

	useEffect(() => {
		document.title = "Find friends";
	});

	useEffect(() => {
		setUsersMessage("loading users...");

		firestore.collection("users").onSnapshot((snapshot) => {
			dispatch(
				setSystemUsers(
					snapshot.docs.map((doc) => {
						const data = doc.data();
						return { ...data, userID: data.id };
					})
				)
			);
		});
	}, []);

	return (
		<ChatsGeneric
			displayList={systemUsers}
			title="find your friends here"
			message={usersMessage}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
		systemUsers: state.systemUsers.users,
	};
};

export default connect(mapStateToProps)(FindFriendsPage);
