import React, { useState } from 'react';
import { AuthContext } from './AuthContext';


const googleProvider = new 
const AuthPorvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading,] = useState(true)







    const userInfo = {

    }
    return <AuthContext value={userInfo}>
        {children}
    </AuthContext>
};

export default AuthPorvider;