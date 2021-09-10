import React, { useEffect } from "react";
import { connect } from "react-redux";

import { StyledTvShowsPage } from "./tv-shows.styles";
import { StyledTitle } from "../../styles/styles.title";
import { StyledMessage } from "../../styles/styles.generic";

import { getURL } from "../../redux/api/api.info";
import { fetchMoviesOrTvShows } from "../../redux/api/api.actions";
import { selectTvShows } from "../../redux/tv-shows/tv-shows.selectors";

import {
	incrementCurrentTvShowsFetchPage,
	fetchMoreTvShowsStart,
} from "../../redux/tv-shows/tv-shows.actions";

import { renderGenericButton } from "../../utils/utils.components";
import { capitalizeFirstLetter } from "../../utils/utils.strings";

import Featured from "../../components/featured/featured";
import MainCardsList from "../../components/main-cards-list/main-cards-list";
import GenericButton from "../../components/generic-button/generic-button";
import Spinner from "../../components/spinner/spinner";
import FetchTypeMenu from "../../components/fetch-type-menu/fetch-type-menu";

const TvShowsPage = ({
	tvShows,
	fetchingMoreTvShows,
	fetchMoreTvShowsStart,
	currentTvShowsFetchPage,
	tvShowsTotalPages,
	fetchMoviesOrTvShows,
	incrementCurrentTvShowsFetchPage,
	tvShowsFetchType,
	fetchingTvShows,
	tvShowsError,
}) => {
	useEffect(() => {
		document.title = capitalizeFirstLetter(`${tvShowsFetchType} tv shows`);
	}, [tvShowsFetchType]);

	useEffect(() => {
		fetchTvShows();
		// eslint-disable-next-line
	}, [tvShowsFetchType]);

	const fetchTvShows = () => {
		const url = getURL("tv", currentTvShowsFetchPage, tvShowsFetchType);

		fetchMoviesOrTvShows(url, "tv shows");
	};

	const handleButtonClick = () => {
		fetchMoreTvShowsStart();
		fetchMoviesOrTvShows(
			getURL("tv", currentTvShowsFetchPage + 1, tvShowsFetchType),
			"tv shows",
			true
		);
		incrementCurrentTvShowsFetchPage();
	};

	if (tvShowsError) {
		return <StyledMessage marginTop="7rem">{tvShowsError}</StyledMessage>;
	}

	return (
		<StyledTvShowsPage>
			{fetchingTvShows ? (
				<Spinner
					height="105vh"
					message={`loading ${tvShowsFetchType} tv shows`}
				/>
			) : (
				<React.Fragment>
					<Featured featured={tvShows[0]} />
					<React.Fragment>
						<FetchTypeMenu
							fetchType={tvShowsFetchType}
							mode="tv shows"
						/>
						<StyledTitle>{tvShowsFetchType} tv shows</StyledTitle>
						<MainCardsList list={tvShows} />
					</React.Fragment>

					{renderGenericButton(
						currentTvShowsFetchPage,
						tvShowsTotalPages,
						<Spinner height="5rem" />,
						<GenericButton
							size="bigger"
							marginbt
							justify="center"
							handleButtonClick={handleButtonClick}
						>
							load more
						</GenericButton>,
						fetchingMoreTvShows
					)}
				</React.Fragment>
			)}
		</StyledTvShowsPage>
	);
};

const mapStateToProps = (state) => {
	return {
		currentTvShowsFetchPage: state.tvShows.currentTvShowsFetchPage,
		tvShows: selectTvShows(state),
		fetchingMoreTvShows: state.tvShows.fetchingMoreTvShows,
		tvShowsTotalPages: state.tvShows.tvShowsTotalPages,
		tvShowsFetchType: state.tvShows.tvShowsFetchType,
		fetchingTvShows: state.tvShows.fetchingTvShows,
		tvShowsError: state.tvShows.tvShowsError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMoviesOrTvShows: (url, mode, fetchingMore) => {
			dispatch(fetchMoviesOrTvShows(url, mode, fetchingMore));
		},
		incrementCurrentTvShowsFetchPage: () => {
			dispatch(incrementCurrentTvShowsFetchPage());
		},
		fetchMoreTvShowsStart: () => {
			dispatch(fetchMoreTvShowsStart());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowsPage);
