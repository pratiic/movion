import React from "react";
import { connect } from "react-redux";

import { StyledTvShowsPage } from "./tv-shows.styles";

import { StyledTitle } from "../../styles/styles.generic";

import { getURL } from "../../redux/api/api.info";
import { fetchThePopulars } from "../../redux/api/api.actions";
import { selectPopularTvShows } from "../../redux/tv-shows/tv-shows.selectors";

import { renderGenericButton } from "../../components/utils/utils.components";

import Featured from "../../components/featured/featured";
import MainCardsList from "../../components/main-cards-list/main-cards-list";
import GenericButton from "../../components/generic-button/generic-button";
import Spinner from "../../components/spinner/spinner";

class TvShowsPage extends React.Component {
	componentDidMount() {
		const { fetchThePopulars, popularTvShowsFetchPage } = this.props;

		fetchThePopulars(
			getURL("tv", popularTvShowsFetchPage, "popular"),
			"tv shows"
		);
	}

	render() {
		const {
			popularTvShows,
			fetchingMorePopularTvShows,
			popularTvShowsFetchPage,
			popularTvShowsTotalPages,
		} = this.props;

		return (
			<StyledTvShowsPage>
				<Featured featured={popularTvShows[0]} />
				{popularTvShows.length > 0 ? (
					<React.Fragment>
						<StyledTitle>popular tv shows</StyledTitle>
						<MainCardsList list={popularTvShows} />
					</React.Fragment>
				) : (
					<Spinner />
				)}

				{renderGenericButton(
					popularTvShowsFetchPage,
					popularTvShowsTotalPages,
					<Spinner height="3.5rem" />,
					<GenericButton
						value="load more"
						func="load more tv shows"
						bigger
						marginbt
						centered
					/>,
					fetchingMorePopularTvShows
				)}
			</StyledTvShowsPage>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		popularTvShowsFetchPage: state.tvShows.popularTvShowsFetchPage,
		popularTvShows: selectPopularTvShows(state),
		fetchingMorePopularTvShows: state.tvShows.fetchingMorePopularTvShows,
		popularTvShowsTotalPages: state.tvShows.popularTvShowsTotalPages,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchThePopulars: (url, mode) => {
			dispatch(fetchThePopulars(url, mode));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowsPage);
