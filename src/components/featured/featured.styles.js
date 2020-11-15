import styled from "styled-components";

import { WrapperStyles } from "../../styles/styles.generic";

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
	height: 92vh;
	width: 100%;
	background-image: ${({ backdropPath }) => `url(${backdropPath})`};
	background-size: cover;
	background-position: center;
	position: relative;
	margin-bottom: 5.5rem;
	display: flex;
	align-items: center;

	&::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.65);
	}

	p {
		margin-bottom: 1.5rem;
	}

	.featured-title {
		font-size: 2.8rem;
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
