import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../firebaes.config';

export const UserContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const changeProfile = (currentUser, name, photo) => {
        updateProfile(currentUser, {
            displayName: name,
            photoURL: photo
        })
        console.log("from change email: ",currentUser)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            if(user && user.email){
                const email = {
                    email: user.email
                }
                fetch("https://toy-house-server.vercel.app/token",{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(email)
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem("toy-house-token",data.token)
                })
            }
            else{
                localStorage.removeItem("toy-house-token")
            }
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const userInfo = {
        user,
        loading,
        register,
        logIn,
        googleLogIn,
        logOut,
        changeProfile
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;