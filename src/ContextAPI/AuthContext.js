import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GithubAuthProvider, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config.js';

const googleProvider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();


export const UserContext = createContext();

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [course, setCourse] = useState(null);
    const auth = getAuth(app)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const upDateUserData = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubprovider)
    }

    const userSignOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        });
        return (() => unSubscribe());
    }, [])

    const authInfo = { user, setUser, setCourse, userSignOut, googleSignIn, githubSignIn, signInUser, createUser, upDateUserData };

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;