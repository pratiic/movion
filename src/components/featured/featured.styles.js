import styled from "styled-components";

import { OverlayStyles } from "../../styles/styles.generic";
import { WrapperStyles } from "../../styles/styles.wrapper";

export const FeaturedWrapper = styled.div`
	${WrapperStyles};

	display: flex;
	flex-direction: column;
	justify-content: center;

	> * {
		z-index: 3;
	}
`;

export const StyledFeatured = styled.div`
	height: 100vh;
	width: 100%;
	font-size: 1.75rem;
	color: white;
	background-image: ${({ backdropPath }) => `url(${backdropPath})`};
	background-size: cover;
	background-position: center;
	position: relative;
	margin-bottom: 3rem;
	display: flex;
	align-items: center;

	${OverlayStyles};
`;

export const Title = styled.p`
	font-size: 2.75rem;
	font-weight: 300;
	margin-bottom: 1.5rem;
`;

export const Overview = styled.p`
	max-width: 70%;
	margin-bottom: 2.5rem;

	@media screen and (max-width: 800px) {
		max-width: 85%;
	}

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;
