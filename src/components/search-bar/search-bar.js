import React from "react";
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

import { toggleDropdown } from "../utils/utils.components";

import Dropdown from "../dropdown/dropdown";
import DropdownItem from "../dropdown-item/dropdown-item";

class Searchbar extends React.Component {
	constructor() {
		super();

		this.state = {
			searchValue: "",
			SearchbarFocused: false,
			showDropdown: false,
		};

		this.searchInputRef = React.createRef();

		this.toggleDropdown = toggleDropdown.bind(this);
	}

	handleInputChange = (event) => {
		this.setState({ searchValue: event.target.value });
	};

	handleInputFocus = () => {
		this.setState({ SearchbarFocused: true });
	};

	handleInputBlur = () => {
		this.setState({ SearchbarFocused: false });
	};

	handleDeleteIconClick = () => {
		this.searchInputRef.current.focus();
		this.setState({ searchValue: "" });
	};

	handleSearchOptionClick = (newSearchMode) => {
		const { toggleSearchMode } = this.props;

		toggleSearchMode(newSearchMode);
	};

	handleFormSubmit = (event) => {
		const {
			toggleSearchbar,
			showSearchbarOnSmallScreens,
			history,
		} = this.props;

		event.preventDefault();

		this.searchInputRef.current.blur();

		if (this.state.searchValue !== "") {
			history.push(`/search/${this.state.searchValue}`);
		}

		if (showSearchbarOnSmallScreens) {
			toggleSearchbar();
		}
	};

	setSearchMode = () => {
		const { location, toggleSearchMode } = this.props;
		const pathname = location.pathname.toLowerCase();

		if (pathname.includes("movies") || pathname.includes("movie")) {
			toggleSearchMode("movies");
		}

		if (pathname.includes("tvshows") || pathname.includes("tv")) {
			toggleSearchMode("tv shows");
		}
	};

	componentDidUpdate(prevProps) {
		if (prevProps.location !== this.props.location) {
			this.setSearchMode();
		}
	}

	componentDidMount() {
		const { getSearchInputRef } = this.props;

		this.setSearchMode();

		getSearchInputRef(this.searchInputRef);
	}

	render() {
		const {
			searchMode,
			showSearchbarOnSmallScreens,
			toggleSearchbar,
		} = this.props;

		return (
			<SearchInputForm
				showSearchbarOnSmallScreens={showSearchbarOnSmallScreens}
				onSubmit={this.handleFormSubmit}
			>
				<SearchInputGroup focused={this.state.SearchbarFocused}>
					<div>
						<SearchOptionDisplay onClick={this.toggleDropdown}>
							{searchMode}{" "}
							<StyledChevronDownIcon
								$smaller
								$rotateIconUp={this.state.showDropdown}
							/>
						</SearchOptionDisplay>
						<Dropdown
							forComponent="searchbar"
							show={this.state.showDropdown}
						>
							<DropdownItem
								value="movies"
								func="toggle search mode"
								toggleDropdown={this.toggleDropdown}
							/>
							<DropdownItem
								value="tv shows"
								func="toggle search mode"
								toggleDropdown={this.toggleDropdown}
							/>
						</Dropdown>
					</div>

					<SearchInput
						type="text"
						placeholder="search..."
						value={this.state.searchValue}
						onChange={this.handleInputChange}
						ref={this.searchInputRef}
						onFocus={this.handleInputFocus}
						onBlur={this.handleInputBlur}
					/>

					<SearchInputControls>
						{this.state.searchValue ? (
							<StyledDeleteIcon
								$searchbarControl
								onClick={this.handleDeleteIconClick}
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
	}
}

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
