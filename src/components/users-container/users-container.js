import React, { useState } from "react";

import { StyledUsersContainer } from "./users-container.styles";

import User from "../user/user";

const UsersContainer = ({ users }) => {
	return (
		<StyledUsersContainer>
			{users.map((user) => {
				const data = user.data();
				return <User {...data} key={data.id} />;
			})}
		</StyledUsersContainer>
	);
};

export default UsersContainer;
