import styled from "styled-components";

import { FormPageStyles, FormStyles } from "../../styles/styles.generic";

export const StyledSignInPage = styled.div`
	${FormPageStyles};

	form {
		${FormStyles};
	}

	i {
		display: block;
		margin-right: 0.75rem;
		font-size: 1.75rem;
	}
`;

export const ButtonCollection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 450px) {
		flex-direction: column;
	}
`;
