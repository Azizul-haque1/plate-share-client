import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.confg';


const googleProvider = new GoogleAuthProvider()
const AuthPorvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading,] = useState(true)


    const sigInWithGoolge = () => {
        setLoading(false)
        return signInWithPopup(auth, googleProvider)
    }








    const userInfo = {
        sigInWithGoolge

    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthPorvider;