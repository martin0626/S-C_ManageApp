import AuthForm from "./AuthForm";
import AuthInput from "./AuthInput";

export default function LoginComp(){
    return (
        <AuthForm>
            <AuthInput name={'email'} label={'Email'} type={'text'}/>
            <AuthInput name={'password'} label={'Password'} type={'password'}/>
        </AuthForm>
    )
}