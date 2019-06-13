import firebase from "../../../Config/firebase";
import axios from "axios";

const FETCH_USER = "fetch_user";

export const fetchUser = () => dispatch => {
  firebase.auth().onAuthStateChanged(function(res) {
    if (res) {
      // Retrieving useful info from Firebase Auth
      let { email, uid, photoURL, displayName } = res;
      // Retrieving The First Name
      let firstName = displayName.split(" ")[0];
      // Retrieving The Last Name
      let lastName =
        displayName.split(" ").length === 2
          ? displayName.split(" ")[1]
          : displayName.split(" ")[2];
      axios
        .post("http://localhost:5000/newuser", {
          email,
          uid,
          photoURL,
          displayName,
          firstName,
          lastName
        })
        .then(res => {
          let user = res.data;
          dispatch({
            type: FETCH_USER,
            payload: user
          });
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      return dispatch({ type: FETCH_USER });
    }
  });
};

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
