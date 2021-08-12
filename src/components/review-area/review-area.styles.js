import styled from "styled-components";

import { cssColors, cssFonts } from "../../styles/styles.variables";
import { SendButtonStyles } from "../../styles/styles.buttons";

export const TextAreaContainer = styled.div`
	margin: 0 auto 1.7rem auto;
	position: relative;

	button {
		${SendButtonStyles}
	}
`;
