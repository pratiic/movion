import styled from "styled-components";

import { WrapperStyles, OverlayStyles } from "../../styles/styles.generic";
//import { cssColors } from "../../styles/styles.variables";

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

	p {
		margin-bottom: 1.5rem;
	}

	.featured-title {
		font-size: 2.8rem;
		font-weight: 300;
	}

	.featured-overview {
		max-width: 70%;
		margin-bottom: 2.4rem;

		@media screen and (max-width: 800px) {
			max-width: 85%;
		}

		@media screen and (max-width: 600px) {
			width: 100%;
		}
	}
`;
