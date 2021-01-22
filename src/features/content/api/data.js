import firebase, { firebaseDatabase } from "@firebaseApi";
import { parseResponse } from "@/utils/firebaseUtils";
import parser from "../utils/parser";

const getPostById = (id, content) => new Promise((resolve, reject) => {
    firebaseDatabase
        .ref(`contents/${content.id}/data/${id}`)
        .on(
            "value", 
            snapshot => resolve(parser.apiPost(id, content, snapshot.val())),
            errorObject => reject(errorObject)
        );
});

const getCategoryById = id => new Promise((resolve, reject) => {
    firebaseDatabase
        .ref(`contents/${id}`)
        .on(
            "value", 
            snapshot => resolve(parser.apiContent(id, snapshot.val())),
            errorObject => reject(errorObject)
        );
});

const getAllPromise = () => new Promise((resolve, reject) => {
    firebaseDatabase
        .ref("contents")
        .on(
            "value",
            snapshot => resolve(parser.apiContentList(snapshot.val())),
            errorObject => reject(errorObject)
        );
});

//const getAll = () => firebase
//	.collection("podcasts")
//	.orderBy("episode", "desc")
//	.get()
//	.then(q => parseResponse(q));

const getByEpisode = ep => firebase
	.collection("podcasts")
	.where("episode", "==", ep)
	.get()
	.then(q => parseResponse(q));
	
const getSome = limit => firebase
	.collection("podcasts")
	.orderBy("episode", "desc")
	.limit(limit)
	.get()
	.then(q => parseResponse(q));
	
const getSomeDifferent = async (ep, limit) => {
	const recent = await firebase
		.collection("podcasts")
		.orderBy("episode", "desc")
		.where("episode", ">", ep)
		.limit(limit)
		.get()
		.then(q => parseResponse(q));

	if (recent.length === limit)
		return recent;

	const old = await firebase
		.collection("podcasts")
		.orderBy("episode", "desc")
		.where("episode", "<", ep)
		.limit(limit - recent.length)
		.get()
		.then(q => parseResponse(q));

	return [...recent, ...old];
}

export default {
    getPostById,
    getCategoryById,
    getAllPromise,
    getSome,
    getByEpisode,
    getSomeDifferent
};
