import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { StyledFindFriends } from "./find-friends.styles";
import { StyledMessage } from "../../styles/styles.generic";
import { StyledTitle } from "../../styles/styles.title";

import { firestore } from "../../firebase/firebase.utils";

import UsersContainer from "../../components/users-container/users-container";
import UserSearch from "../../components/user-search/user-search";
import ChatsGeneric from "../chats-generic/chats-generic";

const FindFriendsPage = ({ currentUser }) => {
	const [users, setUsers] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [usersMessage, setUsersMessage] = useState("loading users...");

	useEffect(() => {
		document.title = "Find friends";
	});

	// useEffect(() => {
	// 	firestore
	// 		.collection("users")
	// 		.limit(5)
	// 		.onSnapshot((snapshot) => {
	// 			setUsers(
	// 				snapshot.docs.filter((doc) => {
	// 					return doc.data().id !== currentUser.id;
	// 				})
	// 			);
	// 		});
	// }, []);

	useEffect(() => {
		setUsersMessage("loading users...");

		firestore
			.collection("users")
			.get()
			.then((usersCollectionRef) => {
				// const usersToRender = usersCollectionRef.docs.filter((doc) => {
				// 	const data = doc.data();
				// 	return (
				// 		data.username.toLowerCase().includes(searchValue) ||
				// 		data.email.toLowerCase().includes(searchValue)
				// 	);
				// });

				// setUsers(usersToRender);
				setUsers(
					usersCollectionRef.docs.map((doc) => {
						const data = doc.data();
						return { ...data, userID: data.id };
					})
				);

				// if (usersToRender.length <= 0) {
				// 	setUsersMessage("no user found");
				// }
			});
	}, [searchValue]);

	const handleInputChange = (searchValue) => {
		setSearchValue(searchValue);
	};

	return (
		<ChatsGeneric
			displayList={users}
			title="find your friends here"
			message={usersMessage}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(FindFriendsPage);
