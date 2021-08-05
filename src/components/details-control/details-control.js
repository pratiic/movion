import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { StyledDetailsControl } from "./details-control.styles";
import {
	StyledThumbsUpIcon,
	StyledHeartIcon,
	StyledTickIcon,
	StyledThumbsDownIcon,
} from "../../styles/styles.icons";

import { toggleNotification } from "../../redux/notification/notification.actions";

import { firestore } from "../../firebase/firebase.utils";

import {
	addToFavorites,
	showAddedToFavoritesNotification,
} from "../../utils/utils.favorites";
import { getContentType } from "../../utils/utils.components";

import DetailsController from "../details-controller/details-controller";

const DetailsControl = ({ contentId, currentUser, contentMainDetails }) => {
	const [addedToFavorites, setAddedToFavorites] = useState(false);
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [liked, setLiked] = useState(false);
	const [disliked, setDisliked] = useState(false);

	useEffect(() => {
		if (currentUser) {
			const currentUserFavoritesCollectionRef = firestore
				.collection("users")
				.doc(currentUser.id)
				.collection("favorites");
			//checking if the content is already added in favorites
			currentUserFavoritesCollectionRef.onSnapshot((snapshot) => {
				currentUserFavoritesCollectionRef
					.doc(contentId)
					.get()
					.then((doc) => {
						if (doc.exists) {
							setAddedToFavorites(true);
						}
					});
			});
		}

		//checking if the content is already liked

		const likesDislikesCollectionRef =
			firestore.collection("likesdislikes");

		const likedByCollectionRef = likesDislikesCollectionRef
			.doc(contentId)
			.collection("likedBy");

		const dislikedByCollectionRef = likesDislikesCollectionRef
			.doc(contentId)
			.collection("dislikedBy");

		likedByCollectionRef.onSnapshot((snapshot) => {
			likedByCollectionRef.get().then((data) => {
				setLikes(data.docs.length);
			});

			if (currentUser) {
				likedByCollectionRef
					.doc(currentUser.id)
					.get()
					.then((doc) => {
						if (doc.exists) {
							setLiked(true);
						} else {
							setLiked(false);
						}
					});
			}
		});

		dislikedByCollectionRef.onSnapshot((snapshot) => {
			dislikedByCollectionRef.get().then((data) => {
				setDislikes(data.docs.length);
			});

			if (currentUser) {
				dislikedByCollectionRef
					.doc(currentUser.id)
					.get()
					.then((doc) => {
						if (doc.exists) {
							setDisliked(true);
						} else {
							setDisliked(false);
						}
					});
			}
		});
	});

	const addContentToFavorites = async () => {
		const { title, name, poster_path, release_date, first_air_date, id } =
			contentMainDetails;

		const status = await addToFavorites({
			id,
			currentUserId: currentUser.id,
			title: title || name,
			poster_path,
			release_date: release_date || first_air_date,
			type: getContentType(title, name),
		});

		showAddedToFavoritesNotification(status, toggleNotification);
	};

	const addContentToLikedBy = async () => {
		await firestore
			.collection("likesdislikes")
			.doc(contentId)
			.collection("likedBy")
			.doc(currentUser.id)
			.set({});
		await firestore
			.collection("likesdislikes")
			.doc(contentId)
			.collection("dislikedBy")
			.doc(currentUser.id)
			.delete();
	};

	const addContentToDislikedBy = async () => {
		await firestore
			.collection("likesdislikes")
			.doc(contentId)
			.collection("dislikedBy")
			.doc(currentUser.id)
			.set({});
		await firestore
			.collection("likesdislikes")
			.doc(contentId)
			.collection("likedBy")
			.doc(currentUser.id)
			.delete();
	};

	return (
		<StyledDetailsControl>
			{addedToFavorites ? (
				<DetailsController jobDone>
					<StyledTickIcon /> already in favorites
				</DetailsController>
			) : (
				<DetailsController
					handleDetailsControllerClick={addContentToFavorites}
				>
					<StyledHeartIcon $medium /> add to favorites
				</DetailsController>
			)}

			<DetailsController
				jobDone={liked}
				handleDetailsControllerClick={addContentToLikedBy}
			>
				<StyledThumbsUpIcon $medium /> {likes}
			</DetailsController>

			<DetailsController
				jobDone={disliked}
				handleDetailsControllerClick={addContentToDislikedBy}
			>
				<StyledThumbsDownIcon $medium /> {dislikes}
			</DetailsController>
		</StyledDetailsControl>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.currentUser.currentUser,
	};
};

export default connect(mapStateToProps)(DetailsControl);
