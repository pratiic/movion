import React from "react";
import { connect } from "react-redux";

import {
	SearchInputForm,
	SearchInputGroup,
	SearchInput,
	SearchOptionDisplay,
	StyledChevronDownIcon,
	StyledChevronUpIcon,
	SearchOptions,
	SearchOption,
	SearchInputControls,
	StyledSearchIcon,
	StyledDeleteIcon,
} from "./search-bar.styles";

import { toggleSearchMode } from "../../redux/search-mode/search-mode.actions";

class SearchBar extends React.Component {
	constructor() {
		super();

		this.state = {
			searchValue: "",
			showSearchOptions: false,
			searchBarFocused: false,
		};

		this.searchInputRef = React.createRef();
	}

	handleInputChange = (event) => {
		this.setState({ searchValue: event.target.value });
	};

	handleInputFocus = () => {
		this.setState({ searchBarFocused: true });
	};

	handleInputBlur = () => {
		this.setState({ searchBarFocused: false });
	};

	handleDeleteIconClick = () => {
		this.setState({ searchValue: "" });
		this.searchInputRef.current.focus();
	};

	toggleSearchOptions = () => {
		this.setState((prevState) => {
			return {
				showSearchOptions: !prevState.showSearchOptions,
			};
		});
	};

	handleSearchOptionClick = (mode) => {
		const { toggleSearchMode } = this.props;

		if (mode === "movies") {
			toggleSearchMode("movies");
		} else {
			toggleSearchMode("tv shows");
		}

		this.toggleSearchOptions();
	};

	render() {
		const { searchMode, showOnSmallScreens, toggleSearchBar } = this.props;

		return (
			<SearchInputForm showOnSmallScreens={showOnSmallScreens}>
				<SearchInputGroup focused={this.state.searchBarFocused}>
					<div>
						<SearchOptionDisplay onClick={this.toggleSearchOptions}>
							{searchMode} <StyledChevronDownIcon />
						</SearchOptionDisplay>
						{this.state.showSearchOptions ? (
							<SearchOptions>
								<SearchOption
									onClick={() => {
										this.handleSearchOptionClick("movies");
									}}
								>
									movies
								</SearchOption>
								<SearchOption
									onClick={() => {
										this.handleSearchOptionClick(
											"tv shows"
										);
									}}
								>
									tv shows
								</SearchOption>
							</SearchOptions>
						) : null}
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
						<StyledDeleteIcon
							onClick={this.handleDeleteIconClick}
						/>
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
							<StyledSearchIcon />
						</button>
						<StyledChevronUpIcon onClick={toggleSearchBar} />
					</SearchInputControls>
				</SearchInputGroup>
			</SearchInputForm>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		searchMode: state.searchMode.searchMode,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSearchMode: (newSearchMode) => {
			dispatch(toggleSearchMode(newSearchMode));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
