import React from "react";

import {
	StyledMainCardsList,
	MainCardsListWrapper,
} from "./main-cards-list.styles";

import MainCard from "../main-card/main-card";

const MainCardsList = ({ list }) => {
	return (
		<StyledMainCardsList>
			<MainCardsListWrapper>
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
								<MainCard
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
			</MainCardsListWrapper>
		</StyledMainCardsList>
	);
};

export default MainCardsList;
