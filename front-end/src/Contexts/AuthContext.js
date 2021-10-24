import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/Firebase";
import useCurrentUser from "../util/useCurrentUser";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const currentUser = useCurrentUser();
  const dispatch = useDispatch();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
    
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("AUTH STATE CHANGE")
      dispatch({
        type: "CURRENT_USER",
        currentUser: user,
      });
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
