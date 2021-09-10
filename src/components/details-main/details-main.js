import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import {
	StyledDetailsMain,
	DetailsMainWrapper,
	ImageContainer,
	MainDetails,
} from "./details-main.styles";
import { StyledMessage } from "../../styles/styles.generic";

import { fetchMainDetails } from "../../redux/api/api.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";
import { getURL, apiInfo } from "../../redux/api/api.info";
import {
	selectFavoriteMovies,
	selectFavoriteTvShows,
} from "../../redux/favorites/favorites.selectors";

import { renderReleaseDate, getWithCommas } from "../../utils/utils.components";

import Spinner from "../spinner/spinner";
import DetailsControl from "../details-control/details-control";

const DetailsMain = ({
	mainDetails,
	fetchingMainDetails,
	fetchMainDetails,
	mainDetailsError,
}) => {
	const { id, type } = useParams();

	useEffect(() => {
		if (mainDetails) {
			document.title = mainDetails.title || mainDetails.name;
		}
	}, [mainDetails]);

	useEffect(() => {
		startAsyncOp();
		// eslint-disable-next-line
	}, [id]);

	const startAsyncOp = () => {
		const mode = type;
		const detailsURL = getURL(mode, null, "details", null, id);
		fetchMainDetails(detailsURL);
	};

	if (mainDetailsError) {
		return (
			<StyledMessage marginTop="7rem">{mainDetailsError}</StyledMessage>
		);
	}

	if (!mainDetails || (mainDetails && fetchingMainDetails)) {
		return <Spinner height="95vh" message="loading details" />;
	}

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
		vote_average,
	} = mainDetails;

	return (
		<StyledDetailsMain
			backdropPath={`${apiInfo.baseURLs.images}/${backdrop_path}`}
		>
			<DetailsMainWrapper>
				<ImageContainer className="image-container">
					<img
						src={`${apiInfo.baseURLs.images}/${poster_path}`}
						alt=""
					/>
				</ImageContainer>

				<MainDetails>
					<p className="title margin-bt-small">
						{title || name}
						{(release_date || first_air_date) && (
							<span className="release-year">
								(
								{new Date(
									release_date || first_air_date
								).getFullYear()}
								)
							</span>
						)}
					</p>

					<p className="genres muted margin-bt-small">
						{genres.map((genre) => {
							return (
								<span className="genre" key={genre.id}>
									{genre.name}
								</span>
							);
						})}
					</p>

					<div className="details-bar details-bar-first margin-bt-large">
						<p className="release-date muted">
							{first_air_date && <span>First aired on</span>}
							{renderReleaseDate(release_date || first_air_date)}
						</p>
						<span className="runtime"></span>
					</div>

					{tagline && (
						<p className="tagline muted margin-bt-large">
							"{tagline}"
						</p>
					)}

					<DetailsControl
						contentId={id}
						contentMainDetails={mainDetails}
					/>

					<div className="overview margin-bt-large">
						<p className="overview-title margin-bt-small">
							overview
						</p>
						<p className="overview-content">{overview}</p>
					</div>

					{created_by && created_by[0] && (
						<p className="created-by">
							<span className="muted margin-rt-small margin-bt-small">
								{"Created by"}
							</span>
							<span>{created_by[0].name}</span>
						</p>
					)}

					{budget && (
						<p className="budget margin-bt-small">
							<span className="muted margin-rt-small">
								{"Budget"}
							</span>
							<span>
								{getWithCommas(budget) || "not available"}
							</span>
						</p>
					)}

					{revenue && (
						<p className="revenue margin-bt-small">
							<span className="muted margin-rt-small">
								{"Revenue"}
							</span>
							<span>
								{getWithCommas(revenue) || "not available"}
							</span>
						</p>
					)}

					{vote_average && (
						<p className="average-rating">
							<span className="muted margin-rt-small">
								Average rating
							</span>
							<span>{vote_average}</span>
						</p>
					)}
				</MainDetails>
			</DetailsMainWrapper>
		</StyledDetailsMain>
	);
};

const mapStateToProps = (state) => {
	return {
		mainDetails: state.details.mainDetails,
		fetchingMainDetails: state.details.fetchingMainDetails,
		favoriteMovies: selectFavoriteMovies(state),
		favoriteTvShows: selectFavoriteTvShows(state),
		currentUser: state.currentUser.currentUser,
		mainDetailsError: state.details.mainDetailsError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMainDetails: (url) => {
			dispatch(fetchMainDetails(url));
		},
		toggleNotification: (notificationMessage, notificationType) => {
			dispatch(toggleNotification(notificationMessage, notificationType));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsMain);
