import React from "react";

import { StyledPersonCard } from "./person-card.styles";

import { apiInfo } from "../../redux/api/api.info";

const PersonCard = ({ name, profilePath, character, job }) => {
	return (
		<StyledPersonCard>
			<div className="card-image-container">
				<img
					src={`${apiInfo.baseURLs.images}/${profilePath}`}
					alt="not available here"
				/>
			</div>
			<div className="person-info">
				<p className="person-name">{name}</p>
				<p className="person-description">{character || job}</p>
			</div>
		</StyledPersonCard>
	);
};

export default PersonCard;
