import styled from "styled-components";

export const StyledChatHeader = styled.div`
	display: flex;
	justify-content: space-between;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 5rem;
	border-bottom: 1px solid ${({ theme }) => theme.bgFocused};
	padding: 0 1.5rem;
	background-color: ${({ theme }) => theme.bodyBg};
	z-index: 5;
	/* max-width: 850px; */

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
