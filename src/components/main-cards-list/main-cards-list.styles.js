import styled from "styled-components";

import { WrapperStyles } from "../../styles/styles.generic";

export const StyledMainCardsList = styled.div``;

export const MainCardsListWrapper = styled.div`
	${WrapperStyles};
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 20rem));
	grid-gap: 3.5rem;
	justify-content: center;
	margin-bottom: 3rem;
	@media screen and (max-width: 550px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
	}

	@media screen and (max-width: 400px) {
		grid-template-columns: repeat(1, 75%);
	}
`;
