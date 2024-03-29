import React, { createRef } from "react";
import { connect } from "react-redux";

import { StyledSignUpPage } from "./sign-up.styles";
import { StyledTitle, StyledSubtitle } from "../../styles/styles.title";
import { StyledFormLink } from "../../styles/styles.form";

import { toggleNotification } from "../../redux/notification/notification.actions";

import {
	getEmptyFieldNames,
	returnFieldObjects,
	setFieldErrorMessage,
	clearNonEmptyFieldErrorMessage,
	validateEmail,
	clearAllFields,
} from "../../utils/utils.form-validation";

import { createUserDocument, auth } from "../../firebase/firebase.utils";

import CustomInput from "../../components/custom-input/custom-input";
import GenericButton from "../../components/generic-button/generic-button";
import Spinner from "../../components/spinner/spinner";

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

			showSpinner: false,
		};

		this.inputRef = createRef();

		this.returnFieldObjects = returnFieldObjects.bind(this);
		this.setFieldErrorMessage = setFieldErrorMessage.bind(this);
		this.clearNonEmptyFieldErrorMessage =
			clearNonEmptyFieldErrorMessage.bind(this);
		this.clearAllFields = clearAllFields.bind(this);
	}

	toggleSpinner = () => {
		this.setState((prevState) => {
			return {
				showSpinner: !prevState.showSpinner,
			};
		});
	};

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
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
			}

			if (this.state.password !== this.state.retypedPassword) {
				this.setFieldErrorMessage(
					["password", "retypedPassword"],
					"these passwords do not match"
				);
			} else {
				const { username } = this.state;

				this.toggleSpinner();

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

					this.toggleSpinner();
				} catch (error) {
					this.toggleSpinner();

					if (error.code === "auth/email-already-in-use") {
						this.setFieldErrorMessage(
							["email"],
							"this email is already in use in another account"
						);
					} else {
						toggleNotification("sign up failed", false);
					}
				}
			}
		}
	};

	componentDidMount() {
		document.title = "Sign up with movion";

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
					{this.state.showSpinner ? (
						<Spinner height="4rem" smaller />
					) : null}

					<GenericButton type="submit" btnType="outlined">
						sign up
					</GenericButton>
				</form>
			</StyledSignUpPage>
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

export default connect(null, mapDispatchToProps)(SignUpPage);
