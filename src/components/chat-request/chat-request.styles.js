import styled from "styled-components";

import { StyledUser } from "../user/user.styles";
import { StyledGenericButton } from "../generic-button/generic-button.styles";

export const StyledChatRequest = styled.div`
	${StyledUser} {
		border: none;
	}

	border: 1px solid ${({ theme }) => theme.bgFocused};
	border-radius: 5px;
`;

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	padding: 0.75rem 1.5rem;

	${StyledGenericButton} {
		svg {
			margin: 0;
		}
	}

	& > *:last-child {
		margin-left: 1.5rem;
	}
`;
