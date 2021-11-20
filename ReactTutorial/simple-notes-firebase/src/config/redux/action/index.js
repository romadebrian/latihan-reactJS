import firebase from "../../firebase";

export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "Prawito Hudoro" });
  }, 2000);
};

export const registerUserAPI = (data) => (dispatch) => {
  dispatch({ type: "CHANGE_LOADING", value: true });
  return firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((res) => {
      // Signed in
      var user = res.user;
      console.log("succes", res);
      dispatch({ type: "CHANGE_LOADING", value: false });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch({ type: "CHANGE_LOADING", value: false });
    });
};
