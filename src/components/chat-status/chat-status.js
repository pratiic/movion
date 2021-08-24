import React from "react";

import { SendRequest, StyledChatStatus } from "./chat-status.styles";
import { StyledMessage } from "../../styles/styles.generic";
import { StyledStaticIndicatorIcon } from "../../styles/styles.icons";

import GenericButton from "../generic-button/generic-button";

const ChatStatus = ({ requested, requesting, requestClickHandler }) => {
	return (
		<StyledChatStatus>
			{requested ? (
				<StyledMessage>
					Chat request sent. You will get a notification when the user
					accepts or rejects the request
				</StyledMessage>
			) : (
				<SendRequest>
					<StyledMessage>send a chat request</StyledMessage>
					<GenericButton
						btnType="outlined"
						iconOnly={true}
						handleButtonClick={requestClickHandler}
					>
						{requesting ? (
							<StyledStaticIndicatorIcon />
						) : (
							"send request"
						)}
					</GenericButton>
				</SendRequest>
			)}
		</StyledChatStatus>
	);
};

export default ChatStatus;
