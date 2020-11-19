import React from "react";

import { StyledSignInPage, ButtonCollection } from "./sign-in.styles";

import { cssColors } from "../../styles/styles.variables";

import {
	StyledTitle,
	StyledSubtitle,
	StyledFormLink,
} from "../../styles/styles.generic";

import CustomInput from "../../components/custom-input/custom-input";
import GenericButton from "../../components/generic-button/generic-button";

class SignInPage extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};
	}

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		return (
			<StyledSignInPage>
				<StyledTitle marginbt="0rem">sign in to movion</StyledTitle>
				<StyledSubtitle marginbt="5.5rem">
					Do not have an account?{" "}
					<StyledFormLink to="/signup">sign up here</StyledFormLink>
				</StyledSubtitle>

				<form>
					<CustomInput
						label="email"
						type="email"
						name="email"
						handleInputChange={this.handleInputChange}
						value={this.state.email}
					/>
					<CustomInput
						label="password"
						type="password"
						name="password"
						handleInputChange={this.handleInputChange}
						value={this.state.password}
					/>
					<ButtonCollection>
						<GenericButton value="sign in" outlined />
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
