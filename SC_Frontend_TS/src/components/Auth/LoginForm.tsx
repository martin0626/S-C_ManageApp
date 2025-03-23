import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { loginUser } from "../../utils/authHttp";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { authActions } from "../../store/auth-slice";
import { setToken } from "../../utils/jwtSetter";


//Controlled Component 
export default function LoginForm(){

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useAppDispatch();

    const { mutate } = useMutation({
        mutationFn: () => loginUser(email, password),
        onSettled: (data) => {
            dispatch(authActions.login(data.user))
            setToken(data.token);
        },
    })


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutate();
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="email"
                        id="username"
                        placeholder="Enter username"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}