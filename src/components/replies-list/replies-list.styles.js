import styled from "styled-components";

import { StyledComment } from "../comment/comment.styles";

export const StyledRepliesList = styled.div`
	padding: 1.5rem 0 1.5rem 0;

	${StyledComment} {
		margin-bottom: 1rem;
	}
`;
