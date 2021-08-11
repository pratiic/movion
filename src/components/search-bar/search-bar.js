import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import {
	SearchInputForm,
	SearchInputGroup,
	SearchInput,
	SearchOptionDisplay,
	SearchInputControls,
	SearchOverlay,
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

const Searchbar = ({
	toggleSearchbar,
	showSearchbarOnSmallScreens,
	toggleSearchMode,
	searchMode,
	getSearchInputRef,
}) => {
	const [searchValue, setSearchValue] = useState("");
	const [searchbarFocused, setSearchbarFocused] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	const searchInputRef = useRef(null);

	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		setSearchMode();

		getSearchInputRef(searchInputRef);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		setSearchMode();
		// eslint-disable-next-line
	}, [location]);

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

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		searchInputRef.current.blur();

		if (searchValue) {
			history.push(`/search/${searchValue}`);

			if (showSearchbarOnSmallScreens) {
				toggleSearchbar();
			}
		}
	};

	const setSearchMode = () => {
		const pathname = location.pathname.toLowerCase();

		if (pathname.includes("movies") || pathname.includes("movie")) {
			toggleSearchMode("movies");
		}

		if (pathname.includes("tvshows") || pathname.includes("tv")) {
			toggleSearchMode("tv shows");
		}
	};

	const handleOverlayClick = (event) => {
		if (event.target.id === "searchbar-overlay") {
			toggleSearchbar();
		}
	};

	return (
		<SearchOverlay
			showSearchbarOnSmallScreens={showSearchbarOnSmallScreens}
			onClick={handleOverlayClick}
			id="searchbar-overlay"
		>
			<SearchInputForm onSubmit={handleFormSubmit} id="search-bar-form">
				<SearchInputGroup focused={searchbarFocused}>
					<div>
						<SearchOptionDisplay onClick={toggleDropdown}>
							{searchMode}
							<StyledChevronDownIcon
								$smaller
								$rotateIconUp={showDropdown}
							/>
						</SearchOptionDisplay>
						<Dropdown
							forComponent="searchbar"
							show={showDropdown}
							indicator="center"
						>
							<DropdownItem
								value="movies"
								func="toggle search mode"
								toggleDropdown={toggleDropdown}
								clickHandler={() => {
									toggleSearchMode("movies");
								}}
							>
								movies
							</DropdownItem>
							<DropdownItem
								value="tv shows"
								func="toggle search mode"
								toggleDropdown={toggleDropdown}
								clickHandler={() => {
									toggleSearchMode("tv shows");
								}}
							>
								tv shows
							</DropdownItem>
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
		</SearchOverlay>
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

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
