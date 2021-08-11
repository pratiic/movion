import { cssColors } from "./styles.variables";

export const darkTheme = {
	bodyBg: cssColors.greyDark,
	headerBg: cssColors.blueSecondary,
	textIconBlur: cssColors.greyLighter,
	textFocused: "white",
	iconFocused: "white",
	bgFocused: cssColors.greyLight,
	bgFocusedDark: cssColors.greyLightDarker,
	textMuted: cssColors.greyText,
};

export const lightTheme = {
	bodyBg: cssColors.greyLightestTwo,
	headerBg: cssColors.greyLightestTwo,
	textIconBlur: cssColors.greyTextDarker,
	textFocused: "black",
	iconFocused: "black",
	bgFocused: cssColors.greyLightestOne,
	textMuted: cssColors.greyText,
};
