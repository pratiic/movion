import React, { useState } from "react";

import { StyledUsersContainer } from "./users-container.styles";
import { StyledMessage } from "../../styles/styles.generic";

import User from "../user/user";

const UsersContainer = ({ users }) => {
	return (
		<StyledUsersContainer>
			{users.length > 0 ? (
				users.map((user) => {
					const data = user.data();
					return <User {...data} key={data.id} />;
				})
			) : (
				<StyledMessage>no user</StyledMessage>
			)}
		</StyledUsersContainer>
	);
};

export default UsersContainer;
