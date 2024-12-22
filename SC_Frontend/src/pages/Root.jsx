import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import PopUpMenu from "../components/UI/PopUpMenu";
import { useSelector } from "react-redux";

export default function RootPage(){

    const openedMenu = useSelector((state)=> state.ui.menuComponent);

    return (
        <>
            <Navigation/>
            {
                openedMenu 
                && 
                <PopUpMenu componentName={openedMenu} />
            }
            <section className="main-section">
                <Outlet />
            </section>
        </>
    )
}