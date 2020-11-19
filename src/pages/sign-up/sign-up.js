import React from "react";

import { StyledSignUpPage } from "./sign-up.styles";

import {
	StyledTitle,
	StyledSubtitle,
	StyledFormLink,
} from "../../styles/styles.generic";

import CustomInput from "../../components/custom-input/custom-input";
import GenericButton from "../../components/generic-button/generic-button";

class SignUpPage extends React.Component {
	constructor() {
		super();

		this.state = {
			username: "",
			email: "",
			password: "",
			retypedPassword: "",
		};
	}

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<StyledSignUpPage>
				<StyledTitle marginbt="0rem">sign up with movion</StyledTitle>
				<StyledSubtitle marginbt="5rem">
					Already have an account?{" "}
					<StyledFormLink to="/signin">sign in here</StyledFormLink>
				</StyledSubtitle>

				<form>
					<CustomInput
						label="username"
						type="text"
						name="username"
						value={this.state.username}
						handleInputChange={this.handleInputChange}
					/>
					<CustomInput
						label="email"
						type="email"
						name="email"
						value={this.state.email}
						handleInputChange={this.handleInputChange}
					/>
					<CustomInput
						label="password"
						type="password"
						name="password"
						value={this.state.password}
						handleInputChange={this.handleInputChange}
					/>
					<CustomInput
						label="retype password"
						type="password"
						name="retypedPassword"
						value={this.state.retypedPassword}
						handleInputChange={this.handleInputChange}
					/>
					<GenericButton value="sign up" outlined />
				</form>
			</StyledSignUpPage>
		);
	}
}

export default SignUpPage;
