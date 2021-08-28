import React from "react";

import {
	SendRequest,
	StyledChatStatus,
	HandleRequest,
	Buttons,
} from "./chat-status.styles";
import { StyledMessage } from "../../styles/styles.generic";
import {
	StyledStaticIndicatorIcon,
	StyledTickIcon,
} from "../../styles/styles.icons";

import GenericButton from "../generic-button/generic-button";

const ChatStatus = ({
	requested,
	beenRequested,
	requesting,
	requestClickHandler,
	acceptHandler,
	rejectHandler,
	accepting,
	rejecting,
}) => {
	return (
		<StyledChatStatus>
			{requested ? (
				<StyledMessage requestSent={true}>
					<StyledTickIcon $noColor /> Chat request sent
				</StyledMessage>
			) : beenRequested ? (
				<HandleRequest>
					<StyledMessage>
						this user has sent you a chat request
					</StyledMessage>
					<Buttons>
						<GenericButton
							btnType="outlined"
							handleButtonClick={acceptHandler}
						>
							{accepting ? (
								<StyledStaticIndicatorIcon />
							) : (
								"accept"
							)}
						</GenericButton>
						<GenericButton handleButtonClick={rejectHandler}>
							{rejecting ? (
								<StyledStaticIndicatorIcon />
							) : (
								"reject"
							)}
						</GenericButton>
					</Buttons>
				</HandleRequest>
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
