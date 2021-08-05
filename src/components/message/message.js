import React from "react";
import { connect } from "react-redux";

import { StyledMessage, Text, Time, MessageInfo } from "./message.styles";
import {
	StyledHorizontalDotMenuIcon,
	StyledTickIcon,
	StyledDoubleTickIcon,
} from "../../styles/styles.icons";

import { getCreatedTime } from "../../utils/utils.components";

import ProfilePicture from "../profile-picture/profile-picture";

const Message = ({ text, createdBy, createdAt, currentUser, mid, seen }) => {
	const self = currentUser.id === createdBy.id ? true : false;
	return (
		<StyledMessage self={self}>
			<ProfilePicture
				username={createdBy.username}
				photoURL={createdBy.photoURL}
				size="smaller"
			/>
			<Text>
				{text}
				<MessageInfo>
					<Time> {getCreatedTime(createdAt)} </Time>
					{self ? (
						seen ? (
							<StyledDoubleTickIcon $smaller />
						) : (
							<StyledTickIcon $smaller />
						)
					) : null}
				</MessageInfo>
			</Text>
			<StyledHorizontalDotMenuIcon $smaller />
		</StyledMessage>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(Message);
