import { Outlet } from "react-router";
import Navigation from "../components/Navigation/Navigation";
import PopUpMenu from "../components/UI/PopUpMenu";

export default function RootPage(){


    return (
        <>
            <Navigation/>
            <section className="main-section">
                <Outlet />
            </section>

            {
                <PopUpMenu/>
            }
        </>
    )
}