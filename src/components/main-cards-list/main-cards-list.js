import React from "react";

import {
	StyledMainCardsList,
	MainCardsListWrapper,
} from "./main-cards-list.styles";

import MainCard from "../main-card/main-card";

const MainCardsList = ({ list, forComponent }) => {
	const renderType = (title, name, type) => {
		if (type) {
			return type;
		} else if (!type && (title || name)) {
			if (title) {
				return "movie";
			} else {
				return "tv";
			}
		}
	};

	return (
		<StyledMainCardsList>
			<MainCardsListWrapper>
				{list.map(
					({
						id,
						title,
						name,
						release_date,
						releaseDate,
						first_air_date,
						poster_path,
						posterPath,
						type,
					}) => {
						if (poster_path || posterPath) {
							return (
								<MainCard
									title={title || name}
									releaseDate={
										releaseDate ||
										release_date ||
										first_air_date
									}
									posterPath={poster_path || posterPath}
									key={id}
									id={id}
									type={renderType(title, name, type)}
									forComponent = { forComponent }
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
