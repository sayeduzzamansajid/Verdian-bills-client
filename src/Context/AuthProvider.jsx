import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user,setUser] = useState(null)
    const [bannerData, setBannerData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)
    const [togl, setTogl] = useState(null)

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                setLoading(true);
                const res = await fetch('/bannerData.json'); 
                const data = await res.json();
                setBannerData(data); 
                setError(null);
            } catch (err) {
                console.error("Failed to fetch banner data:", err);
                setError(err);
                setBannerData([]);
            } finally {
                setLoading(false); 
            }
        };

        fetchBanners();
    }, []);

    //create user with Email and Password
    const createUserWithEmail=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email ,password)
    }
    //Log in With Email Nand Password
    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth,email, password)
    } 
    //google sign in
    const googleSignIn =()=>{
        return signInWithPopup(auth,googleProvider)
    }
    //log Out 
    const logOut =()=>{
        return signOut(auth)
    }




    const authinfo = {
        bannerData,
        user, setUser,
        loading, setLoading,
        error,setError,
        togl,setTogl,
        createUserWithEmail,signIn,
        googleSignIn,
        logOut,




    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }

    },[])

    return <AuthContext value={authinfo}>
        {children}
    </AuthContext>
};

export default AuthProvider;