import React from "react";

import { StyledPersonCard } from "./person-card.styles";

import { apiInfo } from "../../redux/api/api.info";

//this component is used for cast and crew
const PersonCard = ({ name, profilePath, character, job }) => {
	return (
		<StyledPersonCard>
			<div className="card-image-container">
				<img
					src={`${apiInfo.baseURLs.images}/${profilePath}`}
					alt="not available here"
				/>
			</div>
			<div className="content-info">
				<p className="content-name">{name}</p>
				<p className="content-description">
					{
						//the api gives character for cast
						//job for crew
						character || job
					}
				</p>
			</div>
		</StyledPersonCard>
	);													
};

export default PersonCard;
