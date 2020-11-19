import React from "react";

import { InputGroup, Label } from "./custom-input.styles";

const CustomInput = ({ label, type, handleInputChange, value, name }) => {
	return (
		<InputGroup>
			<input
				type={type}
				required
				onChange={handleInputChange}
				value={value}
				name={name}
			/>
			<Label value={value}>{label}</Label>
		</InputGroup>
	);
};

export default CustomInput;
