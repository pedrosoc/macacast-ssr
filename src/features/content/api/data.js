import { firebaseDatabase } from "@firebaseApi";
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

const getLastPostsByCategoryID = (content, limit, status, removePostID) => new Promise((resolve, reject) => {
    firebaseDatabase
        .ref(`contents/${content.id}/data`)
        .orderByChild("publicationTime")
        .limitToLast(10)
        .on(
            "value", 
            snapshot => resolve(parser.apiFilterLastPosts(snapshot.val(), limit, content.route, status, removePostID)),
            errorObject => reject(errorObject)
        );
});

const getCategoryById = (id, status) => new Promise((resolve, reject) => {
    firebaseDatabase
        .ref(`contents/${id}`)
        .on(
            "value", 
            snapshot => resolve(parser.apiContentByStatus(id, snapshot.val(), status)),
            errorObject => reject(errorObject)
        );
});

const getAllByStatus = status => new Promise((resolve, reject) => {
    firebaseDatabase
        .ref("contents")
        .on(
            "value",
            snapshot => resolve(parser.apiContentListByStatus(snapshot.val(), status)),
            errorObject => reject(errorObject)
        );
});

export default {
    getPostById,
    getLastPostsByCategoryID,
    getCategoryById,
    getAllByStatus
};
