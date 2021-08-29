import React from "react";
import { connect } from "react-redux";

import { StyledSunIcon, StyledMoonIcon } from "../../styles/styles.icons";

import { toggleTheme } from "../../redux/theme/theme.actions";

import themeChangeSound from "../../assets/sounds/theme-change-sound.mp3";

import HeaderUtil from "../header-util/header-util";

const ThemeToggler = ({ toggleTheme, currentTheme }) => {
	const themeToggleSound = new Audio(themeChangeSound);
	const localStorage = window.localStorage;

	const handleThemeTogglerClick = () => {
		toggleTheme();
		playThemeToggleSound();

		localStorage.setItem(
			"currentTheme",
			currentTheme === "dark" ? "light" : "dark"
		);
	};

	const playThemeToggleSound = () => {
		themeToggleSound.play();
	};

	return (
		<HeaderUtil clickHandler={handleThemeTogglerClick}>
			{currentTheme === "dark" ? (
				<StyledSunIcon $smaller $headerElement />
			) : (
				<StyledMoonIcon $smaller $headerElement />
			)}
		</HeaderUtil>
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
