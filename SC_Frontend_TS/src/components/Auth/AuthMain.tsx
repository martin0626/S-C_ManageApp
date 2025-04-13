import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";


export default function AuthMain(){
    const [authType, setAuthType] = useState<"login" | "register">('register');

    const handleChangeToLogin = ()=>{
        setAuthType('login')
    }

    const handleChangeToRegister = ()=>{
        setAuthType('register')
    }

    return (
        <article className="auth-main">
            <button onClick={handleChangeToRegister}>Register</button>
            <button onClick={handleChangeToLogin}>Login</button>
            {
                authType == 'register' 
                    ?
                        <RegisterForm />
                    :
                        <LoginForm />
            }
        </article>
    )
}