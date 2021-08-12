import styled from "styled-components";

export const StyledReply = styled.div`
	border: 1px solid ${({ theme }) => theme.bgFocused};
	border-radius: 5px;
	margin-bottom: 1rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	padding: 0.75rem;
`;

export const ReplyHeader = styled.div``;

export const ReplyText = styled.p`
	padding: 1rem 0.5rem;
`;
