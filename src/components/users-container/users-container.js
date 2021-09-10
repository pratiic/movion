import React from "react";
import { connect } from "react-redux";

import { StyledUsersContainer } from "./users-container.styles";

import User from "../user/user";
import ChatRequest from "../chat-request/chat-request";

const UsersContainer = ({ list, currentUser, type = "user" }) => {
	const renderList = () => {
		if (type === "user") {
			return list
				.filter((user) => {
					return user.userID !== currentUser.id;
				})
				.map((user) => {
					return <User {...user} key={user.userID} />;
				});
		}

		return list.map((request) => {
			return <ChatRequest {...request} key={request.requestID} />;
		});
	};

	return <StyledUsersContainer>{renderList()}</StyledUsersContainer>;
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(UsersContainer);
