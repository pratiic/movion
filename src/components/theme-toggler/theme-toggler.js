import React from "react";
import { connect } from "react-redux";

import { StyledSunIcon, StyledMoonIcon } from "../../styles/styles.icons";

import { toggleTheme } from "../../redux/theme/theme.actions";

import themeChangeSound from "../../assets/sounds/theme-change-sound.mp3";

const ThemeToggler = ({ toggleTheme, currentTheme }) => {
	const themeToggleSound = new Audio(themeChangeSound);

	const handleThemeTogglerClick = () => {
		toggleTheme();
		playThemeToggleSound();
	};

	const playThemeToggleSound = () => {
		themeToggleSound.play();
	};

	return currentTheme === "dark" ? (
		<StyledSunIcon
			$smaller
			$headerElement
			onClick={handleThemeTogglerClick}
		/>
	) : (
		<StyledMoonIcon
			$smaller
			$headerElement
			onClick={handleThemeTogglerClick}
		/>
	);

	// return (
	// 	<React.Fragment>
	// 		<StyledSunIcon $smaller $headerElement onClick={toggleTheme} />
	// 		<StyledMoonIcon $smaller $headerElement onClick={toggleTheme} />
	// 	</React.Fragment>
	// );
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
