import React from "react";

import { StyledCardsList, CardsListWrapper } from "./cards-list.styles";
import { StyledTitle } from "../../styles/styles.generic";

import Card from "../card/card";
import Spinner from "../spinner/spinner";

const CardsList = ({ list, title, titleSize }) => {
	return list ? (
		<StyledCardsList>
			<StyledTitle titleSize={titleSize}>{title}</StyledTitle>
			<CardsListWrapper>
				{list.map(
					({
						id,
						title,
						name,
						release_date,
						first_air_date,
						poster_path,
					}) => {
						if (poster_path) {
							return (
								<Card
									title={title || name}
									releaseDate={release_date || first_air_date}
									posterPath={poster_path}
									key={id}
								/>
							);
						} else {
							return null;
						}
					}
				)}
			</CardsListWrapper>
		</StyledCardsList>
	) : (
		<Spinner />
	);
};

export default CardsList;
