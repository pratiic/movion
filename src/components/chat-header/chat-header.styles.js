import styled from "styled-components";

export const StyledChatHeader = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${({ theme }) => theme.bgFocused};
	padding: 0.1rem 1.5rem;

	&,
	& > * {
		display: flex;
		align-items: center;
	}
`;

export const HeaderControls = styled.div`
	& > *:last-child {
		margin-left: 1.5rem;
	}
`;

export const UserProfilePreview = styled.div``;

export const Username = styled.div`
	color: ${({ theme }) => theme.textMuted};
	font-size: 1.85rem;
	margin-left: 0.75rem;
`;
