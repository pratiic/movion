import styled from "styled-components";

export const StyledEmojiPicker = styled.div`
	display: ${({ show }) => (show ? "block" : "none")};

	position: absolute;
	height: 33rem;
	top: -34rem;
	width: 40rem;
	right: 0;

	@media screen and (max-width: 750px) {
		width: 35rem;
		height: 28rem;
		top: -29rem;
	}

	@media screen and (max-width: 450px) {
		width: 100%;
		height: 25rem;
		top: -25.5rem;
	}
`;
