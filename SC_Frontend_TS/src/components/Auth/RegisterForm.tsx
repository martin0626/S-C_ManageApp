import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useMutation } from "@tanstack/react-query";
import { authActions } from "../../store/auth-slice";
import { setToken } from "../../utils/jwtSetter";
import { registerUser } from "../../utils/authHttp";

export default function RegisterForm(){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [repeatPass, setRepeatPass] = useState<string>('');
    const [selectedInput, setSelectedInput] = useState('');

    const dispatch = useAppDispatch();

    const { mutate } = useMutation({
        mutationFn: () => registerUser({name, email, password, passwordConfirm: repeatPass}),
        onSettled: (data) => {
            dispatch(authActions.login(data.data))
            setToken(data.token);
        },
    })
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutate();
    };
    
    return (
            <div className="auth-container">
                <h2>Register</h2>
                <form className="form-auth" onSubmit={handleSubmit}>
                    <div className="form-auth-group">
                        <label className={ selectedInput === 'email' ? 'selectedInputLabel' : '' } htmlFor="username">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={(e)=> setSelectedInput(e.target.id)}
                            onBlur={()=> setSelectedInput('')}
                        />
                    </div>
                    <div className="form-auth-group">
                        <label className={ selectedInput === 'username' ? 'selectedInputLabel' : '' } htmlFor="username">Username</label>
                        <input
                            id="username"
                            onChange={(e) => setName(e.target.value)}
                            required
                            onFocus={(e)=> setSelectedInput(e.target.id)}
                            onBlur={()=> setSelectedInput('')}
                        />
                    </div>
                    <div className="form-auth-group">
                        <label className={ selectedInput === 'password' ? 'selectedInputLabel' : '' } htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            onFocus={(e)=> setSelectedInput(e.target.id)}
                            onBlur={()=> setSelectedInput('')}
                        />
                    </div>
                    <div className="form-auth-group">
                        <label className={ selectedInput === 're-password' ? 'selectedInputLabel' : '' } htmlFor="re-password">Confirm Password</label>
                        <input
                            type="password"
                            id="re-password"
                            onChange={(e) => setRepeatPass(e.target.value)}
                            required
                            onFocus={(e)=> setSelectedInput(e.target.id)}
                            onBlur={()=> setSelectedInput('')}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
    )
}