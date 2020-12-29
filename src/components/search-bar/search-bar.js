import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
	SearchInputForm,
	SearchInputGroup,
	SearchInput,
	SearchOptionDisplay,
	SearchInputControls,
} from "./search-bar.styles";
import {
	StyledChevronDownIcon,
	StyledArrowUpIcon,
	StyledSearchIcon,
	StyledDeleteIcon,
} from "../../styles/styles.icons";

import {
	toggleSearchbar,
	toggleSearchMode,
} from "../../redux/searchbar/searchbar.actions";

import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";

const Searchbar = (props) => {
	const [searchValue, setSearchValue] = useState("");
	const [searchbarFocused, setSearchbarFocused] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	const searchInputRef = useRef(null);

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleInputFocus = () => {
		setSearchbarFocused(true);
	};

	const handleInputBlur = () => {
		setSearchbarFocused(false);
	};

	const handleDeleteIconClick = () => {
		searchInputRef.current.focus();
		setSearchValue("");
	};

	const handleSearchOptionClick = (newSearchMode) => {
		const { toggleSearchMode } = props;

		toggleSearchMode(newSearchMode);
	};

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const handleFormSubmit = (event) => {
		const { toggleSearchbar, showSearchbarOnSmallScreens, history } = props;

		event.preventDefault();

		searchInputRef.current.blur();

		if (searchValue !== "") {
			history.push(`/search/${searchValue}`);
		}

		if (showSearchbarOnSmallScreens) {
			toggleSearchbar();
		}
	};

	const setSearchMode = () => {
		const { location, toggleSearchMode } = props;
		const pathname = location.pathname.toLowerCase();

		if (pathname.includes("movies") || pathname.includes("movie")) {
			toggleSearchMode("movies");
		}

		if (pathname.includes("tvshows") || pathname.includes("tv")) {
			toggleSearchMode("tv shows");
		}
	};

	useEffect(() => {
		const { getSearchInputRef } = props;

		setSearchMode();

		getSearchInputRef(searchInputRef);
	}, []);

	useEffect(() => {
		setSearchMode();
	}, [props.location]);

	const { searchMode, showSearchbarOnSmallScreens, toggleSearchbar } = props;

	return (
		<SearchInputForm
			showSearchbarOnSmallScreens={showSearchbarOnSmallScreens}
			onSubmit={handleFormSubmit}
		>
			<SearchInputGroup focused={searchbarFocused}>
				<div>
					<SearchOptionDisplay onClick={toggleDropdown}>
						{searchMode}{" "}
						<StyledChevronDownIcon
							$smaller
							$rotateIconUp={showDropdown}
						/>
					</SearchOptionDisplay>
					<Dropdown forComponent="searchbar" show={showDropdown}>
						<DropdownItem
							value="movies"
							func="toggle search mode"
							toggleDropdown={toggleDropdown}
						/>
						<DropdownItem
							value="tv shows"
							func="toggle search mode"
							toggleDropdown={toggleDropdown}
						/>
					</Dropdown>
				</div>

				<SearchInput
					type="text"
					placeholder="search..."
					value={searchValue}
					onChange={handleInputChange}
					ref={searchInputRef}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
				/>

				<SearchInputControls>
					{searchValue ? (
						<StyledDeleteIcon
							$searchbarControl
							onClick={handleDeleteIconClick}
						/>
					) : null}
					<button
						type="submit"
						style={{
							backgroundColor: "transparent",
							border: "none",
							outline: "none",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<StyledSearchIcon $searchbarControl />
					</button>
					<StyledArrowUpIcon
						$searchbarControl
						$searchbarToggler
						onClick={toggleSearchbar}
					/>
				</SearchInputControls>
			</SearchInputGroup>
		</SearchInputForm>
	);
};

const mapStateToProps = (state) => {
	return {
		searchMode: state.searchbar.searchMode,
		showSearchbarOnSmallScreens:
			state.searchbar.showSearchbarOnSmallScreens,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSearchMode: (newSearchMode) => {
			dispatch(toggleSearchMode(newSearchMode));
		},
		toggleSearchbar: () => {
			dispatch(toggleSearchbar());
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(Searchbar)
);
