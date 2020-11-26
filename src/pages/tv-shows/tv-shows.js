import React from "react";
import { connect } from "react-redux";

import { StyledTvShowsPage } from "./tv-shows.styles";
import { StyledTitle } from "../../styles/styles.generic";

import { getURL } from "../../redux/api/api.info";
import { fetchMoviesOrTvShows } from "../../redux/api/api.actions";
import { selectTvShows } from "../../redux/tv-shows/tv-shows.selectors";

import {
	incrementCurrentTvShowsFetchPage,
	fetchMoreTvShowsStart,
} from "../../redux/tv-shows/tv-shows.actions";

import { renderGenericButton } from "../../components/utils/utils.components";

import Featured from "../../components/featured/featured";
import MainCardsList from "../../components/main-cards-list/main-cards-list";
import GenericButton from "../../components/generic-button/generic-button";
import Spinner from "../../components/spinner/spinner";
import FetchTypeMenu from "../../components/fetch-type-menu/fetch-type-menu";

class TvShowsPage extends React.Component {
	handleButtonClick = () => {
		const {
			fetchMoreTvShowsStart,
			currentTvShowsFetchPage,
			fetchMoviesOrTvShows,
			incrementCurrentTvShowsFetchPage,
			tvShowsFetchType,
		} = this.props;

		fetchMoreTvShowsStart();
		fetchMoviesOrTvShows(
			getURL("tv", currentTvShowsFetchPage + 1, tvShowsFetchType),
			"tv shows",
			true
		);
		incrementCurrentTvShowsFetchPage();
	};

	startAsyncOp = () => {
		const {
			fetchMoviesOrTvShows,
			currentTvShowsFetchPage,
			tvShowsFetchType,
		} = this.props;

		const url = getURL("tv", currentTvShowsFetchPage, tvShowsFetchType);

		fetchMoviesOrTvShows(url, "tv shows");
	};

	componentDidMount() {
		this.startAsyncOp();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.tvShowsFetchType !== this.props.tvShowsFetchType) {
			this.startAsyncOp();
		}
	}

	render() {
		const {
			tvShows,
			fetchingMoreTvShows,
			currentTvShowsFetchPage,
			tvShowsTotalPages,
			tvShowsFetchType,
			fetchingTvShows,
		} = this.props;

		return (
			<StyledTvShowsPage>
				{fetchingTvShows ? (
					<Spinner height="105vh" />
				) : (
					<React.Fragment>
						<Featured featured={tvShows[0]} />
						<React.Fragment>
							<FetchTypeMenu
								fetchType={tvShowsFetchType}
								mode="tv shows"
							/>
							<StyledTitle>
								{tvShowsFetchType} tv shows
							</StyledTitle>
							<MainCardsList list={tvShows} />
						</React.Fragment>

						{renderGenericButton(
							currentTvShowsFetchPage,
							tvShowsTotalPages,
							<Spinner height="3.5rem" />,
							<GenericButton
								value="load more"
								size="bigger"
								marginbt
								justify="center"
								handleButtonClick={this.handleButtonClick}
							/>,
							fetchingMoreTvShows
						)}
					</React.Fragment>
				)}
			</StyledTvShowsPage>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentTvShowsFetchPage: state.tvShows.currentTvShowsFetchPage,
		tvShows: selectTvShows(state),
		fetchingMoreTvShows: state.tvShows.fetchingMoreTvShows,
		tvShowsTotalPages: state.tvShows.tvShowsTotalPages,
		tvShowsFetchType: state.tvShows.tvShowsFetchType,
		fetchingTvShows: state.tvShows.fetchingTvShows,
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
