/**
 * Created by maciej on 25.01.18.
 */
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyA_mR8wl1n7e27GRcMaVXcxFomIPVM49CU",
  authDomain: "react-todo-app-3190c.firebaseapp.com",
  databaseURL: "https://react-todo-app-3190c.firebaseio.com",
  projectId: "react-todo-app-3190c",
  storageBucket: "react-todo-app-3190c.appspot.com",
  messagingSenderId: "111537231495"
};
firebase.initializeApp(config);

export const database = firebase.database();