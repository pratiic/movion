import styled, { css } from "styled-components";

import { ReactComponent as Logo } from "../../assets/logos/logo.svg";

export const StyledLogo = styled(Logo)`
	width: 13rem;
	height: 4rem;
	cursor: pointer;

	${({ size }) =>
		size === "smaller" &&
		css`
			height: 4rem;
			width: 11rem;
		`}

	@media screen and (max-width: 850px) {
		width: 13rem;
	}
`;
