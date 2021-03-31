import styled from "styled-components";

import { WrapperStyles } from "../../styles/styles.generic";

export const StyledCredits = styled.div`
	${WrapperStyles};

	& > *:nth-child(2n) {
		margin-bottom: 0;
	}

	& > *:nth-child(2n + 1) {
		margin-bottom: 1.5rem;
	}

	margin-bottom: 3rem;
`;
