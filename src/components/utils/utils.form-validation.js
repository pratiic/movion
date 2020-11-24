export const getEmptyFieldNames = (...fields) => {
	let emptyFieldNames = [];
	let nonEmptyFieldNames = [];

	fields.forEach((field) => {
		if (field.value.length === 0) {
			emptyFieldNames = [...emptyFieldNames, field.name];
		} else {
			nonEmptyFieldNames = [...nonEmptyFieldNames, field.name];
		}
	});

	return [emptyFieldNames, nonEmptyFieldNames];
};

export function returnFieldObjects() {
	const fieldObjects = this.state.fieldValueNamesToValidate.map(
		(fieldValueName) => {
			return {
				name: fieldValueName,
				value: this.state[fieldValueName],
			};
		}
	);

	return fieldObjects;
}

export function setFieldErrorMessage(fieldNames, message) {
	fieldNames.forEach((fieldName) => {
		this.setState({
			[`${fieldName}ErrorMsg`]: message,
		});
	});
}

export function clearNonEmptyFieldErrorMessage(nonEmptyFieldNames) {
	nonEmptyFieldNames.forEach((nonEmptyFieldName) => {
		this.setState({
			[`${nonEmptyFieldName}ErrorMsg`]: "",
		});
	});
}

export const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(email.toLowerCase())) {
		return true;
	}

	return false;
};

export function clearAllFields() {
	this.state.allFieldValueNames.forEach((fieldValueName) => {
		this.setState({
			[fieldValueName]: "",
		});
	});
}
