import React from "react";

import { apiInfo } from "../../redux/api/api.info";

import { StyledCard, StyledDotMenuIcon } from "./card.styles";

const Card = ({ title, releaseDate, posterPath }) => {
	return (
		<StyledCard>
			<div className="card-image-container">
				<StyledDotMenuIcon />
				<img
					src={`${apiInfo.baseURLs.images}/${posterPath}`}
					alt="poster not available"
				/>
			</div>

			<div className="content-info">
				<p className="content-name">{title}</p>
				<p className="content-release-date">{releaseDate}</p>
			</div>
		</StyledCard>
	);
};

export default Card;
