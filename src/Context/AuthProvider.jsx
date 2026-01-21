import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from './../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [bannerData, setBannerData] = useState([]);
    const [recentBills, setRecentBills] = useState([]);
    // const [MyBills,setMyBills] = useState([])
    const [allBills, setAllBills] = useState([]);
    const [loading, setLoading] = useState(true)
    const [loading1, setLoading1] = useState(true)
    const [error, setError] = useState(true)
    const [togl, setTogl] = useState(null)

    //banner data loading 
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

    //all data from server from MongoDB
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${import.meta.env.VITE_base_url}/bills/all-bills`);
                const data = await res.json();
                setAllBills(data);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch banner data:", err);
                setError(err);
                setAllBills([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    //recent data from mongoDB
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_base_url}`)
            .then((res) => {
                setRecentBills(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching bills:", err);
                setLoading(false);
            });
    }, []);
    

    //create user with Email and Password
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Log in With Email Nand Password
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //log Out 
    const logOut = () => {
        return signOut(auth)
    }

    const updateuser =(obj)=>{
        return updateProfile(auth.currentUser,obj)
    }



    const authinfo = {
        bannerData,
        user, setUser,
        loading, setLoading,
        loading1, setLoading1,
        error, setError,
        togl, setTogl,
        createUserWithEmail, signIn,
        googleSignIn,
        logOut,
        recentBills, setRecentBills,
        allBills, setAllBills,
        // MyBills,setMyBills,
        updateuser




    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
            console.log(currentuser);
            setLoading1(false)
        })

        return () => {
            unsubscribe()
        }

    }, [])

    return <AuthContext.Provider value={authinfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;