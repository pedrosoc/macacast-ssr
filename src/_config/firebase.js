import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBvHkPLnyfs0SC2rWRCiANp2_dKZ5f-joA",
	authDomain: "macacast-podcast.firebaseapp.com",
	databaseURL: "https://macacast-podcast.firebaseio.com",
	projectId: "macacast-podcast",
	storageBucket: "macacast-podcast.appspot.com",
	messagingSenderId: "279535291886",
	appId: "1:279535291886:web:bae40c21a64b34f50112ff",
	measurementId: "G-8KG98WPEHR"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firebaseFirestore = firebase.firestore();

export default firebaseFirestore;
