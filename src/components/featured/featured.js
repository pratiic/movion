import React from "react";

import { StyledFeatured, FeaturedWrapper } from "./featured.styles";

import { apiInfo } from "../../redux/api/api.info";

import Spinner from "../spinner/spinner";
import GenericButton from "../generic-button/generic-button";

const Featured = ({ featured }) => {
	if (featured) {
		const { title, name, backdrop_path, overview, id } = featured;
		return (
			<StyledFeatured
				backdropPath={`${apiInfo.baseURLs.images}/${backdrop_path}`}
			>
				<FeaturedWrapper>
					<p className="featured-title">{title || name}</p>
					<p className="featured-overview">{overview}</p>
					<GenericButton
						value="view more"
						outlined
						func="view more"
						detailFetchId={id}
						type={title ? "movie" : "tv"}
					/>
				</FeaturedWrapper>
			</StyledFeatured>
		);
	}
	return <Spinner height="75vh" />;
};

export default Featured;
