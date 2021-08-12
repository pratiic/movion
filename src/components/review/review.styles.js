import styled, { css } from "styled-components";

import { StyledComment } from "../comment/comment.styles";

export const StyledReview = styled.div`
	${({ showReplies }) =>
		showReplies &&
		css`
			${StyledComment} {
				margin-bottom: 0.5rem;
			}
		`}
`;
