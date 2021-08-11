export const apiInfo = {
	baseURLs: {
		tmdb: "https://api.themoviedb.org/3",
		images: "https://image.tmdb.org/t/p/original",
	},
	apiKey: "04d44457631804b60abc176ff4864ecd",
	language: "en-US",
};

const fetchTypeApiMap = {
	popular: "popular",
	"now playing": "now_playing",
	upcoming: "upcoming",
	"top rated": "top_rated",
	"on the air": "on_the_air",
};

export const getURL = (mode, page, fetchType, query, id) => {
	const unChangingPart = `api_key=${apiInfo.apiKey}&language=${apiInfo.language}`;
	const baseURL = apiInfo.baseURLs.tmdb;

	if (
		fetchType === "popular" ||
		fetchType === "now playing" ||
		fetchType === "upcoming" ||
		fetchType === "top rated" ||
		fetchType === "on the air"
	) {
		return `${baseURL}/${mode}/${fetchTypeApiMap[fetchType]}?${unChangingPart}&page=${page}`;
	}

	switch (fetchType) {
		case "search":
			return `${baseURL}/search/${mode}?${unChangingPart}&page=${page}&include_adult=false&query=${query}`;
		case "details":
			return `${baseURL}/${mode}/${id}?${unChangingPart}`;
		case "similar":
			return `${baseURL}/${mode}/${id}/similar?${unChangingPart}&page=${page}`;
		case "credits":
			return `${baseURL}/${mode}/${id}/credits?${unChangingPart}`;
		default:
			return;
	}
};
