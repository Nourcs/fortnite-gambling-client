import firebase from "../../../Config/firebase";

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
      dispatch({
        type: FETCH_USER,
        payload: { email, uid, photoURL, displayName, firstName, lastName }
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
