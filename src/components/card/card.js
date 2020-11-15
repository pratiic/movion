import React from "react";
import { withRouter } from "react-router-dom";

import { apiInfo } from "../../redux/api/api.info";

import { StyledCard, StyledDotMenuIcon } from "./card.styles";

import { renderReleaseDate } from "../utils/utils.components";

const Card = ({ title, releaseDate, posterPath, history, id }) => {
	const handleCardImageClick = () => {
		history.push(`/details/${id}`);
	};

	return (
		<StyledCard>
			<div
				className="card-image-container"
				onClick={handleCardImageClick}
			>
				<StyledDotMenuIcon />
				<img
					src={`${apiInfo.baseURLs.images}/${posterPath}`}
					alt="poster not available"
				/>
			</div>

			<div className="content-info">
				<p className="content-name">{title}</p>
				<p className="content-release-date">
					{releaseDate
						? renderReleaseDate(releaseDate)
						: "not available"}
				</p>
			</div>
		</StyledCard>
	);
};

export default withRouter(Card);
