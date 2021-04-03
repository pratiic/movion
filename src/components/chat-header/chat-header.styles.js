import styled from "styled-components";

export const StyledChatHeader = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.bgFocused};
	padding: 0.4rem 0.75rem;
`;

export const Username = styled.div`
	color: ${({ theme }) => theme.textMuted};
	margin-left: 0.7rem;
`;
