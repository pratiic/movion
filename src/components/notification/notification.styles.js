import styled, { css } from "styled-components";

import { ReactComponent as TickIcon } from "../../assets/icons/tick.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";

import { cssColors, cssFonts } from "../../styles/styles.variables";

export const StyledNotification = styled.div`
	font-size: 1.7rem;
	text-transform: capitalize;
	position: fixed;
	left: 50%;
	top: 5rem;
	transform: translateX(-50%);
	font-weight: 300;
	z-index: 10;
	color: white;
	padding: 0.5rem 0.9rem;
	border-radius: 5px;
	box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: ${cssFonts.fontStackTertiary};
	white-space: nowrap;
	letter-spacing: 1px;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.5);

	background-color: ${({ success }) =>
		success ? cssColors.greyLight : cssColors.googleRed};
`;

export const NotificationIconStyles = css`
	path {
		fill: white;
	}

	height: 2.1rem;
	width: 2.1rem;
	margin-right: 1rem;
`;

export const StyledTickIcon = styled(TickIcon)`
	${NotificationIconStyles};
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
	${NotificationIconStyles};
	height: 1.7rem;
	width: 1.7rem;
`;
