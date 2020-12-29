import styled, { css } from "styled-components";

import { cssColors, cssFonts } from "../../styles/styles.variables";

export const StyledDetailsController = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.55rem;
	color: ${cssColors.greyLighter};
	border: 1px solid ${cssColors.greyText};
	width: fit-content;
	padding: 0.5rem 0.75rem;
	border-radius: 5px;
	cursor: ${({ jobDone }) => (jobDone ? "auto" : "pointer")};
	margin-bottom: 1.7rem;
	font-family: ${cssFonts.fontStackTertiary};

	svg {
		margin-right: 0.75rem;
	}

	${({ forComponent }) => {
		if (forComponent === "card") {
			return css`
				margin-bottom: 0rem;
				border: none;
				color: ${({ theme }) => theme.textIconBlur};

				&:hover {
					background-color: ${({ theme }) => theme.bgFocused};
					color: ${({ theme }) => theme.textFocused};
				}
			`;
		} else if (forComponent === "details main") {
			return css`
				&:hover {
					color: white;

					svg {
						path {
							fill: white;
						}
					}
				}

				&:active {
					color: ${cssColors.greyLighter};

					svg {
						path {
							fill: ${cssColors.greyLighter};
						}
					}
				}

				svg {
					path {
						fill: ${cssColors.greyLighter};
					}

					&:hover {
						path {
							fill: ${cssColors.white};
						}
					}

					&:active {
						path {
							fill: ${cssColors.greyLighter};
						}
					}
				}
			`;
		}
	}}
`;
