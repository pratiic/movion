import React, { createRef } from "react";
import { connect } from "react-redux";

import { StyledSignInPage, Buttons } from "./sign-in.styles";
import { StyledGoogleSignInIcon } from "../../styles/styles.icons";
import { StyledTitle, StyledSubtitle } from "../../styles/styles.title";
import { StyledFormLink } from "../../styles/styles.form";

import {
	getEmptyFieldNames,
	returnFieldObjects,
	setFieldErrorMessage,
	clearNonEmptyFieldErrorMessage,
	validateEmail,
	clearAllFields,
} from "../../utils/utils.form-validation";

import { toggleNotification } from "../../redux/notification/notification.actions";

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

	handleButtonClick = async (event) => {
		event.preventDefault();

		const toggleNotification = this.props;

		const result = await signInWithGoogle();

		if (!result.user) {
			toggleNotification("sign in failed", false);
		}
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

		const toggleNotification = this.props;

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
					} else {
						toggleNotification("sign in failed", false);
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

					<Buttons>
						<GenericButton type="submit" btnType="outlined">
							sign in
						</GenericButton>
						<GenericButton
							btnType="outlined"
							color="red"
							handleButtonClick={this.handleButtonClick}
						>
							<StyledGoogleSignInIcon $smaller /> sign in with
							google
						</GenericButton>
					</Buttons>
				</form>
			</StyledSignInPage>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleNotification: (notificationMessage, success) => {
			dispatch(toggleNotification(notificationMessage, success));
		},
	};
};

export default connect(null, mapDispatchToProps)(SignInPage);
