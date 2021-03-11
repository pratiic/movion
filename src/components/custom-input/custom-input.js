import React from "react";

import { InputGroup, Label, FormError, Input } from "./custom-input.styles";

const CustomInput = ({
	label,
	type,
	handleInputChange,
	value,
	name,
	errorMsg,
	inputRef,
}) => {
	return (
		<InputGroup>
			<Input
				type={type}
				onChange={handleInputChange}
				value={value}
				name={name}
				errorMsg={errorMsg}
				inputValue={value}
				ref={inputRef}
			/>
			<Label value={value}>{label}</Label>
			<FormError>{errorMsg && errorMsg}</FormError>
		</InputGroup>
	);
};

export default CustomInput;
