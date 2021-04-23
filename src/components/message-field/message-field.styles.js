import styled from "styled-components";

import { cssColors, cssFonts } from "../../styles/styles.variables";

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.bgFocused};
	border-radius: 7px;
	padding: 0 1.5rem;
	position: relative;
	margin: 0 1.7rem 0.75rem 1.7rem;

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

		/* .active-category-indicator-wrapper {
			.active-category-indicator {
				background-color: ${({ theme }) => theme.textMuted};
				opacity: 1;
			}
		} */

		.skin-tones-list {
			display: none;
		}
	}

	@media screen and (max-width: 500px) {
		margin: 0 0.8rem 0.75rem 0.8rem;
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 3.5rem;
	font-size: 1.7rem;
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
		margin-left: 1.75rem;
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
