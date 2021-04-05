import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { StyledFindFriends, FindFriendsMain } from "./find-friends.styles";
import { StyledTitle, StyledMessage } from "../../styles/styles.generic";

import { firestore } from "../../firebase/firebase.utils";

import UsersContainer from "../../components/users-container/users-container";
import UserSearch from "../../components/user-search/user-search";

const FindFriendsPage = ({ currentUser }) => {
	const [users, setUsers] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [usersMessage, setUsersMessage] = useState("loading users...");

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
		firestore
			.collection("users")
			.get()
			.then((usersCollectionRef) => {
				const usersToRender = usersCollectionRef.docs.filter((doc) => {
					const data = doc.data();
					return (
						data.username.toLowerCase().includes(searchValue) ||
						data.email.toLowerCase().includes(searchValue)
					);
				});

				setUsers(usersToRender);

				if (usersToRender.length <= 0) {
					setUsersMessage("no user found");
				}
			});
	}, [searchValue]);

	const handleInputChange = (searchValue) => {
		setSearchValue(searchValue);
	};

	return (
		<StyledFindFriends>
			<FindFriendsMain>
				<StyledTitle
					size="smaller"
					marginbt="2.5rem"
					transform="uppercase"
					fontWeight="400"
				>
					find your friends here
				</StyledTitle>
				<UserSearch
					searchValue={searchValue}
					inputChangeHandler={handleInputChange}
				/>
				{users.length > 0 ? (
					<React.Fragment>
						<UsersContainer users={users} />
					</React.Fragment>
				) : (
					<StyledMessage>{usersMessage}</StyledMessage>
				)}
			</FindFriendsMain>
		</StyledFindFriends>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(FindFriendsPage);
