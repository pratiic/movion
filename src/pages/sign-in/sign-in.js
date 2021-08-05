import React, { createRef } from "react";

import { StyledSignInPage, ButtonCollection } from "./sign-in.styles";
import { StyledGoogleSignInIcon } from "../../styles/styles.icons";
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
} from "../../utils/utils.form-validation";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import CustomInput from "../../components/custom-input/custom-input";
import GenericButton from "../../components/generic-button/generic-button";
import Spinner from "../../components/spinner/spinner";

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

			showSpinner: false,
		};

		this.inputRef = createRef();

		this.returnFieldObjects = returnFieldObjects.bind(this);
		this.setFieldErrorMessage = setFieldErrorMessage.bind(this);
		this.clearNonEmptyFieldErrorMessage =
			clearNonEmptyFieldErrorMessage.bind(this);
		this.clearAllFields = clearAllFields.bind(this);
	}

	handleButtonClick = () => {
		signInWithGoogle();
	};

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	toggleSpinner = () => {
		this.setState((prevState) => {
			return {
				showSpinner: !prevState.showSpinner,
			};
		});
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
			} else {
				this.toggleSpinner();

				try {
					await auth.signInWithEmailAndPassword(
						this.state.email,
						this.state.password
					);

					this.toggleSpinner();
				} catch (error) {
					this.toggleSpinner();

					if (error.code === "auth/wrong-password") {
						this.setFieldErrorMessage(
							["password"],
							"wrong password"
						);
					} else if (error.code === "auth/user-not-found") {
						this.setFieldErrorMessage(
							["email"],
							"user with this email does not exist"
						);
					}
				}
			}
		}
	};

	componentDidMount() {
		document.title = "Sign in to movion";

		this.inputRef.current.focus();
	}

	componentWillUnmount() {
		this.clearAllFields();
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

					{this.state.showSpinner ? (
						<Spinner height="4rem" smaller />
					) : null}

					<ButtonCollection>
						<GenericButton type="submit" btnType="outlined">
							sign in
						</GenericButton>
						<GenericButton
							btnType="outlined"
							bg={cssColors.googleRed}
							color={cssColors.googleRed}
							darkBg="#d03325"
							hoverColor="white"
							handleButtonClick={this.handleButtonClick}
						>
							<StyledGoogleSignInIcon $smaller /> sign in with
							google
						</GenericButton>
					</ButtonCollection>
				</form>
			</StyledSignInPage>
		);
	}
}

export default SignInPage;
