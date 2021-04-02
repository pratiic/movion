import React, { useRef } from "react";

import { StyledForm, Input } from "./user-search.styles";
import { StyledSearchIcon } from "../../styles/styles.icons";

const UserSearch = ({ inputChangeHandler, searchValue }) => {
	const inputRef = useRef();

	const handleSearchIconClick = () => {
		inputRef.current.focus();
	};

	const handleInputChange = (event) => {
		inputChangeHandler(event.target.value);
	};

	return (
		<StyledForm>
			<StyledSearchIcon onClick={handleSearchIconClick} $smaller />
			<Input
				type="text"
				placeholder="search by name or email"
				ref={inputRef}
				onChange={handleInputChange}
				value={searchValue}
				// ref={inputRef}
				// value={searchValue}
			/>
		</StyledForm>
	);
};

export default UserSearch;
