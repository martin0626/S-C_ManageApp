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
            <div className="auth-controller">
                <p onClick={handleChangeToRegister} className={`auth-controller-left ${authType === 'register' && 'active-controller'}`}>Sign Up</p>
                <p onClick={handleChangeToLogin} className={`auth-controller-right ${authType === 'login' && 'active-controller'}`}>Sign In</p>
            </div>
            
            {/* <button onClick={handleChangeToRegister}>Register</button>
            <button onClick={handleChangeToLogin}>Login</button> */}

            <div className={authType === 'register' ? 'visibleRegister' : 'invisibleRegister'}>
                <RegisterForm />
            </div>
            <div className={authType === 'login' ? 'visibleLogin' : 'invisibleLogin'} >
                <LoginForm />
            </div>
        </article>
    )
}