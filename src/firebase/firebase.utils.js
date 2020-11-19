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

export default firebase;
