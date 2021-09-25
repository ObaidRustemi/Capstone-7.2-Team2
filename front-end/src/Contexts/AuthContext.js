import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Firebase";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase/Firebase";


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // const [currentUser, setCurrentUser] = useState();
  const entireState = useSelector((state) => state)
  console.log(entireState);
  const { currentUser } = entireState;
  const dispatch = useDispatch();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password){
     return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
      return auth.signOut()
  }

  function resetPassword(email) {
      return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
      return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
      return currentUser.updatePassword(password)
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // setCurrentUser(user);
      dispatch({
        type: "CURRENT_USER",
        currentUser: user
      })
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
