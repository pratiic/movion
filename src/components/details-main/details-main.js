import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { StyledDetailsMain, DetailsMainWrapper } from "./details-main.styles";

import { fetchMainDetails } from "../../redux/api/api.actions";
import { toggleNotification } from "../../redux/notification/notification.actions";
import { getURL, apiInfo } from "../../redux/api/api.info";
import {
	selectFavoriteMovies,
	selectFavoriteTvShows,
} from "../../redux/favorites/favorites.selectors";

import { firestore } from "../../firebase/firebase.utils";

import {
	renderReleaseDate,
	getWithCommas,
	getContentType,
} from "../../utils/utils.components";
// import {
// 	addToFavorites,
// 	showAddedToFavoritesNotification,
// } from "../../utils/utils.favorites";

import Spinner from "../spinner/spinner";
import DetailsControl from "../details-control/details-control";

const DetailsMain = ({
	mainDetails,
	fetchingMainDetails,
	fetchMainDetails,
}) => {
	const { id, type } = useParams();

	const startAsyncOp = () => {
		const mode = type;
		const detailsURL = getURL(mode, null, "details", null, id);
		fetchMainDetails(detailsURL);
	};

	useEffect(() => {
		if (mainDetails) {
			document.title = mainDetails.title || mainDetails.name;
		}
	}, [mainDetails]);

	useEffect(() => {
		startAsyncOp();
		// eslint-disable-next-line
	}, [id]);

	if (!mainDetails || (mainDetails && fetchingMainDetails)) {
		return <Spinner height="95vh" />;
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
			vote_average,
		} = mainDetails;

		return (
			<StyledDetailsMain
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
									<span className="genre" key={genre.id}>
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

						{created_by ? (
							<p className="created-by">
								<span className="muted margin-rt-small margin-bt-small">
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
									{getWithCommas(budget) || "not available"}
								</span>
							</p>
						) : null}

						{revenue ? (
							<p className="revenue margin-bt-small">
								<span className="muted margin-rt-small">
									{"Revenue"}{" "}
								</span>
								<span>
									{getWithCommas(revenue) || "not available"}
								</span>
							</p>
						) : null}

						{vote_average ? (
							<p className="average-rating">
								<span className="muted margin-rt-small">
									Average rating
								</span>
								<span>{vote_average}</span>
							</p>
						) : null}
					</div>
				</DetailsMainWrapper>
			</StyledDetailsMain>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		mainDetails: state.details.mainDetails,
		fetchingMainDetails: state.details.fetchingMainDetails,
		favoriteMovies: selectFavoriteMovies(state),
		favoriteTvShows: selectFavoriteTvShows(state),
		currentUser: state.currentUser.currentUser,
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
