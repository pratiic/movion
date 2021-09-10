import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import { Divider } from "./find-friends.styles";

import { setSystemUsers } from "../../redux/system-users/system-users.actions";

import { firestore } from "../../firebase/firebase.utils";

import ChatsGeneric from "../chats-generic/chats-generic";
import GenericButton from "../../components/generic-button/generic-button";

const FindFriendsPage = ({ systemUsers }) => {
	const [usersMessage, setUsersMessage] = useState("loading users...");
	const [usersFetchNumber, setUsersFetchNumber] = useState(15);
	const [totalUsers, setTotalUsers] = useState(0);
	const [fetchingMoreUsers, setFetchingMoreUsers] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		document.title = "Find friends";
	});

	useEffect(() => {
		fetchUsers();
		//eslint-disable-next-line
	}, [usersFetchNumber]);

	const fetchUsers = async () => {
		setUsersMessage("loading users...");
		setFetchingMoreUsers(true);

		const collectionRef = firestore.collection("users");

		collectionRef.limit(usersFetchNumber).onSnapshot(async (snapshot) => {
			setFetchingMoreUsers(false);

			const data = await collectionRef.get();
			setTotalUsers(data.docs.length);

			dispatch(
				setSystemUsers(
					snapshot.docs.map((doc) => {
						const data = doc.data();
						return { ...data, userID: data.id };
					})
				)
			);
		});
	};

	const fetchMoreUsers = () => {
		setUsersFetchNumber(usersFetchNumber + 15);
	};

	return (
		<div>
			<ChatsGeneric
				displayList={systemUsers}
				title="find your friends here"
				message={usersMessage}
			/>

			<Divider></Divider>

			{systemUsers.length < totalUsers && (
				<GenericButton
					displayType="load-more"
					handleButtonClick={fetchMoreUsers}
				>
					{fetchingMoreUsers ? "loading..." : "load more"}
				</GenericButton>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		systemUsers: state.systemUsers.users,
	};
};

export default connect(mapStateToProps)(FindFriendsPage);
