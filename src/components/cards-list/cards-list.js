import React from "react";

import { StyledCardsList, CardsListWrapper } from "./cards-list.styles";
import { StyledTitle } from "../../styles/styles.generic";

import Card from "../card/card";
import Spinner from "../spinner/spinner";

const CardsList = ({ list, title }) => {
	return list ? (
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
	) : (
		<Spinner />
	);
};

export default CardsList;
