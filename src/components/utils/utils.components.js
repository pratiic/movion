export const numToStrMonthMap = {
	0: "jan",
	1: "feb",
	2: "mar",
	3: "apr",
	4: "may",
	5: "jun",
	6: "jul",
	7: "aug",
	8: "sep",
	9: "oct",
	10: "nov",
	11: "dec",
};

export const searchModeMap = {
	movies: "movie",
	"tv shows": "tv",
};

export const modeMap = {
	movie: "movies",
	tv: "tv shows",
};

export const renderReleaseDate = (releaseDate) => {
	const date = new Date(releaseDate);
	return `${date.getDate()} ${
		numToStrMonthMap[date.getMonth()]
	}, ${date.getFullYear()}`;
};

export const getWithCommas = (number) => {
	if (number) {
		let strNumber = number.toString();
		let arrNumber = Array.from(strNumber);
		let newArrNumber = [];

		let reversify = (array) => {
			let newArray = [];
			for (let i = array.length - 1; i >= 0; i--) {
				newArray.push(array[i]);
			}
			return newArray;
		};

		newArrNumber = reversify(arrNumber);

		let commafy = (array) => {
			let count = Math.floor(array.length / 3);

			for (let i = 0; i <= count; i++) {
				array.splice(3 * i + i, 0, ",");
			}

			return array;
		};

		newArrNumber = commafy(newArrNumber);

		arrNumber = [...reversify(newArrNumber)];

		if (arrNumber[0] === ",") {
			arrNumber = arrNumber.slice(1, arrNumber.length - 1);
		} else {
			arrNumber = arrNumber.slice(0, arrNumber.length - 1);
		}

		strNumber = arrNumber.join("");

		return `$ ${strNumber}`;
	} else {
		return "unknown";
	}
};

export const renderGenericButton = (
	currentPage,
	totalPages,
	spinner,
	button,
	condition
) => {
	if (currentPage < totalPages) {
		if (condition) {
			return spinner;
		} else {
			return button;
		}
	} else {
		return null;
	}
};

export function toggleDropdown() {
	this.setState((prevState) => {
		return {
			showDropdown: !prevState.showDropdown,
		};
	});
}

export const getContentType = (title, name, type) => {
	if (type) {
		return type;
	} else if (!type && (title || name)) {
		if (title) {
			return "movie";
		} else {
			return "tv";
		}
	}
};

export const getDateAndTime = (milliseconds) => {
	const date = new Date(milliseconds);
	return `${
		numToStrMonthMap[date.getMonth()]
	} ${date.getDate()}, ${date.getFullYear()} ${
		date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
	}:${date.getMinutes()} ${date.getHours() > 12 ? "pm" : "am"}`;
};
