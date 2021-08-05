import { createFavoriteDocument } from "../firebase/firebase.utils";

export const addToFavorites = async (favoriteObject) => {
	console.log(favoriteObject);

	const { id, currentUserId, title, release_date, poster_path, type } =
		favoriteObject;

	const status = await createFavoriteDocument({
		id,
		currentUserId,
		title,
		release_date,
		poster_path,
		type,
	});

	return status;
};

export const showAddedToFavoritesNotification = (
	status,
	toggleNotification
) => {
	if (status === "success") {
		toggleNotification("added to favorites", "success");
	}
};
