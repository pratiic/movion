import React from "react";

import { StyledCardsList, CardsListWrapper } from "./cards-list.styles";
import { StyledTitle } from "../../styles/styles.generic";

import Card from "../card/card";

const CardsList = ({ list, title }) => {
	console.log(list[0]);

	return (
		<StyledCardsList>
			<StyledTitle>{title}</StyledTitle>
			<CardsListWrapper>
				{list.map(({ id, title, release_date, poster_path }) => {
					return (
						<Card
							title={title}
							releaseDate={release_date}
							posterPath={poster_path}
							key={id}
						/>
					);
				})}
			</CardsListWrapper>
		</StyledCardsList>
	);
};

export default CardsList;
