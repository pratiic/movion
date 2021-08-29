import React, { useRef, useState, useEffect } from "react";

import { StyledForm, Input } from "./user-search.styles";
import { StyledSearchIcon } from "../../styles/styles.icons";

const UserSearch = ({ searchActive, submitHandler }) => {
	const [searchValue, setSearchValue] = useState("");

	const inputRef = useRef();

	useEffect(() => {
		if (!searchActive) {
			setSearchValue("");
		}
	}, [searchActive]);

	const handleSearchIconClick = () => {
		inputRef.current.focus();
	};

	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (submitHandler) {
			if (!searchValue) {
				return;
			}

			submitHandler(searchValue);
		}
	};

	return (
		<StyledForm onSubmit={handleFormSubmit}>
			<StyledSearchIcon onClick={handleSearchIconClick} $smaller />
			<Input
				type="text"
				placeholder="search by name or email"
				ref={inputRef}
				onChange={handleInputChange}
				value={searchValue}
			/>
		</StyledForm>
	);
};

export default UserSearch;
