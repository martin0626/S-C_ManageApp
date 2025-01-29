import { Outlet } from "react-router";
import Navigation from "../components/Navigation/Navigation";
import { useAppSelector } from "../hooks/reduxHooks";
import PopUpMenu from "../components/UI/PopUpMenu";

export default function RootPage(){

    const openedMenu = useAppSelector((state)=> state.ui.menuComponent);


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