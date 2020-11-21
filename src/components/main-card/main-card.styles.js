import styled from "styled-components";

import { cssColors, cssFonts } from "../../styles/styles.variables";

import { ReactComponent as DotMenuIcon } from "../../assets/icons/dot-menu.svg";

export const StyledDotMenuIcon = styled(DotMenuIcon)`
	height: 2rem;
	width: 2rem;
	position: absolute;
	background-color: ${cssColors.greyLighter};
	border-radius: 50%;
	padding: 0.2rem;
	top: 0.7rem;
	right: 0.7rem;
	opacity: 0.7;
	cursor: pointer;

	&:hover {
		background-color: white;
	}
`;

export const StyledMainCard = styled.div`
	font-family: ${cssFonts.fontStackTertiary};
	font-weight: 300;
	position: relative;

	.card-image-container {
		width: 100%;

		img {
			width: 100%;
			height: 100%;
			display: block;
		}

		cursor: pointer;
	}

	.content-info {
		border: 1px solid ${cssColors.greyLight};
		border-top: none;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		padding: 0.55rem 0.8rem;
		box-shadow: 0 0.3rem 0.45rem 0 rgba(0, 0, 0, 0.35);
	}

	.content-name {
		font-size: 1.75rem;
		margin-bottom: 0.5rem;
	}

	.content-release-date {
		color: ${cssColors.greyText};
		font-size: 1.6rem;
	}
`;
