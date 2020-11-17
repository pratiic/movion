import React from "react";
import { connect } from "react-redux";

import {
	StyledDetails,
	DetailsMain,
	DetailsMainWrapper,
} from "./details.styles";

import { fetchDetails, fetchSimilar } from "../../redux/api/api.actions";
import { getURL, apiInfo } from "../../redux/api/api.info";
import { selectSimilar } from "../../redux/details/details.selectors";

import {
	renderReleaseDate,
	getWithCommas,
} from "../../components/utils/utils.components";

import Spinner from "../../components/spinner/spinner";
import CardsList from "../../components/cards-list/cards-list";

class DetailsPage extends React.Component {
	startTheSearch = () => {
		const { match, fetchDetails, fetchSimilar } = this.props;
		const id = match.params.id;
		const type = match.params.type;
		const mode = type;
		const detailsURL = getURL(mode, null, "details", null, id);
		fetchDetails(detailsURL);
		const similarURL = getURL(mode, 1, "similar", null, id);
		fetchSimilar(similarURL);
	};

	componentDidMount() {
		this.startTheSearch();
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.startTheSearch();
		}
	}

	render() {
		const {
			mainDetails,
			fetchingMainDetails,
			similar,
			fetchingSimilar,
			match,
		} = this.props;

		if (!mainDetails || (mainDetails && fetchingMainDetails)) {
			return <Spinner />;
		} else {
			const {
				backdrop_path,
				budget,
				genres,
				overview,
				poster_path,
				release_date,
				first_air_date,
				revenue,
				tagline,
				title,
				name,
				created_by,
			} = mainDetails;

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

					{fetchingSimilar ? (
						<Spinner height="7rem" />
					) : (
						<CardsList
							list={similar}
							title={`similar ${
								match.params.type === "movie"
									? "movies"
									: "tv shows"
							}`}
							titleSize="smaller"
							titleBtMargin="smaller"
						/>
					)}
				</StyledDetails>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		mainDetails: state.details.mainDetails,
		searchMode: state.searchbar.searchMode,
		fetchingMainDetails: state.details.fetchingMainDetails,
		similar: selectSimilar(state),
		fetchingSimilar: state.details.fetchingSimilar,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchDetails: (url) => {
			dispatch(fetchDetails(url));
		},
		fetchSimilar: (url) => {
			dispatch(fetchSimilar(url));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
