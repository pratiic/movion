import React from "react";
import { connect } from "react-redux";

import {
	SearchInputForm,
	SearchInputGroup,
	SearchInput,
	SearchOptionDisplay,
	StyledChevronDownIcon,
	StyledArrowUpIcon,
	SearchOptions,
	SearchOption,
	SearchInputControls,
	StyledSearchIcon,
	StyledDeleteIcon,
} from "./search-bar.styles";

import {
	toggleSearchbar,
	toggleSearchMode,
} from "../../redux/searchbar/searchbar.actions";

class Searchbar extends React.Component {
	constructor() {
		super();

		this.state = {
			searchValue: "",
			showSearchOptions: false,
			SearchbarFocused: false,
		};

		this.searchInputRef = React.createRef();
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

	handleFormSubmit = (event) => {
		const { toggleSearchbar } = this.props;

		event.preventDefault();
		this.setState({ searchValue: "" });
		toggleSearchbar();
	};

	// componentDidUpdate() {
	// 	const { showOnSmallScreens } = this.props;

	// 	if (showOnSmallScreens) {
	// 		this.searchInputRef.current.focus();
	// 	}
	// }

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
						<SearchOptionDisplay onClick={this.toggleSearchOptions}>
							{searchMode}{" "}
							<StyledChevronDownIcon
								$rotateUp={this.state.showSearchOptions}
							/>
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
						{this.state.searchValue ? (
							<StyledDeleteIcon
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
							<StyledSearchIcon />
						</button>
						<StyledArrowUpIcon onClick={toggleSearchbar} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
