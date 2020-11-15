export const apiInfo = {
	baseURLs: {
		tmdb: "https://api.themoviedb.org/3",
		images: "https://image.tmdb.org/t/p/original",
	},
	apiKey: "04d44457631804b60abc176ff4864ecd",
	language: "en-US",
};

export const getURL = (mode, page, type, query) => {
	if (type === "popular") {
		return `${apiInfo.baseURLs.tmdb}/${mode}/popular?api_key=${apiInfo.apiKey}&language=${apiInfo.language}&page=${page}`;
	} else if (type === "search") {
		return `${apiInfo.baseURLs.tmdb}/search/${mode}?api_key=${apiInfo.apiKey}&language=${apiInfo.language}&page=${page}&include_adult=false&query=${query}`;
	}
};
