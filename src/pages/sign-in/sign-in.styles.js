import styled from "styled-components";

import { FormPageStyles, FormStyles } from "../../styles/styles.form";

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

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > * {
		flex: 1 1 auto;
	}

	& > *:last-child {
		margin-left: 0.75rem;
	}

	@media screen and (max-width: 450px) {
		flex-direction: column;

		& > *:last-child {
			margin-left: 0;
		}
	}
`;
