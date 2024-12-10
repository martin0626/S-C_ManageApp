import AuthForm from "./AuthForm";
import AuthInput from "./AuthInput";

export default function RegisterComp(){
    return (
        <AuthForm>
            <AuthInput name={'email'} label={'Email'} type={'text'}/>
            <AuthInput name={'password'} label={'Password'} type={'password'}/>
            <AuthInput name={'rePassword'} label={'Repeat Password'} type={'password'}/>
        </AuthForm>
    )
}