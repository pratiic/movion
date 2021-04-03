import React from "react";
import { connect } from "react-redux";

import { StyledMessage, Text, Info } from "./message.styles";
import { StyledVerticalDotIcon } from "../../styles/styles.icons";

import { getCreatedTime } from "../utils/utils.components";

import ProfilePicture from "../profile-picture/profile-picture";

const Message = ({ text, createdBy, createdAt, currentUser }) => {
	return (
		<StyledMessage self={currentUser.id === createdBy.id ? true : false}>
			<ProfilePicture
				username={createdBy.username}
				photoURL={createdBy.photoURL}
				size="smaller"
			/>
			<Text>{text}</Text>
			<Info> {getCreatedTime(createdAt)} </Info>
			<StyledVerticalDotIcon $smaller />
		</StyledMessage>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(Message);
