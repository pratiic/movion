import styled from "styled-components";
import { NumberTag } from "../chats-toggler/chats-toggler.styles";

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
	position: relative;

	${NumberTag} {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
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

export const Messages = styled.div`
	color: ${({ theme }) => theme.textMuted};
`;
