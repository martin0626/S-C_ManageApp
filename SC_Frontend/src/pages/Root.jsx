import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";

export default function RootPage(){
    return (
        <>
            <Navigation/>
            <section className="main-section">
                <Outlet />
            </section>
        </>
    )
}