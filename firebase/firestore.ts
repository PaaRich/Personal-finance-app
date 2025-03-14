import {
    getFirestore
} from "firebase/firestore";
import app from "./firebaseConfig";

const db = getFirestore(app);

// const collectionRef = collection(db, "budgets");

// getDocs(collectionRef)
//     .then(snapshot => {
//         snapshot.forEach(doc => {
//             console.log(doc.data());
//             });
//     })
export default db;