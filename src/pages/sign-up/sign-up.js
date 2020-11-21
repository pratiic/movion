import React, { createRef } from "react";

import { StyledSignUpPage } from "./sign-up.styles";

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

import { createUserDocument, auth } from "../../firebase/firebase.utils";

import CustomInput from "../../components/custom-input/custom-input";
import GenericButton from "../../components/generic-button/generic-button";

class SignUpPage extends React.Component {
	constructor() {
		super();

		this.state = {
			username: "",
			usernameErrorMsg: "",
			email: "",
			emailErrorMsg: "",
			password: "",
			passwordErrorMsg: "",
			retypedPassword: "",
			retypedPasswordErrorMsg: "",

			fieldValueNamesToValidate: [
				"username",
				"email",
				"password",
				"retypedPassword",
			],
			allFieldValueNames: [
				"username",
				"usernameErrorMsg",
				"email",
				"emailErrorMsg",
				"password",
				"passwordErrorMsg",
				"retypedPassword",
				"retypedPasswordErrorMsg",
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

	handleFormSubmit = async (event) => {
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
			}

			if (this.state.password !== this.state.retypedPassword) {
				this.setFieldErrorMessage(
					["password", "retypedPassword"],
					"these passwords do not match"
				);
			} else {
				const { username } = this.state;

				try {
					const { user } = await auth.createUserWithEmailAndPassword(
						this.state.email,
						this.state.password
					);

					const { email, uid } = user;

					await createUserDocument({
						email,
						uid,
						displayName: username,
					});
				} catch (error) {
					console.log(error);
				}
			}
		}
	};

	componentDidMount() {
		this.inputRef.current.focus();
	}

	componentWillUnmount() {
		this.clearAllFields();
	}

	render() {
		return (
			<StyledSignUpPage>
				<StyledTitle marginbt="0rem">sign up with movion</StyledTitle>
				<StyledSubtitle>
					Already have an account?{" "}
					<StyledFormLink to="/signin">sign in here</StyledFormLink>
				</StyledSubtitle>

				<form onSubmit={this.handleFormSubmit}>
					<CustomInput
						label="username"
						type="text"
						name="username"
						value={this.state.username}
						handleInputChange={this.handleInputChange}
						errorMsg={this.state.usernameErrorMsg}
						inputRef={this.inputRef}
					/>
					<CustomInput
						label="email"
						type="email"
						name="email"
						value={this.state.email}
						handleInputChange={this.handleInputChange}
						errorMsg={this.state.emailErrorMsg}
					/>
					<CustomInput
						label="password"
						type="password"
						name="password"
						value={this.state.password}
						handleInputChange={this.handleInputChange}
						errorMsg={this.state.passwordErrorMsg}
					/>
					<CustomInput
						label="retype password"
						type="password"
						name="retypedPassword"
						value={this.state.retypedPassword}
						handleInputChange={this.handleInputChange}
						errorMsg={this.state.retypedPasswordErrorMsg}
					/>
					<GenericButton type="submit" value="sign up" outlined />
				</form>
			</StyledSignUpPage>
		);
	}
}

export default SignUpPage;
