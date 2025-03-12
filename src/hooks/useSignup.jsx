import React, { useState } from 'react';
import useAuthContext from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
    const [signupError, setSignupError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {dispatch} = useAuthContext();

    const signup = async (name, email, password) => {
        setIsLoading(true)
        setSignupError('')
        
        const res = await fetch("http://localhost:8400/api/user/signup",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        })

        const data = await res.json();
        console.log(data);

        if(!res.ok){
            setIsLoading(false);
            setSignupError(data.Error)
        }
        if(res.ok){
            dispatch({type: "LOGIN", payload: data})
            setIsLoading(false);
            localStorage.setItem("user", JSON.stringify(data))
            navigate('/')
        }
    }

    return {signup, isLoading, signupError}
};

export default useSignup;