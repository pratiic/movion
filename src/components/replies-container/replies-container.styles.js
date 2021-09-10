import styled from "styled-components";

import { StyledCommentsList } from "../comments-list/comments-list.styles";
import { StyledComment } from "../comment/comment.styles";

export const StyledRepliesContainer = styled.div`
	border: 1px solid ${({ theme }) => theme.bgFocused};
	border-radius: 5px;
	margin-bottom: 1.5rem;
	padding: 1rem 1rem 0 1rem;

	${StyledCommentsList} {
		padding: 1.5rem 0 1.5rem 0;

		${StyledComment} {
			margin-bottom: 1rem;
		}
	}
`;
