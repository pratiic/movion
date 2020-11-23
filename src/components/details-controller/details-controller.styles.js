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
	cursor: pointer;
	margin-bottom: 1.7rem;
	font-family: ${cssFonts.fontStackTertiary};

	${({ forComponent }) => {
		if (forComponent === "card") {
			return css`
				margin-bottom: 0rem;
				border: none;

				&:hover {
					background-color: ${cssColors.greyDark};
				}
			`;
		}
	}}

	svg {
		margin-right: 0.75rem;
	}

	&:hover {
		color: white;

		svg {
			path {
				fill: ${cssColors.bluePrimary};
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

	${({ jobDone }) =>
		jobDone &&
		css`
			&:hover {
				color: ${cssColors.greyLighter};

				svg {
					path {
						fill: ${cssColors.greyLighter};
					}
				}
			}
		`}
`;
