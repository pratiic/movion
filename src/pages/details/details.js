import React from "react";
import { connect } from "react-redux";

import {
	StyledDetails,
	DetailsMain,
	DetailsMainWrapper,
} from "./details.styles";

import { fetchDetails } from "../../redux/api/api.actions";
import { getURL, apiInfo } from "../../redux/api/api.info";

import {
	searchModeMap,
	renderReleaseDate,
	getWithCommas,
} from "../../components/utils/utils.components";

import Spinner from "../../components/spinner/spinner";

class DetailsPage extends React.Component {
	componentDidMount() {
		const { match, fetchDetails, searchMode } = this.props;
		const id = match.params.id;
		const mode = searchModeMap[searchMode];
		const url = getURL(mode, null, "details", null, id);
		fetchDetails(url);
	}

	render() {
		const { details } = this.props;

		if (!details) {
			return <Spinner height="55vh" />;
		} else {
			const {
				backdrop_path,
				budget,
				genres,
				imdb_id,
				overview,
				poster_path,
				release_date,
				first_air_date,
				revenue,
				runtime,
				tagline,
				title,
				name,
				created_by,
			} = details;

			return (
				<StyledDetails>
					<DetailsMain
						backdropPath={`${apiInfo.baseURLs.images}/${backdrop_path}`}
					>
						<DetailsMainWrapper>
							<div className="image-container">
								<img
									src={`${apiInfo.baseURLs.images}/${poster_path}`}
									alt=""
								/>
							</div>

							<div className="details-main-content">
								<p className="title margin-bt-small">
									{title || name}
									{release_date || first_air_date ? (
										<span className="release-year">
											(
											{new Date(
												release_date || first_air_date
											).getFullYear()}
											)
										</span>
									) : null}
								</p>

								<p className="genres muted margin-bt-small">
									{genres.map((genre) => {
										return (
											<span
												className="genre"
												key={genre.id}
											>
												{" "}
												{genre.name}{" "}
											</span>
										);
									})}
								</p>

								<div className="details-bar details-bar-first margin-bt-large">
									<p className="release-date muted">
										{first_air_date ? (
											<span>First aired on</span>
										) : null}
										{renderReleaseDate(
											release_date || first_air_date
										)}
									</p>
									<span className="runtime"></span>
								</div>

								{tagline ? (
									<p className="tagline muted margin-bt-large">
										"{tagline}"
									</p>
								) : null}

								<div className="overview margin-bt-large">
									<p className="overview-title margin-bt-small">
										overview
									</p>
									<p className="overview-content">
										{overview}
									</p>
								</div>

								{created_by ? (
									<p className="created-by">
										<span className="muted margin-rt-small">
											{"Created by"}
										</span>{" "}
										<span>{created_by[0].name}</span>
									</p>
								) : null}

								{budget ? (
									<p className="budget margin-bt-small">
										<span className="muted margin-rt-small">
											{"Budget"}{" "}
										</span>
										<span>
											{getWithCommas(budget) ||
												"not available"}
										</span>
									</p>
								) : null}

								{revenue ? (
									<p className="revenue">
										<span className="muted margin-rt-small">
											{"Revenue"}{" "}
										</span>
										<span>
											{getWithCommas(revenue) ||
												"not available"}
										</span>
									</p>
								) : null}
							</div>
						</DetailsMainWrapper>
					</DetailsMain>
				</StyledDetails>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		details: state.details.details,
		searchMode: state.searchbar.searchMode,
		fetching: state.details.fetching,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchDetails: (url) => {
			dispatch(fetchDetails(url));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
