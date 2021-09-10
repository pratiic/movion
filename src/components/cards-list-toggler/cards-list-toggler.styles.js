import styled, { css } from "styled-components";

export const StyledCardsListToggler = styled.div`
	color: ${({ theme }) => theme.textIconBlur};
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.textIconBlur};
	border-radius: 5px;
	margin: 0 auto 0 auto;
	font-weight: 400;
	cursor: pointer;
	padding: 0.2rem 1rem;

	svg {
		margin: 0;
	}

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
`;

export const Title = styled.p`
	font-size: 1.7rem;
	text-transform: uppercase;
`;
