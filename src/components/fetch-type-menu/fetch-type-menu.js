import React, { useState } from "react";
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

import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";

const FetchTypeMenu = (props) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [fetchTypes, setFetchTypes] = useState([
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
	]);

	const getNewFetchType = (newFetchType) => {
		const {
			mode,
			moviesFetchType,
			changeMoviesFetchType,
			fetchMoviesStart,
			tvShowsFetchType,
			changeTvShowsFetchType,
			fetchTvShowsStart,
		} = props;

		if (mode === "movies" && moviesFetchType !== newFetchType) {
			changeMoviesFetchType(newFetchType);
			fetchMoviesStart();
		}

		if (mode === "tv shows" && tvShowsFetchType !== newFetchType) {
			changeTvShowsFetchType(newFetchType);
			fetchTvShowsStart();
		}
	};

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const { fetchType, mode } = props;

	return (
		<FetchTypeMenuWrapper>
			<StyledFetchTypeMenu>
				<FetchTypeOptionDisplay onClick={toggleDropdown}>
					{fetchType}{" "}
					<StyledChevronDownIcon
						$noColor
						$rotateIconUp={showDropdown}
						$smaller
					/>
				</FetchTypeOptionDisplay>
				<Dropdown show={showDropdown} forComponent="movieAndTv">
					{fetchTypes.map((fetchType) => {
						if (fetchType[mode]) {
							return (
								<DropdownItem
									value={fetchType.value}
									key={fetchType.value}
									getNewFetchType={getNewFetchType}
									toggleDropdown={toggleDropdown}
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
};

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
