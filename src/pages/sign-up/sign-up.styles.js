import styled from "styled-components";

import { FormPageStyles, FormStyles } from "../../styles/styles.form";

export const StyledSignUpPage = styled.div`
	${FormPageStyles};

	form {
		${FormStyles};

		button {
			width: 100%;
		}
	}
`;
