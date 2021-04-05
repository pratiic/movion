import React, { useState } from "react";
import { connect } from "react-redux";

import { StyledUsersContainer } from "./users-container.styles";
import { StyledMessage } from "../../styles/styles.generic";

import User from "../user/user";

const UsersContainer = ({ users, currentUser }) => {
	return (
		<StyledUsersContainer>
			{users.length > 0 ? (
				users
					.filter((user) => {
						return user.id !== currentUser.id;
					})
					.map((user) => {
						const data = user.data();
						return <User {...data} key={data.id} />;
					})
			) : (
				<StyledMessage marginTop="2.5rem">
					no users to show here
				</StyledMessage>
			)}
		</StyledUsersContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(UsersContainer);
