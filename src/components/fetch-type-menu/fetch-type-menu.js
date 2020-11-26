import React from "react";
import { connect } from "react-redux";

import {
	FetchTypeMenuWrapper,
	StyledFetchTypeMenu,
	FetchTypeOptionDisplay,
} from "./fetch-type-menu.styles";
import { StyledChevronDownIcon } from "../../styles/styles.icons";

import {
	changeMoviesFetchType,
	fetchMoviesStart,
} from "../../redux/movies/movies.actions";
import {
	changeTvShowsFetchType,
	fetchTvShowsStart,
} from "../../redux/tv-shows/tv-shows.actions";

import { toggleDropdown } from "../utils/utils.components";

import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";

class FetchTypeMenu extends React.Component {
	constructor() {
		super();

		this.state = {
			showDropdown: false,

			fetchTypes: [
				{
					value: "popular",
					movies: true,
					"tv shows": true,
				},
				{
					value: "now playing",
					movies: true,
					"tv shows": false,
				},
				{
					value: "upcoming",
					movies: true,
					"tv shows": false,
				},
				{
					value: "on the air",
					movies: false,
					"tv shows": true,
				},
				{
					value: "top rated",
					movies: true,
					"tv shows": true,
				},
			],
		};

		this.toggleDropdown = toggleDropdown.bind(this);
	}

	getNewFetchType = (newFetchType) => {
		const {
			mode,
			moviesFetchType,
			changeMoviesFetchType,
			fetchMoviesStart,
			tvShowsFetchType,
			changeTvShowsFetchType,
			fetchTvShowsStart,
		} = this.props;

		if (mode === "movies" && moviesFetchType !== newFetchType) {
			changeMoviesFetchType(newFetchType);
			fetchMoviesStart();
		}

		if (mode === "tv shows" && tvShowsFetchType !== newFetchType) {
			changeTvShowsFetchType(newFetchType);
			fetchTvShowsStart();
		}
	};

	render() {
		const { fetchType, mode } = this.props;

		return (
			<FetchTypeMenuWrapper>
				<StyledFetchTypeMenu>
					<FetchTypeOptionDisplay onClick={this.toggleDropdown}>
						{fetchType}{" "}
						<StyledChevronDownIcon
							$noColor
							$rotateIconUp={this.state.showDropdown}
							$smaller
						/>
					</FetchTypeOptionDisplay>
					<Dropdown
						show={this.state.showDropdown}
						forComponent="movieAndTv"
					>
						{this.state.fetchTypes.map((fetchType) => {
							if (fetchType[mode]) {
								return (
									<DropdownItem
										value={fetchType.value}
										key={fetchType.value}
										getNewFetchType={this.getNewFetchType}
										toggleDropdown={this.toggleDropdown}
										func="change fetch type"
									/>
								);
							} else {
								return null;
							}
						})}
					</Dropdown>
				</StyledFetchTypeMenu>
			</FetchTypeMenuWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		moviesFetchType: state.movies.moviesFetchType,
		tvShowsFetchType: state.tvShows.tvShowsFetchType,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeMoviesFetchType: (newFetchType) => {
			dispatch(changeMoviesFetchType(newFetchType));
		},
		changeTvShowsFetchType: (newFetchType) => {
			dispatch(changeTvShowsFetchType(newFetchType));
		},
		fetchMoviesStart: () => {
			dispatch(fetchMoviesStart());
		},
		fetchTvShowsStart: () => {
			dispatch(fetchTvShowsStart());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchTypeMenu);
