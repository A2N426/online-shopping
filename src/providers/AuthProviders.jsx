import { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from '../firebaes.config';

export const UserContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    
    const register=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogIn = ()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

   useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
        setUser(user)
        setLoading(false)
    })
    return ()=>{
        unsubscribe();
    }
   },[])

    const userInfo={
        user,
        loading,
        register,
        logIn,
        googleLogIn,
        logOut
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;