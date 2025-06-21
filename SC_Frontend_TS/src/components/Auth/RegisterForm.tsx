import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useMutation } from "@tanstack/react-query";
import { authActions } from "../../store/auth-slice";
import { setToken } from "../../utils/jwtSetter";
import { registerUser } from "../../utils/authHttp";
import { ErrorObjT } from "../../types/globalTypes";
import FormsError from "../UI/FormErrors";
import { checkEmail } from "../../helpers/inputCheckers";





export default function RegisterForm(){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [repeatPass, setRepeatPass] = useState<string>('');
    const [selectedInput, setSelectedInput] = useState('');

    const [formErros, setFormErros] = useState<ErrorObjT []>([]);


    const dispatch = useAppDispatch();

    const { mutate } = useMutation({
        mutationFn: () => registerUser({name, email, password, passwordConfirm: repeatPass}),
        onSettled: (data) => {
            dispatch(authActions.login(data.data))
            setToken(data.token);
        },
        onError: (error)=>{
            setFormErros([{"Login Error": error.message}])
        }
    })
    
    
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        let currentErrors: ErrorObjT [] = [];
        let emailResult = checkEmail(email)

        if(emailResult != ''){
            currentErrors.push({"Email": emailResult});
        };

        if(password != repeatPass){
            currentErrors.push({"Confirm Password": "Passwords don't Match!"});
        };

        if(name.length <= 1 || password.trim().length <= 1){
            currentErrors.push({"Blank Fields": "All Fields must be filled!"});
        };

        setFormErros(currentErrors);

        if(currentErrors.length === 0){
            mutate();
        };
    };
    
    return (
            <div className="auth-container">

                <FormsError errors={formErros}/>
                <h2>Sign Up</h2> 
                
                <form className="form-auth" onSubmit={handleSubmit}>
                    <div className="form-auth-group">
                        <label className={ (selectedInput === 'email' || email != '') ? 'selectedInputLabel' : '' } htmlFor="username">Email</label>
                        <input
                            type="email"
                            id="email"
                            required
                            onChange={(e) => setEmail(e.target.value.trim())}
                            onFocus={(e)=> setSelectedInput(e.target.id)}
                            onBlur={()=> setSelectedInput('')}
                            className={ (selectedInput === 'email' || email != '') ? 'selectedInput' : '' }
                        />
                    </div>
                    <div className="form-auth-group">
                        <label className={ (selectedInput === 'username' || name != '') ? 'selectedInputLabel' : '' } htmlFor="username">Username</label>
                        <input
                            id="username"
                            onChange={(e) => setName(e.target.value.trim())}
                            required
                            onFocus={(e)=> setSelectedInput(e.target.id)}
                            onBlur={()=> setSelectedInput('')}
                            className={ (selectedInput === 'username' || name != '') ? 'selectedInput' : '' }
                        />
                    </div>
                    <div className="form-auth-group">
                        <label className={ (selectedInput === 'password' || password != '') ? 'selectedInputLabel' : '' } htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value.trim())}
                            required
                            onFocus={(e)=> setSelectedInput(e.target.id)}
                            onBlur={()=> setSelectedInput('')}
                            className={ (selectedInput === 'password' || password != '') ? 'selectedInput' : '' }
                        />
                    </div>
                    <div className="form-auth-group">
                        <label className={ (selectedInput === 're-password' || repeatPass != '') ? 'selectedInputLabel' : '' } htmlFor="re-password">Confirm Password</label>
                        <input
                            type="password"
                            id="re-password"
                            onChange={(e) => setRepeatPass(e.target.value.trim())}
                            required
                            onFocus={(e)=> setSelectedInput(e.target.id)}
                            onBlur={()=> setSelectedInput('')}
                            className={ (selectedInput === 're-password' || repeatPass != '') ? 'selectedInput' : '' }
                        />
                    </div>
                    <button type="submit" className="mainBtn">Sign Up</button>
                </form>
            </div>
    )
}