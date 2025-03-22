import { Link, Navigate } from "react-router";
import LoginForm from "../components/Auth/LoginForm";
import { useAppSelector } from "../hooks/reduxHooks";
import { useState } from "react";
import RegisterForm from "../components/Auth/RegisterForm";

export default function LoginRegisterPage(){

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    const [authType, setAuthType] = useState<"login" | "register">('register');



    // If the user is logged in, navigate to /stores directly
    if (isLoggedIn) {
        return <Navigate to="/stores" />;
    }

    const handleChangeToLogin = ()=>{
        setAuthType('login')
    }

    const handleChangeToRegister = ()=>{
        setAuthType('register')
    }

    return (
        <section className="auth-section">
            <button onClick={handleChangeToRegister}>Register</button>
            <button onClick={handleChangeToLogin}>Login</button>
            {
                authType == 'register' 
                    ?
                        <RegisterForm/>
                    :
                        <LoginForm />

                
            }
        </section>
    )
}