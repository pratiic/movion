import React from "react";

import {
	SearchInputGroup,
	SearchInput,
	SearchInputControls,
	StyledSearchIcon,
	StyledDeleteIcon,
} from "./search-bar.styles";

class SearchBar extends React.Component {
	constructor() {
		super();

		this.state = {
			searchValue: "",
		};

		this.searchInputRef = React.createRef();
	}

	handleInputChange = (event) => {
		this.setState({ searchValue: event.target.value });
	};

	handleDeleteIconClick = () => {
		this.setState({ searchValue: "" });
		this.searchInputRef.current.focus();
	};

	render() {
		return (
			<form>
				<SearchInputGroup>
					<SearchInput
						type="text"
						placeholder="Search for movies..."
						value={this.state.searchValue}
						onChange={this.handleInputChange}
						ref={this.searchInputRef}
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
					</SearchInputControls>
				</SearchInputGroup>
			</form>
		);
	}
}

export default SearchBar;
