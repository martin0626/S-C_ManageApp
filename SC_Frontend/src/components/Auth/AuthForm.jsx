export default function AuthForm({children}){
    return (
        <form action="submit" className="auth-form">
            {children}
        </form>
    )
}