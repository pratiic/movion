import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { StyledFeatured, FeaturedWrapper } from "./featured.styles";

import { apiInfo } from "../../redux/api/api.info";
import { resetSimilarFetchPage } from "../../redux/details/details.actions";
import GenericButton from "../generic-button/generic-button";

const Featured = ({ featured, resetSimilarFetchPage }) => {
	const history = useHistory();

	const handleButtonClick = () => {
		const { id, title } = featured;
		const type = title ? "movie" : "tv";

		resetSimilarFetchPage();
		history.push(`/details/${type}/${id}`);
	};

	if (featured) {
		const { title, name, backdrop_path, overview } = featured;

		return (
			<StyledFeatured
				backdropPath={`${apiInfo.baseURLs.images}/${backdrop_path}`}
			>
				<FeaturedWrapper>
					<p className="featured-title">{title || name}</p>
					<p className="featured-overview">{overview}</p>
					<GenericButton
						btnType="outlined"
						handleButtonClick={handleButtonClick}
					>
						view more
					</GenericButton>
				</FeaturedWrapper>
			</StyledFeatured>
		);
	} else {
		return null;
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		resetSimilarFetchPage: () => {
			dispatch(resetSimilarFetchPage());
		},
	};
};

export default connect(null, mapDispatchToProps)(Featured);
