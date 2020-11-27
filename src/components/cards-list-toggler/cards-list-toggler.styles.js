import styled, { css } from "styled-components";

export const StyledCardsListToggler = styled.div`
	color: ${({ theme }) => theme.textIconBlur};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 50%;
	border-bottom: 1px solid ${({ theme }) => theme.textIconBlur};
	border-radius: 5px;
	margin: 0 auto 2rem auto;
	font-weight: 300;
	cursor: pointer;

	${({ theme }) =>
		theme &&
		css`
			&:hover {
				color: ${theme.textFocused};

				svg {
					path {
						fill: ${theme.iconFocused};
					}
				}
			}

			&:active {
				color: ${theme.textIconBlur};

				svg {
					path {
						fill: ${theme.textIconBlur};
					}
				}
			}
		`}

	@media screen and (max-width: 1000px) {
		width: 80%;
	}

	@media screen and (max-width: 500px) {
		width: 85%;
	}
`;

export const Title = styled.p`
	font-size: 2.5rem;
	text-transform: capitalize;
`;
