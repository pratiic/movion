import styled from "styled-components";

import { OverlayStyles } from "../../styles/styles.generic";
import { cssColors } from "../../styles/styles.variables";
import { WrapperStyles } from "../../styles/styles.wrapper";

export const StyledDetailsMain = styled.div`
	background-image: ${({ backdropPath }) => `url(${backdropPath})`};
	background-size: cover;
	background-position: center;
	position: relative;
	margin-top: 5rem;
	margin-bottom: 2.5rem;
	padding: 10rem 0;

	${OverlayStyles};

	&::after {
		background-color: rgba(0, 0, 0, 0.7);
	}

	@media screen and (max-width: 850px) {
		padding: 5rem 0;
	}
`;

export const DetailsMainWrapper = styled.div`
	${WrapperStyles};

	display: flex;
	justify-content: center;
	color: white;

	> * {
		z-index: 3;
	}

	@media screen and (max-width: 700px) {
		flex-direction: column;
	}
`;

export const ImageContainer = styled.div`
	width: 25rem;
	max-height: 30rem;
	border-radius: 7px;
	box-shadow: 0 0 1.2rem 0 rgba(0, 0, 0, 0.5);
	margin-right: 3rem;

	img {
		height: 100%;
		width: 100%;
		border-radius: inherit;
	}

	@media screen and (max-width: 700px) {
		margin: 0 auto 3rem auto;
		width: 20rem;
		height: auto;
	}
`;

export const MainDetails = styled.div`
	width: fit-content;
	font-size: 1.5rem;

	.muted {
		color: ${cssColors.greyLighter};
	}

	.margin-bt-small {
		margin-bottom: 0.4rem;
	}

	.margin-bt-large {
		margin-bottom: 1.7rem;
	}

	.margin-rt-small {
		margin-right: 0.8rem;
	}

	.title {
		font-size: 2.3rem;
		font-weight: 300;

		.release-year {
			margin-left: 0.8rem;
		}
	}

	.genres {
		.genre {
			margin-right: 0.75rem;
			text-transform: lowercase;
		}
	}

	.release-date {
		span {
			margin-right: 0.5rem;
		}
	}

	.tagline {
		font-style: italic;
	}

	.add-to-favorites {
		display: flex;
		align-items: center;
		font-size: 1.55rem;
		color: ${cssColors.greyLighter};
		text-transform: capitalize;
		border: 1px solid ${cssColors.greyText};
		width: fit-content;
		padding: 0.3rem 0.5rem;
		border-radius: 5px;
		cursor: pointer;

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
	}

	.overview {
		.overview-title {
			font-size: 1.85rem;
			text-transform: capitalize;
		}

		.overview-content {
			width: 70%;

			@media screen and (max-width: 850px) {
				width: 100%;
			}
		}
	}
`;
