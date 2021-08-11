import styled from "styled-components";

import { HeaderElementStyles } from "../header/header.styles";
import { cssColors } from "../../styles/styles.variables";

export const StyledHeaderUtil = styled.div`
	${HeaderElementStyles}

	display: flex;
	align-items: center;
	position: relative;

	&:hover {
		svg {
			path {
				fill: ${cssColors.bluePrimary};
			}
		}
	}

	&:active {
		svg {
			path {
				fill: ${({ theme }) => theme.textIconBlur};
			}
		}
	}
`;

export const StyledText = styled.span`
	position: absolute;
	right: -1rem;
	top: -0.5rem;
	color: ${({ theme }) => theme.textIconBlur};
	background-color: ${({ theme }) => theme.bgFocused};
	border-radius: 5px;
	padding: 0 0.5rem;
	font-size: 1.4rem;
	margin-left: 0.3rem;
	font-weight: 500;
`;
