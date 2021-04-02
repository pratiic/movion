import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { StyledFindFriends } from "./find-friends.styles";
import { StyledTitle, StyledMessage } from "../../styles/styles.generic";

import { firestore } from "../../firebase/firebase.utils";

import UsersContainer from "../../components/users-container/users-container";
import UserSearch from "../../components/user-search/user-search";

const FindFriendsPage = ({ currentUser }) => {
	const [users, setUsers] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [usersMessage, setUsersMessage] = useState("loading users...");

	useEffect(() => {
		firestore.collection("users").onSnapshot((snapshot) => {
			setUsers(
				snapshot.docs.filter((doc) => {
					return doc.data().id !== currentUser.id;
				})
			);
		});
	}, []);

	const handleInputChange = (searchValue) => {
		setSearchValue(searchValue);
	};

	return (
		<StyledFindFriends>
			<StyledTitle
				size="smaller"
				marginbt="2.5rem"
				transform="uppercase"
				fontWeight="400"
			>
				find your friends here
			</StyledTitle>
			{users.length > 0 ? (
				<React.Fragment>
					<UserSearch
						searchValue={searchValue}
						inputChangeHandler={handleInputChange}
					/>
					<UsersContainer users={users} />
				</React.Fragment>
			) : (
				<StyledMessage>{usersMessage}</StyledMessage>
			)}
		</StyledFindFriends>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(FindFriendsPage);
