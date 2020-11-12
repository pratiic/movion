import React from "react";
import { connect } from "react-redux";

import { StyledSunIcon } from "./theme-toggler.styles";
import { StyledMoonIcon } from "./theme-toggler.styles";

import { toggleTheme } from "../../redux/theme/theme.actions";

let ThemeToggler = ({ toggleTheme, currentTheme }) => {
	return currentTheme === "dark" ? (
		<StyledSunIcon onClick={toggleTheme} />
	) : (
		<StyledMoonIcon onClick={toggleTheme} />
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
