import { auth } from "../service/firebase";
import firebase from "firebase";

const provider = new firebase.auth.GoogleAuthProvider();
const GithubProvider = new firebase.auth.GithubAuthProvider();
export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
export const signInWithGithub = () =>
  firebase.auth().signInWithPopup(GithubProvider);
