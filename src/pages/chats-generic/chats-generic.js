import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import { StyledChatsGeneric, ClearSearch } from "./chats-generic.styles";

import { StyledMessage } from "../../styles/styles.generic";
import { StyledTitle } from "../../styles/styles.title";

import UsersContainer from "../../components/users-container/users-container";
import UserSearch from "../../components/user-search/user-search";
import ChatsToggler from "../../components/chats-toggler/chats-toggler";
import { searchUser } from "../../firebase/firebase.utils.users";

const ChatsGeneric = ({ displayList, title, message, currentUser }) => {
	const [searching, setSearching] = useState(false);
	const [searchActive, setSearchActive] = useState(false);
	const [searchMessage, setSearchMessage] = useState("");
	//setting searchResults to [""] as the searchResult's length has to be > 0 for list to render
	const [searchResults, setSearchResults] = useState([""]);

	const searchingMessages = {
		chat: "searching chat...",
		user: "searching user...",
		chatRequest: "searching chat request...",
	};

	const notFoundMessages = {
		chat: "no chat found",
		user: "no user found",
		chatRequest: "no chat request found",
	};

	const location = useLocation();

	const renderChatsToggler = () => {
		if (location.pathname.includes("find-friends")) {
			return;
		}

		return <ChatsToggler />;
	};

	const renderMessage = () => {
		if (location.pathname.includes("find-friends")) {
			return (
				<StyledMessage size="smaller">
					go back to chats <Link to="/chats">here</Link>
				</StyledMessage>
			);
		}

		return (
			<StyledMessage size="smaller">
				you can find friends <Link to="/find-friends">here</Link>
			</StyledMessage>
		);
	};

	const handleSearch = async (searchValue) => {
		const searchType = location.pathname.includes("chats")
			? "chat"
			: location.pathname.includes("find-friends")
			? "user"
			: "chatRequest";

		setSearching(true);
		setSearchActive(true);
		setSearchMessage(searchingMessages[searchType]);

		setSearchResults([]);

		const result = await searchUser(
			searchValue,
			searchType,
			currentUser.id
		);

		setSearching(false);

		if (result.users?.length > 0) {
			const users = result.users.map((doc) =>
				searchType === "chat"
					? doc.data().user
					: { ...doc.data(), userID: doc.data().id }
			);
			setSearchResults(users);
			return;
		}

		setSearchMessage(notFoundMessages[searchType]);
	};

	const handleClearSearchClick = () => {
		setSearchResults([""]);
		setSearchActive(false);
	};

	return (
		<StyledChatsGeneric>
			<StyledTitle
				size="smaller"
				transform="uppercase"
				fontWeight="400"
				marginbt="0.5rem"
			>
				{title}
			</StyledTitle>

			{renderMessage()}

			{renderChatsToggler()}

			{(displayList.length > 0 || searchActive) && (
				<UserSearch submitHandler={handleSearch} />
			)}

			{searchActive && (
				<ClearSearch onClick={handleClearSearchClick}>
					clear search
				</ClearSearch>
			)}

			{displayList.length > 0 &&
			!searching &&
			searchResults.length > 0 ? (
				<UsersContainer
					list={searchActive ? searchResults : displayList}
					type={
						location.pathname.includes("chat-requests")
							? "request"
							: "user"
					}
				/>
			) : (
				<StyledMessage marginTop="2.5rem">
					{searchActive ? searchMessage : message}
				</StyledMessage>
			)}
		</StyledChatsGeneric>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(ChatsGeneric);
