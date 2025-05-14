import { getFirestore, collection, addDoc,doc,deleteDoc } from "firebase/firestore";
import {app} from "./firebaseConfig";
import { potItemProp,budgetItemProp } from "../types";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../src/redux/store";
import { toast } from "react-toastify";

const db = getFirestore(app);

const budgetCollectionRef = collection(db, "Budgets");
const potsCollectionRef = collection(db, 'Pots');




// add pot
const addPotFunc = (item: potItemProp): ThunkAction<void, RootState, unknown, AnyAction> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return async () => {
        try {
             await addDoc(potsCollectionRef, item);
            toast.success("Pot added successfully");
            console.log("items added", item);
            
        } catch (err:unknown) {
            if (err instanceof Error) {
                toast.error(err.message);
                console.log(err.message);
            } else {
                toast.error("An unknown error occurred");
                console.log("An unknown error occurred", err);
            }
            // Dispatch a failure action if needed
        }
    };
};

//delete pot


// add budget
const addBudgetFunc = (item: budgetItemProp): ThunkAction<void, RootState, unknown, AnyAction> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return async () => {
        try {
             await addDoc(budgetCollectionRef, item);
            toast.success("Budget added successfully");
            console.log("items added", item);
            
        } catch (err:unknown) {
            if (err instanceof Error) {
                toast.error(err.message);
                console.log(err.message);
            } else {
                toast.error("An unknown error occurred");
                console.log("An unknown error occurred", err);
            }
            // Dispatch a failure action if needed
        }
    };
};


//delete budget
const deleteBudgetFunc = (id: string): ThunkAction<void, RootState, unknown, AnyAction> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return async () => {
        try {
            const docRef = doc(db, "Budgets", id);
            await deleteDoc(docRef);
            toast.success("Budget deleted successfully");
        } catch (err:unknown) {
            if (err instanceof Error) {
                toast.error(err.message);
                console.log(err.message);
            } else {
                toast.error("An unknown error occurred");
                console.log("An unknown error occurred", err);
            }
        }
    };
};

export { db, budgetCollectionRef, potsCollectionRef, addPotFunc,addBudgetFunc,deleteBudgetFunc };