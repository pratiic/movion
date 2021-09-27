import styled from "styled-components";

export const StyledUserNotification = styled.div`
	border: 1px solid ${({ theme }) => theme.bgFocused};
	border-radius: 5px;
	padding: 0 1rem;
	margin-bottom: 1rem;
	height: 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

	& > *:first-child {
		min-width: 2.75rem;
	}

	& > *:last-child {
		min-width: 2.5rem;
	}
`;

export const NotificationMain = styled.div`
	display: flex;
	align-items: center;
	flex: 1 1 auto;
	overflow: hidden;
	height: 100%;
`;

export const StyledMessage = styled.p`
	color: ${({ theme }) => theme.textIconBlur};
	padding: 0 1rem;
	margin: 0 0.75rem;
	height: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 4rem;
	width: 85%;
	cursor: pointer;

	&::first-letter {
		text-transform: uppercase;
	}

	&:hover {
		background-color: ${({ theme }) => theme.bgFocused};
		color: ${({ theme }) => theme.textFocused};
	}

	&:active {
		background-color: ${({ theme }) => theme.bgFocusedDark};
	}
`;

export const StyledNotificationTime = styled.span`
	color: ${({ theme }) => theme.textMuted};
	font-size: 1.55rem;
	min-width: 3rem;
	white-space: nowrap;
	text-align: right;
`;

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
`;
