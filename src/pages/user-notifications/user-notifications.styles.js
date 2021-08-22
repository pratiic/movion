import styled from "styled-components";

import { PageStyles } from "../../styles/styles.page";
import { WrapperSmallStyles } from "../../styles/styles.wrapper";
import { cssColors } from "../../styles/styles.variables";

export const StyledUserNotifications = styled.div`
	${WrapperSmallStyles};
	${PageStyles};
`;

export const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
`;

export const HeaderTitle = styled.p`
	font-size: 3rem;
	color: ${({ theme }) => theme.textIconBlur};
	text-transform: capitalize;
	margin-right: 1.5rem;
`;

export const ClearNotifications = styled.p`
	color: ${cssColors.googleRed};
	font-size: 1.75rem;
	cursor: pointer;
	padding-bottom: 0.3rem;

	&::first-letter {
		text-transform: uppercase;
	}

	&:hover {
		border-bottom: 1px solid ${cssColors.googleRed};
	}

	&:active {
		color: ${({ theme }) => theme.textMuted};
		border-bottom: 1px solid ${({ theme }) => theme.textMuted};
	}
`;
