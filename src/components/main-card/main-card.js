import React from "react";
import { withRouter } from "react-router-dom";

import { apiInfo } from "../../redux/api/api.info";

import { StyledMainCard, StyledDotMenuIcon } from "./main-card.styles";

import { renderReleaseDate } from "../utils/utils.components";

const MainCard = ({
	title,
	releaseDate,
	posterPath,
	history,
	match,
	id,
	type,
}) => {
	const handleCardImageClick = () => {
		history.push(`/details/${type}/${id}`);
	};

	return (
		<StyledMainCard>
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
		</StyledMainCard>
	);
};

export default withRouter(MainCard);
