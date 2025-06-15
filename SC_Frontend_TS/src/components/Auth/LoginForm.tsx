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
    const [selectedInput, setSelectedInput] = useState('');

    const { mutate } = useMutation({
        mutationFn: () => loginUser({email, password}),
        onSettled: (data) => {
            dispatch(authActions.login(data.user))
            setToken(data.token);
        },
    })


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutate();
    };

    // const handleBlur = (e: React.FocusEvent<HTMLInputElement>)=>{
    //     if(){

    //     }
        
    // }

    return (
        <div className="auth-container">
            <h2>Sign In</h2>
            <form className="form-auth" onSubmit={handleSubmit}>
                <div className="form-auth-group">
                    <label className={ (selectedInput === 'email' || email != '') ? 'selectedInputLabel' : '' } htmlFor="username">Email</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        onFocus={(e)=> setSelectedInput(e.target.id)}
                        onBlur={()=> setSelectedInput('')}
                        className={ (selectedInput === 'email' || email != '') ? 'selectedInput' : '' }
                    />
                </div>
                <div className="form-auth-group">
                    <label className={ (selectedInput === 'password' || password != '') ? 'selectedInputLabel' : '' } htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={(e)=> setSelectedInput(e.target.id)}
                        onBlur={()=> setSelectedInput('')}
                        className={ (selectedInput === 'password' || password != '') ? 'selectedInput' : '' }
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}