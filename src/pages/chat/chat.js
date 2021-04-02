import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { StyledChat, ChatsMessage } from "./chat.styles";
import { StyledTitle, StyledMessage } from "../../styles/styles.generic";

import { firestore } from "../../firebase/firebase.utils";

import UsersContainer from "../../components/users-container/users-container";
import UserSearch from "../../components/user-search/user-search";

const ChatPage = ({ currentUser }) => {
	const [chats, setChats] = useState([]);
	const [chatsMessage, setChatsMessage] = useState("loading chats...");
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		const currentUserChatsCollectionRef = firestore
			.collection("users")
			.doc(currentUser.id)
			.collection("chats");

		currentUserChatsCollectionRef.onSnapshot((snapshot) => {
			setChats(snapshot.docs);

			if (snapshot.docs.length === 0) {
				setChatsMessage("you dont have any chats");
			}
		});
	});

	const handleInputChange = (searchValue) => {
		setSearchValue(searchValue);
	};

	return (
		<StyledChat>
			<StyledTitle size="smaller" transform="uppercase" fontWeight="400">
				your chats
			</StyledTitle>
			{chats.length > 0 ? (
				<React.Fragment>
					<UserSearch
						searchValue={searchValue}
						inputChangeHandler={handleInputChange}
					/>
					<UsersContainer />
				</React.Fragment>
			) : (
				<StyledMessage>
					{chatsMessage}
					{chatsMessage === "you dont have any chats" ? (
						<Link to="/find-friends"> find friends here</Link>
					) : null}
				</StyledMessage>
			)}
		</StyledChat>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(ChatPage);
