import React from "react";

import { InputGroup, Label, FormError, Input } from "./custom-input.styles";

class CustomInput extends React.Component {
	render() {
		const {
			label,
			type,
			handleInputChange,
			value,
			name,
			errorMsg,
			inputRef,
		} = this.props;

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
	}
}

export default CustomInput;
