import React from "react";

import {
	StyledMainCardsList,
	MainCardsListWrapper,
} from "./main-cards-list.styles";

import { getContentType } from "../../utils/utils.components";

import MainCard from "../main-card/main-card";

//this component renders given cards that are used for movies and tv shows
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
						type,
					}) => {
						return (
							poster_path && (
								<MainCard
									//the api gives title for movies
									//name for tv shows
									title={title || name}
									//release_date for movies
									//first_air_date for tv shows
									releaseDate={release_date || first_air_date}
									posterPath={poster_path}
									key={id}
									id={id}
									type={getContentType(title, name, type)}
								/>
							)
						);
					}
				)}
			</MainCardsListWrapper>
		</StyledMainCardsList>
	);
};

export default MainCardsList;
