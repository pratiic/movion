import React from "react";

import {
	StyledMainCardsList,
	MainCardsListWrapper,
} from "./main-cards-list.styles";
import { StyledTitle } from "../../styles/styles.generic";

import MainCard from "../main-card/main-card";

const MainCardsList = ({ list, title, titleSize, query, textAlign }) => {
	return (
		<StyledMainCardsList>
			<StyledTitle titleSize={titleSize} textAlign={textAlign}>
				{title}{" "}
				{query ? (
					<span
						style={{
							textTransform: "lowercase",
							color: "#e86d1a",
						}}
					>
						"{query}"
					</span>
				) : null}
			</StyledTitle>

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
