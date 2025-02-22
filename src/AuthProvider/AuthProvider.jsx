import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [emailReference, setEmailReference] = useState("");
  const axiosPublic = useAxiosPublic();

  const provider = new GoogleAuthProvider();
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleGoogleLogin = (email, password) => {
    return signInWithPopup(auth, provider);
  };
  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  // const resetPass = (givenEmail) => {
  //   return sendPasswordResetEmail(auth, givenEmail);
  // };
  const handleLogout = () => {
    return signOut(auth);
  };
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        console.log("Curernt User:", currentUser);
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
        // const { data } = await axios.post(
        //   `${import.meta.env.VITE_API_URL}/jwt`,
        //   {
        //     email: currentUser?.email,
        //   },
        //   { withCredentials: true }
        // );
        // console.log(data);

      } else {
        localStorage.removeItem("access-token" );
        setUser(null);
        setLoading(false);
        // const { data } = await axios.get(
        //   `${import.meta.env.VITE_API_URL}/logout`,
        //   { withCredentials: true }
        // );
      }
      
      return () => {
        unsubscribe();
      };
    });
  }, [axiosPublic]);

  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    manageProfile,
    handleLogout,
    user,
    loading,
    setUser,
    emailReference,
    setEmailReference,
  };

  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
