import styled from "styled-components";

import { cssFonts, cssColors } from "../../styles/styles.variables";

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.bgFocused};
	border-radius: 5px;
	padding: 0 0.75rem;
	position: relative;
	margin: 1rem;

	.emoji-picker-react {
		height: 100%;
		width: 100%;
		box-shadow: none;
		background-color: ${({ theme }) => theme.bgFocused};
		border: none;
		border-radius: 5px;

		.emoji-categories {
			button {
				opacity: 1;
			}
		}

		.emoji-scroll-wrapper {
			&::-webkit-scrollbar {
				width: 0.75rem;
			}

			&::-webkit-scrollbar-thumb {
				background-color: ${({ theme }) => theme.bodyBg};
			}

			.emoji-group {
				&::before {
					background-color: ${({ theme }) => theme.bgFocused};
					color: ${({ theme }) => theme.textIconBlur};
					font-family: ${cssFonts.fontStackPrimary};
				}
			}
		}

		.emoji-search {
			background-color: ${({ theme }) => theme.bgFocused};
			border: 1px solid ${({ theme }) => theme.textMuted};
			color: ${({ theme }) => theme.textIconBlur};
			border-radius: 5px;
			margin-top: 0.75rem;
			height: 3rem;
			font-size: 1.5rem;
			font-family: ${cssFonts.fontStackPrimary};

			&:focus {
				border: 1px solid ${({ theme }) => theme.textMuted};
			}
		}

		.skin-tones-list {
			display: none;
		}
	}

	@media screen and (max-width: 500px) {
		margin: 0.75rem 0;
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 4rem;
	font-size: 1.75rem;
	font-family: ${cssFonts.fontStackPrimary};
	outline: none;
	background-color: inherit;
	border: none;
	color: ${({ theme }) => theme.textIconBlur};
`;

export const Icons = styled.div`
	margin-left: 1.75rem;
	display: flex;
	justify-content: center;
	align-items: center;

	& > :not(:first-child) {
		margin-left: 1.25rem;
	}

	svg {
		padding: 0.5rem;
		box-sizing: content-box;
		border-radius: 50%;

		&:hover {
			background-color: ${({ theme }) => theme.textMuted};

			path {
				fill: ${cssColors.bgFocused};
			}
		}

		&:active {
			background-color: ${({ theme }) => theme.bgFocusedDark};

			path {
				fill: ${({ theme }) => theme.textMuted};
			}
		}
	}
`;

export const SendButton = styled.button`
	outline: none;
	border: none;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
`;
