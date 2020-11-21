import styled, { css } from "styled-components";

import { ReactComponent as TickIcon } from "../../assets/icons/tick.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";

import { cssColors, cssFonts } from "../../styles/styles.variables";

export const NotificationIconStyles = css`
	path {
		fill: white;
	}

	height: 2.1rem;
	width: 2.1rem;
	margin-right: 1rem;
`;

export const StyledNotification = styled.div`
	font-size: 1.7rem;
	text-transform: capitalize;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	top: 8rem;
	z-index: 10;
	padding: 0.5rem 0.9rem;
	border-radius: 5px;
	box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${cssFonts.fontStackSecondary};
	white-space: nowrap;

	background-color: ${({ type }) =>
		type === "success" ? cssColors.greyDark : cssColors.googleRed};
`;

export const StyledTickIcon = styled(TickIcon)`
	${NotificationIconStyles};
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
	${NotificationIconStyles};
	height: 1.7rem;
	width: 1.7rem;
`;
