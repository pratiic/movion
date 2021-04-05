import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { StyledChat, ChatsMessage, ChatMain } from "./chat.styles";
import { StyledTitle, StyledMessage } from "../../styles/styles.generic";

import { firestore } from "../../firebase/firebase.utils";

import UsersContainer from "../../components/users-container/users-container";
import UserSearch from "../../components/user-search/user-search";

const ChatPage = ({ currentUser }) => {
	const [chats, setChats] = useState([]);
	const [chatsMessage, setChatsMessage] = useState("loading chats...");
	const [searchValue, setSearchValue] = useState("");
	const [chatsToRender, setChatsToRender] = useState([]);

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
	}, []);

	useEffect(() => {
		console.log(chats);

		setChatsToRender(
			chats.filter((chat) => {
				const data = chat.data();
				return (
					data.username.toLowerCase().includes(searchValue) ||
					data.email.toLowerCase().includes(searchValue)
				);
			})
		);
	}, [searchValue, chats]);

	const handleInputChange = (searchValue) => {
		setSearchValue(searchValue);
	};

	return (
		<StyledChat>
			<ChatMain>
				<StyledTitle
					size="smaller"
					transform="uppercase"
					fontWeight="400"
					marginbt={chats.length > 0 ? "0.5rem" : "2.5rem"}
				>
					your chats
				</StyledTitle>
				{chats.length > 0 ? (
					<StyledMessage size="smaller">
						{" "}
						you can find friends{" "}
						<Link to="/find-friends"> here</Link>{" "}
					</StyledMessage>
				) : null}
				<UserSearch
					searchValue={searchValue}
					inputChangeHandler={handleInputChange}
				/>
				{chats.length > 0 ? (
					<React.Fragment>
						<UsersContainer users={chatsToRender} />
					</React.Fragment>
				) : (
					<StyledMessage>
						{chatsMessage}
						{chatsMessage === "you dont have any chats" ? (
							<Link to="/find-friends"> find friends here</Link>
						) : null}
					</StyledMessage>
				)}
			</ChatMain>
		</StyledChat>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(ChatPage);
