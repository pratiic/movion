import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAsWWdKb-u-4O6S_CLAX449MUFaKLIRCFI",
	authDomain: "movion-5fb83.firebaseapp.com",
	databaseURL: "https://movion-5fb83.firebaseio.com",
	projectId: "movion-5fb83",
	storageBucket: "movion-5fb83.appspot.com",
	messagingSenderId: "874792851481",
	appId: "1:874792851481:web:a2818dc9d03edb71b4b288",
	measurementId: "G-HZVQSVPQCR",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserDocument = async (userAuth) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email, uid, photoURL } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				username: displayName,
				email,
				id: uid,
				createdAt,
				photoURL: photoURL,
			});
		} catch (error) {
			console.log(error);
		}
	}

	return userRef;
};

export const createFavoriteDocument = async (favoriteToCreate) => {
	let {
		id,
		currentUserId,
		title,
		release_date,
		poster_path,
		type,
	} = favoriteToCreate;

	if (!release_date) {
		release_date = "";
	}

	const favoriteRef = firestore.doc(`users/${currentUserId}/favorites/${id}`);

	try {
		await favoriteRef.set({
			id,
			title,
			release_date,
			poster_path,
			type,
		});

		return "success";
	} catch (error) {
		console.log(error);
	}
};

export const getFavoritesCollectionRef = async (currentUserId) => {
	const favoritesRef = firestore.collection(
		`users/${currentUserId}/favorites`
	);

	return favoritesRef;
};

export const getAllFavoriteDocuments = async (currentUserId) => {
	const favoritesRef = firestore.collection(
		`users/${currentUserId}/favorites`
	);

	const snapShot = await favoritesRef.get();
	const favorites = snapShot.docs.map((doc) => {
		return doc.data();
	});

	return favorites;
};

export const deleteFavoriteDocument = async (id, currentUserId) => {
	const favoritesRef = await getFavoritesCollectionRef(currentUserId);
	const snapShot = await favoritesRef.get();
	const favoriteDocs = snapShot.docs;

	const docToBeDeleted = favoriteDocs.find(
		(favoriteDoc) => favoriteDoc.data().id === id
	);

	try {
		await favoritesRef.doc(docToBeDeleted.id).delete();
		return "success";
	} catch (error) {
		console.log(error);
	}
};

export default firebase;
