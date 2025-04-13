import { Navigate } from "react-router";
import { useAppSelector } from "../hooks/reduxHooks";
import AuthMain from "../components/Auth/AuthMain";


export default function LoginRegisterPage(){

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

    // If the user is logged in, navigate to /stores directly
    if (isLoggedIn) {
        return <Navigate to="/stores" />;
    }
    

    return (
        <section className="authPage">
            <AuthMain/>
        </section>
    )
}