export const apiInfo = {
	baseURLs: {
		tmdb: "https://api.themoviedb.org/3",
		images: "https://image.tmdb.org/t/p/original",
	},
	apiKey: "04d44457631804b60abc176ff4864ecd",
	language: "en-US",
};

export const getURL = (mode, page, type, query, id) => {
	const unChangingPart = `api_key=${apiInfo.apiKey}&language=${apiInfo.language}`;

	if (type === "popular") {
		return `${apiInfo.baseURLs.tmdb}/${mode}/popular?${unChangingPart}&page=${page}`;
	} else if (type === "search") {
		return `${apiInfo.baseURLs.tmdb}/search/${mode}?${unChangingPart}&page=${page}&include_adult=false&query=${query}`;
	} else if (type === "details") {
		return `${apiInfo.baseURLs.tmdb}/${mode}/${id}?${unChangingPart}`;
	} else if (type === "similar") {
		return `${apiInfo.baseURLs.tmdb}/${mode}/${id}/similar?${unChangingPart}&page=${page}`;
	}
};
