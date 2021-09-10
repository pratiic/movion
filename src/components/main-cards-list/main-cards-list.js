import React from "react";

import {
	StyledMainCardsList,
	MainCardsListWrapper,
} from "./main-cards-list.styles";

import { getContentType } from "../../utils/utils.components";

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
						type,
					}) => {
						return (
							poster_path && (
								<MainCard
									title={title || name}
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
