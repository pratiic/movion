import React, { createRef } from "react";

import { StyledSignInPage, ButtonCollection } from "./sign-in.styles";

import { cssColors } from "../../styles/styles.variables";

import {
	StyledTitle,
	StyledSubtitle,
	StyledFormLink,
} from "../../styles/styles.generic";

import {
	getEmptyFieldNames,
	returnFieldObjects,
	setFieldErrorMessage,
	clearNonEmptyFieldErrorMessage,
	validateEmail,
	clearAllFields,
} from "../../components/utils/utils.components";

import CustomInput from "../../components/custom-input/custom-input";
import GenericButton from "../../components/generic-button/generic-button";

class SignInPage extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			emailErrorMsg: "",
			password: "",
			passwordErrorMsg: "",

			fieldValueNamesToValidate: ["email", "password"],
			allFieldValueNames: [
				"email",
				"emailErrorMsg",
				"password",
				"passwordErrorMsg",
			],
		};

		this.inputRef = createRef();

		this.returnFieldObjects = returnFieldObjects.bind(this);
		this.setFieldErrorMessage = setFieldErrorMessage.bind(this);
		this.clearNonEmptyFieldErrorMessage = clearNonEmptyFieldErrorMessage.bind(
			this
		);
		this.clearAllFields = clearAllFields.bind(this);
	}

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleFormSubmit = (event) => {
		event.preventDefault();

		const fieldObjects = this.returnFieldObjects();

		const [emptyFieldNames, nonEmptyFieldNames] = getEmptyFieldNames(
			...fieldObjects
		);

		this.setFieldErrorMessage(
			emptyFieldNames,
			"this field cannot be empty"
		);
		this.clearNonEmptyFieldErrorMessage(nonEmptyFieldNames);

		if (emptyFieldNames.length === 0) {
			const validEmail = validateEmail(this.state.email);

			if (!validEmail) {
				this.setFieldErrorMessage(["email"], "this email is not valid");
			} else {
				this.clearAllFields();
			}
		}
	};

	componentDidMount() {
		this.inputRef.current.focus();
	}

	render() {
		return (
			<StyledSignInPage>
				<StyledTitle marginbt="0rem">sign in to movion</StyledTitle>
				<StyledSubtitle>
					Do not have an account?{" "}
					<StyledFormLink to="/signup">sign up here</StyledFormLink>
				</StyledSubtitle>

				<form onSubmit={this.handleFormSubmit}>
					<CustomInput
						label="email"
						type="email"
						name="email"
						handleInputChange={this.handleInputChange}
						value={this.state.email}
						errorMsg={this.state.emailErrorMsg}
						inputRef={this.inputRef}
					/>
					<CustomInput
						label="password"
						type="password"
						name="password"
						handleInputChange={this.handleInputChange}
						value={this.state.password}
						errorMsg={this.state.passwordErrorMsg}
					/>
					<ButtonCollection>
						<GenericButton type="submit" value="sign in" outlined />
						<GenericButton
							value="sign in with google"
							outlined
							bg={cssColors.googleRed}
							color={cssColors.googleRed}
							darkBg="#d03325"
							iconClassName="fab fa-google"
						/>
					</ButtonCollection>
				</form>
			</StyledSignInPage>
		);
	}
}

export default SignInPage;
