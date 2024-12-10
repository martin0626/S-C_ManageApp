import LoginComp from "../components/Auth/LoginComp";
import RegisterComp from "../components/Auth/RegisteComp";



export default function AuthPage({type}){

    const typeMapper = {
        'login': <LoginComp/>,
        'register': <RegisterComp/>
    }

    var content = typeMapper[type]

    return(
        <section>
            {content}
        </section>
    )
}