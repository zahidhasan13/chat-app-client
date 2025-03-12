import React, { useState } from 'react';
import useAuthContext from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {dispatch} = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true)
        setAuthError('')
        
        const res = await fetch("http://localhost:8400/api/user/login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })

        const data = await res.json();

        if(!res.ok){
            setIsLoading(false);
            setAuthError(data.Error)
        }
        if(res.ok){
            dispatch({type: "LOGIN", payload: data})
            setIsLoading(false);
            localStorage.setItem("user", JSON.stringify(data))
            navigate('/')
        }
    }

    return {login, isLoading, authError}
};

export default useLogin;