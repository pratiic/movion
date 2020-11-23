import React from "react";
import { connect } from "react-redux";

import { StyledSunIcon, StyledMoonIcon } from "../../styles/styles.icons";

import { toggleTheme } from "../../redux/theme/theme.actions";

let ThemeToggler = ({ toggleTheme, currentTheme }) => {
	return currentTheme === "dark" ? (
		<StyledSunIcon $smaller $headerElement onClick={toggleTheme} />
	) : (
		<StyledMoonIcon $smaller $headerElement onClick={toggleTheme} />
	);
};

const mapStateToProps = (state) => {
	return {
		currentTheme: state.theme.currentTheme,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleTheme: () => {
			dispatch(toggleTheme());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggler);
