import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  getDatabase,
  remove,
  set,
  get,
  onValue,
  ref,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import app from "./firebase";

const auth = getAuth(app);
const user = auth.currentUser;

export default function Fav() {
  return (
    <React.StrictMode>
      <h1>Hi this is fav after Obj</h1>
    </React.StrictMode>
  );
}
