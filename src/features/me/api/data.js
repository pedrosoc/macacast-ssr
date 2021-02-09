import { firebaseDatabase } from "@firebaseApi";
import parser from "../utils/parser";

const getCategories = () => new Promise((resolve, reject) => {
    firebaseDatabase
        .ref("nav")
        .on(
            "value",
            snapshot => resolve(parser.apiCategories(snapshot.val())),
            errorObject => reject(errorObject)
        );
});

export default {
    getCategories
};
