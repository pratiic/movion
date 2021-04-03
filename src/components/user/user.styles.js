import styled from "styled-components";

export const StyledUser = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.bgFocused};
	padding: 0.5rem 1.5rem;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.bgFocused};
	}

	@media screen and (max-width: 500px) {
		padding: 0.5rem 0.3rem;
	}
`;

export const UserInfo = styled.div`
	flex: 1 1 auto;
	margin-left: 1rem;
`;

export const Username = styled.div`
	color: ${({ theme }) => theme.textIconBlur};
	font-size: 1.8rem;
`;

export const UserEmail = styled.div`
	color: ${({ theme }) => theme.textMuted};

	white-space: no-wrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
