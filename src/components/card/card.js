import React from "react";

import { apiInfo } from "../../redux/api/api.info";

import { StyledCard, StyledDotMenuIcon } from "./card.styles";

import { numToStrMonthMap } from "../utils/utils";

const Card = ({ title, releaseDate, posterPath }) => {
	const renderReleaseDate = () => {
		const date = new Date(releaseDate);
		return `${date.getDate()} ${
			numToStrMonthMap[date.getMonth()]
		}, ${date.getFullYear()}`;
	};

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
				<p className="content-release-date">
					{releaseDate ? renderReleaseDate() : "not available"}
				</p>
			</div>
		</StyledCard>
	);
};

export default Card;
