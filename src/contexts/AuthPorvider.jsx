import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.confg';


const googleProvider = new GoogleAuthProvider()
const AuthPorvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading,] = useState(true)


    const sigInWithGoolge = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)

        })

        return () => {
            unsubscribe()
        }
    }, [])

    const userInfo = {
        sigInWithGoolge,
        user, setUser,
        loading, setLoading,
        signOutUser

    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthPorvider;