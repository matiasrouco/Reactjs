import { useState } from "react";
import { createContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {

  const [changes, setChanges] = useState(true);

  const addOrderDB = (order) => {
    addDoc(collection(db, "orders"), order);
    setChanges(!changes);
  }


  const objetValue = {
    changes,
    addOrderDB
  };
  return <FirebaseContext.Provider value={objetValue}> {children} </FirebaseContext.Provider>;
};
