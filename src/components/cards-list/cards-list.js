import React from "react";

import { StyledCardsList, CardsListWrapper } from "./cards-list.styles";
import { StyledTitle } from "../../styles/styles.generic";

import Card from "../card/card";

const CardsList = ({ list, title, titleSize, query, titleBtMargin }) => {
	return (
		<StyledCardsList>
			<StyledTitle titleSize={titleSize} titleBtMargin={titleBtMargin}>
				{title}{" "}
				{query ? (
					<span
						style={{ textTransform: "lowercase", color: "#e86d1a" }}
					>
						"{query}"
					</span>
				) : null}
			</StyledTitle>
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
									id={id}
									type={title ? "movie" : "tv"}
								/>
							);
						} else {
							return null;
						}
					}
				)}
			</CardsListWrapper>
		</StyledCardsList>
	);
};

export default CardsList;
