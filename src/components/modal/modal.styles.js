import styled, { css } from "styled-components";

export const FlexStyles = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalOverlay = styled.div`
	${FlexStyles};

	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 15;
	padding: 0 1.5rem;
`;

export const StyledModal = styled.div`
	background-color: ${({ theme }) => theme.bodyBg};
	padding: 1rem;
	border-radius: 7px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
	position: relative;
	max-width: 50rem;
`;

export const Header = styled.div`
	display: flex;
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.textIconBlur};
	font-size: 2rem;
	text-align: center;
	margin-bottom: 1.5rem;
	flex: 1 1 auto;
	margin-right: 1.5rem;

	&::first-letter {
		text-transform: uppercase;
	}
`;

export const Buttons = styled.div`
	${FlexStyles};

	& > *:first-child {
		margin-right: 1.5rem;
	}
`;

export const Message = styled.div`
	${FlexStyles};
	font-size: 1.85rem;
	text-transform: capitalize;
	color: ${({ theme }) => theme.textIconBlur};
	padding: 0.5rem 0;

	svg {
		margin-left: 0.75rem;
	}
`;

export const CloseModal = styled.div`
	/* position: absolute;
	right: 0;
	top: 0; */
`;
