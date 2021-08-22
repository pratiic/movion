import React from "react";
import { Link, useLocation } from "react-router-dom";

import { StyledChatsGeneric } from "./chats-generic.styles";

import { StyledMessage } from "../../styles/styles.generic";
import { StyledTitle } from "../../styles/styles.title";

import UsersContainer from "../../components/users-container/users-container";
import UserSearch from "../../components/user-search/user-search";
import ChatsToggler from "../../components/chats-toggler/chats-toggler";

const ChatsGeneric = ({ displayList, title, message }) => {
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

			{displayList.length > 0 && (
				<UserSearch
				// searchValue={searchValue}
				// inputChangeHandler={handleInputChange}
				/>
			)}

			{displayList.length > 0 ? (
				<UsersContainer
					list={displayList}
					type={
						location.pathname.includes("chat-requests")
							? "request"
							: "user"
					}
				/>
			) : (
				<StyledMessage marginTop="2.5rem">{message}</StyledMessage>
			)}
		</StyledChatsGeneric>
	);
};

export default ChatsGeneric;
