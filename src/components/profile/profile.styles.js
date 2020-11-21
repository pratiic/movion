import styled from "styled-components";

import { HeaderElementStyles } from "../header/header.styles";

import { cssColors } from "../../styles/styles.variables";

export const StyledProfile = styled.div`
	${HeaderElementStyles};
	cursor: auto;
	font-size: 1.7rem;
	text-transform: capitalize;
	position: relative;

	@media screen and (max-width: 1150px) {
		order: -1;
		margin-left: 0;
		margin: 0 auto;
		padding: 1rem 0;
	}
`;

export const Username = styled.p`
	display: none;

	@media screen and (max-width: 1150px) {
		display: block;
	}
`;

export const ProfileLetter = styled.div`
	height: 2.75rem;
	width: 2.75rem;
	border-radius: 50%;
	background-color: ${cssColors.greyLight};
	color: ${cssColors.greyLighter};
	font-size: 1.8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	cursor: pointer;

	&:hover {
		color: white;
	}

	&:active {
		color: ${cssColors.greyLighter};
	}

	@media screen and (max-width: 1150px) {
		margin: 0 auto 0.8rem auto;
		pointer-events: none;
	}
`;

export const ProfileHeader = styled.div`
	padding: 2.2rem 1.5rem;
	border-bottom: 1px solid ${cssColors.greyLighter};
	display: flex;
	align-items: center;

	${ProfileLetter} {
		background-color: ${cssColors.greyDark};
		margin-right: 1.4rem;
		pointer-events: none;
	}

	@media screen and (max-width: 1150px) {
		display: none;
	}
`;